/*

SQLyog Ultimate v8.55 
MySQL - 5.5.5-10.4.27-MariaDB : Database - db_resume

*********************************************************************

*/



/*!40101 SET NAMES utf8 */;



/*!40101 SET SQL_MODE=''*/;



/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_resume` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;



USE `db_resume`;



/*Table structure for table `tbl_contact` */



DROP TABLE IF EXISTS `tbl_contact`;



CREATE TABLE `tbl_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `contact_subject` varchar(255) DEFAULT NULL,
  `contact_message` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_contact` */






/*Table structure for table `tbl_education` */



DROP TABLE IF EXISTS `tbl_education`;



CREATE TABLE `tbl_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institution_name` varchar(255) DEFAULT NULL,
  `education_level` varchar(90) DEFAULT NULL,
  `acad_year` varchar(20) DEFAULT NULL,
  `institution_desc` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  `is_active` int(11) DEFAULT 1,
  `course_name` varchar(255) DEFAULT NULL,
  `educ_type` varchar(60) DEFAULT NULL,
  `course_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_education` */






/*Table structure for table `tbl_events` */



DROP TABLE IF EXISTS `tbl_events`;



CREATE TABLE `tbl_events` (
  `id` int(11) NOT NULL,
  `event_name` varchar(100) DEFAULT NULL,
  `event_desc` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_events` */



insert  into `tbl_events`(`id`,`event_name`,`event_desc`,`status`,`created_at`) values (1,'Insert Data',NULL,1,'2025-06-19 07:03:41'),(2,'Update Data',NULL,1,'2025-06-19 07:03:51'),(3,'Delete Data',NULL,1,'2025-06-19 07:04:21'),(4,'Admin Login',NULL,1,'2025-06-22 17:34:33');



/*Table structure for table `tbl_exp` */



DROP TABLE IF EXISTS `tbl_exp`;



CREATE TABLE `tbl_exp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `professional_title` varchar(60) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `prof_year` varchar(60) DEFAULT NULL,
  `company_desc` text DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_exp` */






/*Table structure for table `tbl_files` */



DROP TABLE IF EXISTS `tbl_files`;



CREATE TABLE `tbl_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_type` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `origin` varchar(60) DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  `foreign_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_files` */






/*Table structure for table `tbl_logs` */



DROP TABLE IF EXISTS `tbl_logs`;



CREATE TABLE `tbl_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tbl_origin` varchar(60) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_logs` */






/*Table structure for table `tbl_personal_info` */



DROP TABLE IF EXISTS `tbl_personal_info`;



CREATE TABLE `tbl_personal_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `introduction` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  `professional_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_personal_info` */






/*Table structure for table `tbl_projects` */



DROP TABLE IF EXISTS `tbl_projects`;



CREATE TABLE `tbl_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `project_name` varchar(255) DEFAULT NULL,
  `project_role` varchar(255) DEFAULT NULL,
  `project_tech` varchar(255) DEFAULT NULL,
  `project_desc` text DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_projects` */






/*Table structure for table `tbl_resume` */



DROP TABLE IF EXISTS `tbl_resume`;



CREATE TABLE `tbl_resume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resume_name` varchar(255) NOT NULL,
  `resume_desc` text DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `is_active` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_resume` */






/*Table structure for table `tbl_skills` */



DROP TABLE IF EXISTS `tbl_skills`;



CREATE TABLE `tbl_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(60) DEFAULT NULL,
  `skill_progress` varchar(10) DEFAULT NULL,
  `skill_desc` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_skills` */






/*Table structure for table `tbl_users` */



DROP TABLE IF EXISTS `tbl_users`;



CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_users` */



insert  into `tbl_users`(`id`,`username`,`password`,`status`,`created_at`) values (1,'admin','admin123',1,'2025-06-19 07:18:32');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

