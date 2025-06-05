<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MainController extends CI_Controller {

    //fetching
    public function fetch_inbox() 
    {
        return $this->Main_Model->fetch_inbox();
    }
    //reusable cod kasi ampanget kapag repetitive
    private function handle_insert($fields, $table_name)
    {
        $data =[];
        foreach ($fields as $field)
        {
            $data[$field] = $this->input->post($field);
        }

        $this->Main_Model->insert_data($data, $table_name, []);
        return $data;
    }

    //insertion

    public function insert_contact() 
    {
        $fields = ['contact_name', 'contact_email', 'contact_subject', 'contact_message'];
        $contact_data = $this->handle_insert($fields, 'tbl_contact');

        $this->contact_send_email($contact_data);
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

    function insert_skills()
    {
        $fields = ["skill_name", "skill_progress", "skill_desc"];
        $this->handle_insert($fields, 'tbl_skills');
    }

    function insert_projects()
    {
        $fields = ["project_name", "project_role", "project_tech", "project_desc"];
        $this->handle_insert($fields, 'tbl_projects');
    }

    function insert_exp()
    {
        $fields = ["professional_title", "company_name", "prof_year", "company_desc"];
        $this->handle_insert($fields, 'tbl_exp');
    } 

    //dropzone upload to db
    function upload_image()
    {
        $ds = "/";
        $storeFolder = 'upload';
        if (isset($_FILES['file']['name']) &&
    is_array($_FILES['file']['name']) &&
    count($_FILES['file']['name']) > 1) {
            foreach($_FILES['file']['tmp_name'] as $index => $tmpName){
                if (!empty($_FILES))
                {
                $tempFile = $_FILES['file']['tmp_name'][$index];
                $targetPath = $storeFolder . $ds;
                $targetFile = $targetPath.$_FILES['file']['name'][$index];
                
                if( !empty( $tmpName ) && is_uploaded_file( $tmpName ) ){

                move_uploaded_file($tempFile, $targetFile);

                $insert_data = array(
                    "file_name" => $_FILES['file']['name'][$index],
                    "file_path" => $targetPath . $_FILES['file']['name'][$index],
                    "file_type" => $_FILES['file']['type'][$index]
                );

                $this->Main_Model->insert_data($insert_data, 'tbl_files', []);
                } 
                }
            }
        }
        else 
        {
            if (!empty($_FILES))
                {
                $tempFile = $_FILES['file']['tmp_name'];
                $targetPath = $storeFolder . $ds;
                $targetFile = $targetPath.$_FILES['file']['name'];

                move_uploaded_file($tempFile, $targetFile);

                $insert_data = array(
                    "file_name" => $_FILES['file']['name'],
                    "file_path" => $targetPath . $_FILES['file']['name'],
                    "file_type" => $_FILES['file']['type']
                );

                $this->Main_Model->insert_data($insert_data, 'tbl_files', []);
                
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
