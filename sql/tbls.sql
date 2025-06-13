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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_education` */

insert  into `tbl_education`(`id`,`institution_name`,`education_level`,`acad_year`,`institution_desc`,`created_at`,`status`,`is_active`) values (4,'Test','Test','2021-2020','asdasdaasas','2025-06-13 06:31:09',1,1);

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

insert  into `tbl_exp`(`id`,`status`,`created_at`,`professional_title`,`company_name`,`prof_year`,`company_desc`,`is_active`) values (3,1,'2025-06-13 06:31:58','test tess','test test','2021','testtest',1);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_files` */

insert  into `tbl_files`(`id`,`file_name`,`file_path`,`file_type`,`created_at`,`origin`,`is_active`) values (12,'blush.png','upload/blush.png','image/png','2025-06-13 06:27:44','personal_info',1),(13,'XKHtdO4_.png','upload/XKHtdO4_.png','image/png','2025-06-13 06:32:16','projects',1),(14,'blush.png','upload/blush.png','image/png','2025-06-13 06:32:16','projects',1);

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

insert  into `tbl_personal_info`(`id`,`name`,`introduction`,`created_at`,`status`,`professional_title`) values (4,'Kwenn','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','2025-06-13 06:27:44',1,'Taong Bahay');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_projects` */

insert  into `tbl_projects`(`id`,`status`,`created_at`,`project_name`,`project_role`,`project_tech`,`project_desc`,`is_active`) values (3,1,'2025-06-13 06:32:16','asdsadds','dassdsd','dasadads','adsasdadasd',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_skills` */

insert  into `tbl_skills`(`id`,`skill_name`,`skill_progress`,`skill_desc`,`created_at`,`status`,`is_active`) values (4,'Skill test','10','LOrem ipsum','2025-06-13 06:31:37',1,1),(5,'GAMING','90','Gamer gamer','2025-06-13 13:48:12',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
