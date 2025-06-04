<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainController extends CI_Controller{

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
}
?>