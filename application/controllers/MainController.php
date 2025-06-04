<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


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
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host       = 'smtp.office365.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'kwenn.testing@outlook.com';
            $mail->Password   = 'your_outlook_password_or_app_password';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            // Email headers
            $mail->setFrom('kwenn.testing@outlook.com', 'Contact Form');
            $mail->addAddress('kwenn.gacelos@outlook.com'); // where the message goes
            $mail->addReplyTo($data['contact_email'], $data['contact_name']);

            // Email body
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

    public function upload_image()
    {
        // Config for upload
        $config['upload_path']   = './uploads/';
        $config['allowed_types'] = 'jpg|jpeg|png|gif|webp';
        $config['encrypt_name']  = TRUE;  // rename file to avoid conflicts

        // Load upload library with config
        $this->load->library('upload', $config);

        if (!$this->upload->do_upload('file')) {
            // Upload failed
            echo json_encode(['error' => $this->upload->display_errors()]);
        } else {
            // Upload success
            $upload_data = $this->upload->data();

            // Prepare data to insert into DB
            $insert = [
                'file_name' => $upload_data['file_name'],
                'file_path' => 'uploads/' . $upload_data['file_name'],
                'file_type' => $upload_data['file_type'],
            ];

            // Insert data and get inserted ID
            $insert_id = $this->Main_Model->insert_data($insert, 'tbl_files');

            if ($insert_id) {
                echo json_encode(['success' => 'File uploaded and saved', 'id' => $insert_id]);
            } else {
                echo json_encode(['error' => 'Failed to save to database']);
            }
        }
    }


}
