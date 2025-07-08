<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class MainController extends CI_Controller {

    //fetching
    public function fetch_inbox() {
        return $this->Main_Model->fetch_inbox();
    }

    public function fetch_data(){
        $name = $this->input->get('table');
        $data = $this->Main_Model->fetch_data('tbl_' . $name);

        if ($name == 'projects'){
            foreach ($data as &$project) {
                $project->images = $this->Main_Model->get_files($name, $project->id);
            }
        }
        if ($name == 'resume'){
            foreach ($data as &$resume) {
                $resume->files = $this->Main_Model->get_files($name, $resume->id);
            }
        } 
        echo json_encode($data);
    }

    public function fetch_all_data(){
        $data = $this->Main_Model->fetch_all_data();
        echo json_encode($data);
    }

    public function update_active(){
        $id = $this->input->post('id');
        $table = $this->input->post('table');
        $is_active = $this->input->post('is_active');

        $result = $this->Main_Model->update_active('tbl_' . $table, $id, $is_active);
    
        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Status updated']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Update failed']);
        }
        
    }

    public function update_status(){
        $id = $this->input->post('id');
        $table = $this->input->post('table');
        
        $result = $this->Main_Model->update_status('tbl_' . $table, $id);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Status updated']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Update failed']);
        }
    }

    private function handle_update($fields, $table_name) {
        $id = $this->input->post('id');
        $data = [];
    
        foreach ($fields as $field) {
            $data[$field] = $this->input->post($field);
        }
    
        if ($id) {
            $this->Main_Model->update_data($table_name, $id, $data);
        }

        if ($data){
            echo json_encode(['status' => 'Success', 'message' => 'Updated Successfully']);
        }
        else{
            echo json_encode(['status' => 'Error', 'message' => error_reporting(E_ALL)]);
        }
    
    }

    //reusable 
    private function handle_insert($fields, $table_name){
        $data =[];
        foreach ($fields as $field)
        {
            $data[$field] = $this->input->post($field);
        }

        $this->Main_Model->insert_data($data, $table_name);
        if ($data){
            echo json_encode(['status' => 'Success', 'message' => 'Updated Successfully']);
        }
        else{
            echo json_encode(['status' => 'Error', 'message' => error_reporting(E_ALL)]);
        }
    }

    private function handle_insert_with_id($fields, $table_name){
        $data = [];
        foreach ($fields as $field) {
            $data[$field] = $this->input->post($field);
        }

        $insert_id = $this->Main_Model->insert_data($data, $table_name);
        if ($insert_id !== false) {
            $data['id'] = $insert_id;
        }

        return $data;
    }

    //insertion
    public function handle_contact() 
    {
        // $fields = ['contact_name', 'contact_email', 'contact_subject', 'contact_message'];

        $data = array (
            'contact_name' => $this->input->post('contact_name'),
            'contact_email' => $this->input->post('contact_email'),
            'contact_subject' => $this->input->post('contact_subject'),
            'contact_message' => $this->input->post('contact_message'),
        );

        // $this->contact_send_email($data);
        $this->Main_Model->insert_data($data, 'tbl_contact');

        $this->load->library('email');
		
        $config = array(
            'protocol'  => 'smtp',
            'smtp_host' => 'smtp.gmail.com',
            'smtp_port' => 587,
            'smtp_user' => '',
            'smtp_pass' => '', 
            'mailtype'  => 'html',
            'charset'   => 'utf-8',
            'newline'   => "\r\n",
            'smtp_crypto' => 'tls',
            'wordwrap' => false,
            'newline' => "\r\n"
        );
        $this->email->initialize($config); 


        $this->email->from($data['contact_email'], $data['contact_name']);
        $this->email->to('');
        $this->email->subject($data['contact_subject']);
        $this->email->message($data['contact_message']);

        if ($this->email->send()) {
            // Email sent successfully
        } else {
            // Email sending failed, handle the error (e.g., show an error message)
            show_error($this->email->print_debugger());
        } 
        
    }

    public function handle_about()
    {
        $fields = ['name', 'professional_title', 'introduction'];
        if($this->input->post('id')){
            $this->handle_update($fields, 'tbl_personal_info');
        }
        else{
            $insertedData = $this->handle_insert_with_id($fields, 'tbl_personal_info');
            $insert_id = isset($insertedData['id']) ? $insertedData['id'] : 0;
            echo json_encode(['new_id' => $insert_id]);
        }
        
    }   

    public function handle_resume(){
        $fields = ['resume_name', 'resume_desc'];
        if ($this->input->post('id')){
            $this->handle_update($fields, 'tbl_resume');
        }
        else{
            $insertedData = $this->handle_insert_with_id($fields, 'tbl_resume');
            $insert_id = isset($insertedData['id']) ? $insertedData['id'] : 0;
            echo json_encode(['new_id' => $insert_id]);
        }
    }

    public function handle_educ()
    {
        $fields = ['educ_type','course_link','institution_name', 'education_level', 'course_name', 'acad_year', 'institution_desc'];
        if($this->input->post('id')){
            $this->handle_update($fields, 'tbl_education');
        }else{
            $this->handle_insert($fields, 'tbl_education');
        }
    }

    public function get_project_files() {
        $project_id = $this->input->get('foreign_id');
        $origin = $this->input->get('origin');
        $files = $this->Main_Model->get_files($origin, $project_id);
        echo json_encode($files);
    }

    public function delete_file(){
        $file_id = $this->input->post('file_id');
        $table = $this->input->post('table');

        if (!$file_id) {
            echo json_encode(['status' => 'error', 'message' => 'No file ID provided']);
            return;
    }

    $this->load->model('Main_Model');
        $deleted = $this->Main_Model->delete_file_by_id($file_id, 'tbl_' . $table);

        if ($deleted) {
            echo json_encode(['status' => 'success', 'message' => 'File deleted successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete file']);
        }
    }


    function handle_skills()
    {
        $fields = ["skill_name", "skill_progress", "skill_desc"];

        if($this->input->post('id')){
            $this->handle_update($fields, 'tbl_skills');
        }else{
            $this->handle_insert($fields, 'tbl_skills');
        }
    }

    function handle_projects()
    {
        $fields = ["project_name", "project_role", "project_tech", "project_desc"];
        
        if($this->input->post('id')){
            $this->handle_update($fields, 'tbl_projects');
        }else{
            $insertedData = $this->handle_insert_with_id($fields, 'tbl_projects');
            $insert_id = isset($insertedData['id']) ? $insertedData['id'] : 0;
            echo json_encode(['new_id' => $insert_id]);
        }

        
    }
    

    function handle_exp()
    {
        $fields = ["professional_title", "company_name", "prof_year", "company_desc"];
        if($this->input->post('id')){
            $this->handle_update($fields, 'tbl_exp');
        }else{
            $this->handle_insert($fields, 'tbl_exp');
        }

    } 

    //dropzone upload to db
    public function upload_files()
    {
        $origin = $this->input->post('origin');
        $foreign_id = $this->input->post('foreign_id');
        $ds = DIRECTORY_SEPARATOR;
        $storeFolder = 'upload';

        if (!is_dir($storeFolder)) {
            mkdir($storeFolder, 0755, true);
        }

        if (isset($_FILES['file']['name'])) {

            $fileCount = is_array($_FILES['file']['name']) ? count($_FILES['file']['name']) : 1;

            for ($i = 0; $i < $fileCount; $i++) {
                $name = is_array($_FILES['file']['name']) ? $_FILES['file']['name'][$i] : $_FILES['file']['name'];
                $tmpName = is_array($_FILES['file']['tmp_name']) ? $_FILES['file']['tmp_name'][$i] : $_FILES['file']['tmp_name'];
                $type = is_array($_FILES['file']['type']) ? $_FILES['file']['type'][$i] : $_FILES['file']['type'];

                if (!empty($tmpName) && is_uploaded_file($tmpName)) {
                    $filename = basename($name);
                    $targetFile = $storeFolder . $ds . $filename;

                    if (move_uploaded_file($tmpName, $targetFile)) {
                        $insert_data = array(
                            "file_name" => $filename,
                            "file_path" => $targetFile,
                            "file_type" => $type,
                            "origin" => $origin,
                            "foreign_id" => $foreign_id
                        );
                        $this->Main_Model->insert_data($insert_data, 'tbl_files', []);
                    }
                }
            }
        }
    }

    public function handle_login() {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
    
        $user = $this->Main_Model->check_credentials($username, $password);
    
        if ($user) {
            $this->session->set_userdata([
                'user_id' => $user->id,
                'username' => $user->username,
                'logged_in' => true
            ]);
            echo json_encode(['success' => true, 'redirect' => base_url('about_admin')]);
        } else {
            echo json_encode(['success' => false, 'redirect' => base_url('admin_dashboard'), 'message' => 'Invalid username or password']);
        }
    }

    public function logout_admin() {
        $this->session->sess_destroy();
        redirect('index.php');
    }

}
