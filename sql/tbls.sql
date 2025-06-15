/*
SQLyog Community v13.3.0 (64 bit)
MySQL - 10.4.27-MariaDB : Database - db_resume
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_contact` */

insert  into `tbl_contact`(`id`,`contact_name`,`contact_email`,`contact_subject`,`contact_message`,`created_at`,`status`) values 
(4,'CAmeron','cameron@email.com','TEST CXONTACT','JKASHDKJAHSKDJHAKSJDHAKJS HKASBDjhCBASIC IAd','2025-06-14 12:27:40',1),
(5,'asdasdad','adadas','dasda','sdasdasdasd','2025-06-14 12:28:24',1);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_education` */

insert  into `tbl_education`(`id`,`institution_name`,`education_level`,`acad_year`,`institution_desc`,`created_at`,`status`,`is_active`) values 
(4,'PUP','College','2021-2025','asdadasd','2025-06-14 12:27:16',1,1),
(5,'','','','','2025-06-14 13:39:46',0,1);

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

/*Table structure for table `tbl_exp` */

DROP TABLE IF EXISTS `tbl_exp`;

CREATE TABLE `tbl_exp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `professional_title` varchar(60) DEFAULT NULL,
  `company_name` varchar(60) DEFAULT NULL,
  `prof_year` varchar(60) DEFAULT NULL,
  `company_desc` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_exp` */

insert  into `tbl_exp`(`id`,`status`,`created_at`,`professional_title`,`company_name`,`prof_year`,`company_desc`,`is_active`) values 
(3,1,'2025-06-14 12:26:01','Software Tester Intern','Kuga Corp','March - June 2025','I did software testing',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_files` */

insert  into `tbl_files`(`id`,`file_name`,`file_path`,`file_type`,`created_at`,`origin`,`is_active`,`foreign_id`) values 
(12,'01de3e6b-f32e-469a-b075-da45adf6cd08.jpg','upload/01de3e6b-f32e-469a-b075-da45adf6cd08.jpg','image/jpeg','2025-06-14 20:41:43','projects',1,NULL),
(13,'1da78ccf-795c-495c-b516-36a5992491c6.jpg','upload/1da78ccf-795c-495c-b516-36a5992491c6.jpg','image/jpeg','2025-06-14 20:41:43','projects',1,NULL),
(14,'4889a39d-8dc9-400f-bb9c-b809ccacdb5a.jpg','upload\\4889a39d-8dc9-400f-bb9c-b809ccacdb5a.jpg','image/jpeg','2025-06-14 20:46:32','projects',1,0),
(15,'d5e3f8d9-6cc8-476b-92cd-ca4583839182.jpg','upload\\d5e3f8d9-6cc8-476b-92cd-ca4583839182.jpg','image/jpeg','2025-06-14 20:46:32','projects',1,0),
(16,'8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','upload\\8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','image/jpeg','2025-06-14 20:50:12','projects',1,0),
(17,'5ba3f3a0-ddfb-4f3a-852f-d26cd13370bb.jpg','upload\\5ba3f3a0-ddfb-4f3a-852f-d26cd13370bb.jpg','image/jpeg','2025-06-14 20:50:12','projects',1,0),
(18,'0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','upload\\0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','image/jpeg','2025-06-14 20:57:26','projects',1,0),
(19,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 20:57:26','projects',1,0),
(20,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 21:00:15','projects',1,0),
(21,'8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','upload\\8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','image/jpeg','2025-06-14 21:00:15','projects',1,0),
(22,'0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','upload\\0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','image/jpeg','2025-06-14 21:03:56','projects',1,9),
(23,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 21:03:56','projects',1,9);

/*Table structure for table `tbl_logs` */

DROP TABLE IF EXISTS `tbl_logs`;

CREATE TABLE `tbl_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tbl_origin` varchar(60) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_logs` */

/*Table structure for table `tbl_personal_info` */

DROP TABLE IF EXISTS `tbl_personal_info`;

CREATE TABLE `tbl_personal_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `introduction` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  `professional_title` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_personal_info` */

insert  into `tbl_personal_info`(`id`,`name`,`introduction`,`created_at`,`status`,`professional_title`) values 
(4,'kwenn','hello hello','2025-06-14 12:24:44',1,'taong bahay');

/*Table structure for table `tbl_projects` */

DROP TABLE IF EXISTS `tbl_projects`;

CREATE TABLE `tbl_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `project_name` varchar(255) DEFAULT NULL,
  `project_role` varchar(255) DEFAULT NULL,
  `project_tech` varchar(255) DEFAULT NULL,
  `project_desc` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_projects` */

insert  into `tbl_projects`(`id`,`status`,`created_at`,`project_name`,`project_role`,`project_tech`,`project_desc`,`is_active`) values 
(3,1,'2025-06-14 12:26:44','Inventrack','Backend Coder','HTML, CSS, JS, PHP, MySQL','hahahahahhaha',1),
(4,1,'2025-06-14 20:41:43','asdasd','asdasd','asdasd','teadasd',1),
(5,1,'2025-06-14 20:46:32','taeadasd','taetasdad','teasdasda','teadatead',1),
(6,1,'2025-06-14 20:50:12','asdadad','asdadad','asdadadasd','asdadadad',1),
(7,1,'2025-06-14 20:57:26','asdasdada','sdasdadadsa','sdasdasdasd','asdasdasdasd',1),
(8,1,'2025-06-14 21:00:15','asdasdasda','sasdadasd','asdadasda','dasdasdasdasd',1),
(9,1,'2025-06-14 21:03:56','asdadasd','asdasdasd','asdadad','asdasdasdasd',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_skills` */

insert  into `tbl_skills`(`id`,`skill_name`,`skill_progress`,`skill_desc`,`created_at`,`status`,`is_active`) values 
(4,'html','85','asd','2025-06-14 12:25:23',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
