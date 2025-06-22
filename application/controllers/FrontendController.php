<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FrontendController extends CI_Controller{

    public function index()
    {
        $this->load->view('template/header');
        $this->load->view('template/welcome_nav');
        $this->load->view('welcome');
        $this->load->view('template/footer');
    }

    public function admin_dashboard()
    {
        $this->load->view('template/header', ['page' => '#']);
		$this->load->view('admin/login');

    }
    
    public function about_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {

            $this->load->view('template/header', ['page' => 'personal_info']);
            $this->load->view('template/admin_nav');
            $this->load->view('admin/about');
            $this->load->view('template/footer');

        }
    }
    public function resume_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
            $this->load->view('template/header', ['page' => 'resume']);
            $this->load->view('template/admin_nav');
            $this->load->view('admin/resume');
            $this->load->view('template/footer');
        }
    }

    public function get_admin_info(){
        $data = $this->Main_Model->fetch_data("tbl_personal_info");
        echo json_encode($data);
    }

    public function education_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {

            $this->load->view('template/header', ['page' => 'education']);
            $this->load->view('template/admin_nav');
            $this->load->view('admin/education');
            $this->load->view('template/footer');

        }
    }

    public function skills_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
        $this->load->view('template/header', ['page' => 'skills']);
		$this->load->view('template/admin_nav');
		$this->load->view('admin/skills');
		$this->load->view('template/footer');
        }
    }

    public function contact_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
        $this->load->view('template/header', ['page' => 'contact']);
		$this->load->view('template/admin_nav');
		$this->load->view('admin/contact');
		$this->load->view('template/footer');
        }
    }

    public function inbox_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
        $this->load->view('template/header', ['page' => 'contact']);
		$this->load->view('template/admin_nav');
        $this->load->view('admin/inbox');
		$this->load->view('template/footer');
        }
    }

    public function experience_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
            $this->load->view('template/header', ['page' => 'exp']);
            $this->load->view('template/admin_nav');
            $this->load->view('admin/experience');
            $this->load->view('template/footer'); 
        }
    }

    public function projects_admin()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
            $this->load->view('template/header', ['page' => 'projects']);
            $this->load->view('template/admin_nav');
            $this->load->view('admin/projects');
            $this->load->view('template/footer');
        }

    }

    public function welcome_contact()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('admin_dashboard');
        } else {
            $this->load->view('template/header');
            $this->load->view('welcome_contact');
            $this->load->view('template/footer');
        }
    }

}
?>