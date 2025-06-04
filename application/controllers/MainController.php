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

        $log_data = array(); // Add log details if needed

        $this->Main_Model->insert_data($contact_data, 'tbl_contact', $log_data);

        $this->contact_send_email($contact_data);
    }

    public function contact_send_email($data) {
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
}
