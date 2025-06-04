<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['about_admin'] = 'FrontendController/about_admin';
$route['education_admin'] = 'FrontendController/education_admin';
$route['skills_admin'] = 'FrontendController/skills_admin';
$route['contact_admin'] = 'FrontendController/contact_admin';
$route['inbox_admin'] = 'FrontendController/inbox_admin';

$route['insert_contact'] = 'MainController/insert_contact';
$route['fetch_inbox'] = 'MainController/fetch_inbox';
$route['upload_image'] = 'MainController/upload_image';
$route['test_image'] = 'MainController/test_insert';