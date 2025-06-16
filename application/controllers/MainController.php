<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MainController extends CI_Controller {

    //fetching
    public function fetch_inbox() {
        return $this->Main_Model->fetch_inbox();
    }

    public function fetch_data(){
        $name = $this->input->get('table');
        $data = $this->Main_Model->fetch_data('tbl_' . $name);

        if ($name == 'projects') {
            foreach ($data as &$project) {
                $project->images = $this->Main_Model->get_files($name, $project->id);
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
    
        return $data;
    
    }

    //reusable 
    private function handle_insert($fields, $table_name){
        $data =[];
        foreach ($fields as $field)
        {
            $data[$field] = $this->input->post($field);
        }

        $this->Main_Model->insert_data($data, $table_name, []);
        return $data;
    }

    private function handle_insert_with_id($fields, $table_name)
    {
    $data = [];
    foreach ($fields as $field) {
        $data[$field] = $this->input->post($field);
    }

    $insert_id = $this->Main_Model->insert_data($data, $table_name, []);
    if ($insert_id !== false) {
        $data['id'] = $insert_id;
    }

    return $data;
    }

    //insertion
    public function insert_contact() 
    {
        $fields = ['contact_name', 'contact_email', 'contact_subject', 'contact_message'];
        $contact_data = $this->handle_insert($fields, 'tbl_contact');

        // $this->contact_send_email($contact_data);
    }

    public function insert_about()
    {
        $fields = ['name', 'professional_title', 'introduction'];
        $this->handle_insert($fields, 'tbl_personal_info');
    }   

    public function insert_educ()
    {
        $fields = ['institution_name', 'education_level', 'acad_year', 'institution_desc'];
        $this->handle_insert($fields, 'tbl_education');
    }

    public function update_educ()
    {
        $fields = ['institution_name', 'education_level', 'acad_year', 'institution_desc'];
        $this->handle_update($fields, 'tbl_education');
    }


    function insert_skills()
    {
        $fields = ["skill_name", "skill_progress", "skill_desc"];
        $this->handle_insert($fields, 'tbl_skills');
    }

    function insert_projects()
    {
        $fields = ["project_name", "project_role", "project_tech", "project_desc"];
        $insertedData = $this->handle_insert_with_id($fields, 'tbl_projects');
        $insert_id = isset($insertedData['id']) ? $insertedData['id'] : 0;

        echo json_encode(['new_id' => $insert_id]);
    }
    

    function insert_exp()
    {
        $fields = ["professional_title", "company_name", "prof_year", "company_desc"];
        $this->handle_insert($fields, 'tbl_exp');
    } 

    //dropzone upload to db
    public function upload_image()
    {
        $origin = $this->input->post('origin');
        $foreign_id = $this->input->post('foreign_id');
        $ds = DIRECTORY_SEPARATOR;
        $storeFolder = 'upload';

        if (!is_dir($storeFolder)) {
            mkdir($storeFolder, 0755, true);
        }

        if (isset($_FILES['file']['name'])) {
            // Force to always treat as multiple files for consistency
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

    //email

    public function contact_send_email($data) {
        //not sure if working
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.office365.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'kwenn.testing@outlook.com';
            $mail->Password   = 'OutlookPass112';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            $mail->setFrom('kwenn.testing@outlook.com', 'Contact Form');
            $mail->addAddress('kwenn.gacelos@outlook.com');
            $mail->addReplyTo($data['contact_email'], $data['contact_name']);

            $mail->isHTML(true);
            $mail->Subject = $data['contact_subject'];
            $mail->Body    = "
                <h3>New Contact Form Message</h3>
                <p><strong>Name:</strong> {$data['contact_name']}</p>
                <p><strong>Email:</strong> {$data['contact_email']}</p>
                <p><strong>Message:</strong><br>{$data['contact_message']}</p>
            ";

            $mail->send();
            echo 'Message sent successfully!';
        } catch (Exception $e) {
            echo `Mailer Error: {$mail->ErrorInfo}`;
        }
    }

   

}
