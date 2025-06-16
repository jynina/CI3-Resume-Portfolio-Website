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

//insert to database
$route['upload_image'] = 'MainController/upload_image';
$route['insert_contact'] = 'MainController/insert_contact';
$route['insert_educ'] = 'MainController/insert_educ';
$route['insert_about'] = 'MainController/insert_about';
$route['insert_skills'] = 'MainController/insert_skills';
$route['insert_projects'] = 'MainController/insert_projects';
$route['insert_exp'] = 'MainController/insert_exp';
$route['update_active'] = 'MainController/update_active';
$route['update_status'] = 'MainController/update_status';

$route['update_educ'] = 'MainController/update_educ';
//fetching
$route['get_data'] = 'MainController/fetch_data';
$route['get_all_data'] = 'MainController/fetch_all_data';
$route['fetch_inbox'] = 'MainController/fetch_inbox';
