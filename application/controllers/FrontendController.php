<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FrontendController extends CI_Controller{

    
    public function about_admin()
    {
        $this->load->view('template/header');
		$this->load->view('template/admin_nav');
		// $this->load->view('welcome_message');
		$this->load->view('admin/about');
		$this->load->view('template/footer');
    }

    public function education_admin()
    {
        $this->load->view('template/header');
		$this->load->view('template/admin_nav');
		// $this->load->view('welcome_message');
		$this->load->view('admin/education');
		$this->load->view('template/footer');
    }

    public function skills_admin()
    {
        $this->load->view('template/header');
		$this->load->view('template/admin_nav');
		// $this->load->view('welcome_message');
		$this->load->view('admin/skills');
		$this->load->view('template/footer');
    }
}
?>