<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainController extends CI_Controller{

    public function fetch_inbox(){
        return $this->Main_Model->fetch_inbox();
        
    }

    //working
    public function insert_contact(){
        $contact_data = array
        (
            'contact_name' => $this->input->post('contact_name'),
            'contact_email' => $this->input->post('contact_email'),
            'contact_subject' => $this->input->post('contact_subject'),
            'contact_message' => $this->input->post('contact_message')
        );

        $log_data = array
        (

        );

        $insert_contact = new Main_Model;
        $insert_contact->insert_data($contact_data,'tbl_contact', $log_data);
        
        
        

    }

    public function contact_send_email($contact_data){
            // PHPMailer object
            $mail = $this->phpmailer_lib->load();
    
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host     = 'smtp.example.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'user@example.com';
            $mail->Password = '********';
            $mail->SMTPSecure = 'ssl';
            $mail->Port     = 465;
    
            $mail->setFrom('info@example.com', 'CodexWorld');
            $mail->addReplyTo('info@example.com', 'CodexWorld');
    
            // Add a recipient
            $mail->addAddress('vocoho1899@cigidea.com');
    
            // Add cc or bcc 
            $mail->addCC('cc@example.com');
            $mail->addBCC('bcc@example.com');
    
            // Email subject
            $mail->Subject = 'Send Email via SMTP using PHPMailer in CodeIgniter';
    
            // Set email format to HTML
            $mail->isHTML(true);
    
            // Email body content
            $mailContent = "<h1>Send HTML Email using SMTP in CodeIgniter</h1>
                <p>This is a test email sending using SMTP mail server with PHPMailer.</p>";
            $mail->Body = $mailContent;
    
            // Send email
            if(!$mail->send()){
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            }else{
                echo 'Message has been sent';
            }
    }
}
?>