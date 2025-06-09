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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_contact` */

insert  into `tbl_contact`(`id`,`contact_name`,`contact_email`,`contact_subject`,`contact_message`,`created_at`,`status`) values 
(1,'test','test@email.com','test','test','2025-06-04 17:52:23',1),
(2,'test','test@email.com','test','test','2025-06-04 18:59:29',1),
(3,'test','test@email.com','test','test','2025-06-04 18:59:35',1);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_education` */

insert  into `tbl_education`(`id`,`institution_name`,`education_level`,`acad_year`,`institution_desc`,`created_at`,`status`) values 
(1,'test','testt','test','test','2025-06-05 20:49:21',1),
(2,'Animi laborum ut nu','Necessitatibus non l','2018','Dolores et quia lore','2025-06-05 21:47:36',1),
(3,'Ebenezer Christian Academy','Highschool','2015-2020','emo kid','2025-06-07 20:17:26',1);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_exp` */

insert  into `tbl_exp`(`id`,`status`,`created_at`,`professional_title`,`company_name`,`prof_year`,`company_desc`) values 
(1,1,'2025-06-05 21:51:19','undefined','undefined','undefined','undefined'),
(2,1,'2025-06-05 21:51:53','Lucas Carson LLC','Sparks Marsh Co','Oneal and Martinez Plc','Delectus cupiditate');

/*Table structure for table `tbl_files` */

DROP TABLE IF EXISTS `tbl_files`;

CREATE TABLE `tbl_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_type` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `origin` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_files` */

insert  into `tbl_files`(`id`,`file_name`,`file_path`,`file_type`,`created_at`,`origin`) values 
(1,'test.jpg','uploads/test.jpg','image/jpeg','2025-06-04 19:44:02',NULL),
(2,'libunao_sign-removebg-preview.png','upload/libunao_sign-removebg-preview.png','image/png','2025-06-05 22:00:27',NULL),
(3,'libunao sign.jpg','upload/libunao sign.jpg','image/jpeg','2025-06-05 22:00:27',NULL),
(4,'ac5b87bdc439f79e8ff80e924cd9bcf3.jpg','upload/ac5b87bdc439f79e8ff80e924cd9bcf3.jpg','image/jpeg','2025-06-05 22:04:06',NULL),
(5,'Logo-13Kuga.webp','upload/Logo-13Kuga.webp','image/webp','2025-06-05 22:07:30',NULL),
(6,'Logo-13Kuga.webp','upload/Logo-13Kuga.webp','image/webp','2025-06-06 14:14:42',NULL),
(7,'pleading-cry-power-cry.gif','upload/pleading-cry-power-cry.gif','image/gif','2025-06-06 14:17:47',NULL),
(8,'canvas.png','upload/canvas.png','image/png','2025-06-09 19:33:21',NULL),
(9,'canvas.png','upload/canvas.png','image/png','2025-06-09 19:36:39','about'),
(10,'canvas.png','upload/canvas.png','image/png','2025-06-09 19:39:01','about'),
(11,'canvas.png','upload/canvas.png','image/png','2025-06-09 19:40:55','about');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_personal_info` */

insert  into `tbl_personal_info`(`id`,`name`,`introduction`,`created_at`,`status`,`professional_title`) values 
(1,'adadasd','asdasdasd','2025-06-09 19:38:47',1,NULL),
(2,'adadsas','asdadad','2025-06-09 19:38:47',1,NULL),
(3,'asdasdad','asdasdadsad','2025-06-09 19:40:55',1,'asdasdad');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_projects` */

insert  into `tbl_projects`(`id`,`status`,`created_at`,`project_name`,`project_role`,`project_tech`,`project_desc`) values 
(1,1,'2025-06-05 21:53:25','Nero Whitaker','undefined','Minim maxime sunt et','Soluta impedit volu'),
(2,1,'2025-06-05 21:54:05','Brynn Riggs','In unde assumenda qu','Do minima porro nihi','Inventore non est q');

/*Table structure for table `tbl_skills` */

DROP TABLE IF EXISTS `tbl_skills`;

CREATE TABLE `tbl_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(60) DEFAULT NULL,
  `skill_progress` varchar(10) DEFAULT NULL,
  `skill_desc` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbl_skills` */

insert  into `tbl_skills`(`id`,`skill_name`,`skill_progress`,`skill_desc`,`created_at`,`status`) values 
(1,'gyhehuw@mailinator.com','folyd@mail','undefined','2025-06-05 21:48:51',1),
(2,'Candace Mendez','Omnis id v','undefined','2025-06-05 21:50:04',1),
(3,'Sophia Nieves','Dolores it','Consectetur non qui ','2025-06-05 21:51:07',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
