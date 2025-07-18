<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'FrontendController';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//views
$route['about_admin'] = 'FrontendController/about_admin';
$route['education_admin'] = 'FrontendController/education_admin';
$route['skills_admin'] = 'FrontendController/skills_admin';
$route['contact_admin'] = 'FrontendController/contact_admin';
$route['inbox_admin'] = 'FrontendController/inbox_admin';
$route['projects_admin'] = 'FrontendController/projects_admin';
$route['experience_admin'] = 'FrontendController/experience_admin';
$route['get_info'] = 'FrontendController/get_admin_info';
$route['welcome_contact'] = 'FrontendController/welcome_contact';
$route['resume_admin'] = 'FrontendController/resume_admin';
$route['admin_dashboard'] = 'FrontendController/admin_dashboard';
$route['logout_admin'] = 'MainController/logout_admin';

//handle to database
$route['upload_image'] = 'MainController/upload_files';
$route['handle_contact'] = 'MainController/handle_contact';
$route['handle_resume'] = 'MainController/handle_resume';
$route['handle_educ'] = 'MainController/handle_educ';
$route['handle_about'] = 'MainController/handle_about';
$route['handle_skills'] = 'MainController/handle_skills';
$route['handle_projects'] = 'MainController/handle_projects';
$route['handle_exp'] = 'MainController/handle_exp';
$route['update_active'] = 'MainController/update_active';
$route['update_status'] = 'MainController/update_status';
$route['handle_login'] = 'MainController/handle_login';

//update to database
$route['delete_file'] = 'MainController/delete_file';

$route['test_email'] = 'MainController/contact_send_email';

//fetching
$route['get_data'] = 'MainController/fetch_data';
$route['get_all_data'] = 'MainController/fetch_all_data';
$route['fetch_inbox'] = 'MainController/fetch_inbox';
$route['get_project_files'] = 'MainController/get_project_files';

