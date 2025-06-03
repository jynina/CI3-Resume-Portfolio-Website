<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['about_admin'] = 'FrontendController/about_admin';
$route['education_admin'] = 'FrontendController/education_admin';
$route['skills_admin'] = 'FrontendController/skills_admin';