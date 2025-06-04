<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class MainController extends CI_Controller{

    function __construct()
    {
        parent::__construct();
        $this->load->database();

        require 'vendor/autoload.php';
        // PHPMailer object
            $mail = $this->phpmailer_lib->load();
    
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host     = 'smtp.example.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'user@example.com';
            $mail->Password = 'secret';
            $mail->SMTPSecure = 'ssl';
            $mail->Port     = 465;

    }

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

        $mail = $this->phpmailer_lib->load();

        $mail->setFrom($this->input->post('contact_email'), $this->input->post('contact_name'));
        $mail->addReplyTo('info@example.com', 'CodexWorld');

        // Add a recipient
        $mail->addAddress('vocoho1899@cigidea.com');


        // Email subject
        $mail->Subject = $this->input->post('contact_subject');


        // Email body content
        $mailContent = $this->input->post('contact_message');
        $mail->Body = $mailContent;

        // Send email
        if(!$mail->send()){
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }else{
            echo 'Message has been sent';
        }
    
    }

    public function contact_send_email($data){
        
            
    }
}
?>