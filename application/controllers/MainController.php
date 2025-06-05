<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MainController extends CI_Controller {

    public function fetch_inbox() {
        return $this->Main_Model->fetch_inbox();
    }

    public function insert_contact() {
        $contact_data = array(
            'contact_name'    => $this->input->post('contact_name'),
            'contact_email'   => $this->input->post('contact_email'),
            'contact_subject' => $this->input->post('contact_subject'),
            'contact_message' => $this->input->post('contact_message')
        );

        $log_data = array(); 

        $this->Main_Model->insert_data($contact_data, 'tbl_contact', $log_data);

        $this->contact_send_email($contact_data);
    }

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

    function insert_educ(){
        $data = array (
            'institution_name' => $this->input->post('institution_name'),
            'education_level' => $this->input->post('education_level'),
            'acad_year' => $this->input->post('acad_year'),
            'institution_desc' => $this->input->post('institution_desc')
        );

        $log_data = array(); 
        $this->Main_Model->insert_data($data,'tbl_education', $log_data); 

          
    }

    function upload_image()
    {
        $ds = "/";
        $storeFolder = 'upload';
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

            $this->Main_Model->insert_data($insert_data, 'tbl_files');
            } 
            }
        }
    }

    function insert_about()
    {
        $data = array(
            'name'    => $this->input->post('name'),
            'professional_title'   => $this->input->post('professional_title'),
            'introduction' => $this->input->post('introduction')
        );

        $log_data = array(); 

        $this->Main_Model->insert_data($data, 'tbl_personal_info', $log_data);

    }

}
