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



insert  into `tbl_contact`(`id`,`contact_name`,`contact_email`,`contact_subject`,`contact_message`,`created_at`,`status`) values (4,'CAmeron','cameron@email.com','TEST CXONTACT','JKASHDKJAHSKDJHAKSJDHAKJS HKASBDjhCBASIC IAd','2025-06-14 12:27:40',1),(5,'asdasdad','adadas','dasda','sdasdasdasd','2025-06-14 12:28:24',1),(6,'Testing Email','Test@email.com','Testing 123','Lorem Ipsum Dolor sit amet','2025-06-18 18:45:31',1),(7,'Janina Kwenn P. Gacelos','edu.gacelos@gmail.com','Official Job Offer from [company]','Dear [Candidate\'s First Name],\r\n\r\nWe are pleased to offer you the position of [Job Title] at [Company Name]. After reviewing your qualifications and speaking with you during the interview process, we are confident that you will be a valuable addition to our team.\r\n\r\nPosition: [Job Title]\r\nStart Date: [Proposed Start Date]\r\nSalary: [Offered Salary] per [year/month/hour], payable [bi-weekly/monthly/etc.]\r\nLocation: [Work Location or indicate remote]\r\nReporting to: [Supervisor\'s Name & Title]\r\n\r\nIn this role, you will be responsible for [brief summary of role responsibilities]. We believe your skills and experience will contribute significantly to our ongoing success.\r\n\r\nAttached to this email, you’ll find the formal offer letter outlining the terms and conditions of your employment. Please review it carefully and let us know if you have any questions. To accept the offer, kindly sign and return the letter by [Response Deadline, e.g., June 24, 2025].\r\n\r\nWe’re excited about the possibility of you joining our team and look forward to your response.\r\n\r\nWarm regards,\r\n[Your Full Name]\r\n[Your Job Title]\r\n[Company Name]\r\n[Email Address]\r\n[Phone Number]','2025-06-19 12:34:46',1);



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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_education` */



insert  into `tbl_education`(`id`,`institution_name`,`education_level`,`acad_year`,`institution_desc`,`created_at`,`status`,`is_active`,`course_name`) values (4,'Polytechnic University of the Philippines','State University','Year graduated: 2025','asdadasd','2025-06-14 12:27:16',1,1,'Bachelor of Science in Information Technology'),(21,'Ebenezer Christian Academy, Inc.','High School','Year graduated: 2020','','2025-06-16 11:47:29',1,1,'Junior and Senior High School'),(22,'edasd','edads','dasd','edasd','2025-06-16 11:55:05',0,0,NULL),(23,'bnmbnmbm','bnmbnmbm','smbnmbnm','bnmbnmbnm','2025-06-16 11:55:31',0,0,NULL),(24,'aaa','aaa','aaa','aaa','2025-06-16 11:59:50',0,0,NULL),(25,'d','d','d','d','2025-06-17 08:00:20',0,0,NULL),(26,'att','att','att','att','2025-06-17 08:21:14',0,0,NULL);



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
  `company_name` varchar(60) DEFAULT NULL,
  `prof_year` varchar(60) DEFAULT NULL,
  `company_desc` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_exp` */



insert  into `tbl_exp`(`id`,`status`,`created_at`,`professional_title`,`company_name`,`prof_year`,`company_desc`,`is_active`) values (3,1,'2025-06-14 12:26:01','Intern','Kuga Corp','March - June 2025','Assisted in executing functional, regression, and exploratory tests on software applications to ensure they met quality standards.\r\n\r\nParticipated in the creation and execution of test cases based on product requirements and user stories.',1);



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
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_files` */



insert  into `tbl_files`(`id`,`file_name`,`file_path`,`file_type`,`created_at`,`origin`,`is_active`,`foreign_id`) values (12,'01de3e6b-f32e-469a-b075-da45adf6cd08.jpg','upload/01de3e6b-f32e-469a-b075-da45adf6cd08.jpg','image/jpeg','2025-06-14 20:41:43','projects',1,NULL),(13,'1da78ccf-795c-495c-b516-36a5992491c6.jpg','upload/1da78ccf-795c-495c-b516-36a5992491c6.jpg','image/jpeg','2025-06-14 20:41:43','projects',1,NULL),(14,'4889a39d-8dc9-400f-bb9c-b809ccacdb5a.jpg','upload\\4889a39d-8dc9-400f-bb9c-b809ccacdb5a.jpg','image/jpeg','2025-06-14 20:46:32','projects',1,0),(15,'d5e3f8d9-6cc8-476b-92cd-ca4583839182.jpg','upload\\d5e3f8d9-6cc8-476b-92cd-ca4583839182.jpg','image/jpeg','2025-06-14 20:46:32','projects',1,0),(16,'8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','upload\\8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','image/jpeg','2025-06-14 20:50:12','projects',1,0),(17,'5ba3f3a0-ddfb-4f3a-852f-d26cd13370bb.jpg','upload\\5ba3f3a0-ddfb-4f3a-852f-d26cd13370bb.jpg','image/jpeg','2025-06-14 20:50:12','projects',1,0),(18,'0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','upload\\0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','image/jpeg','2025-06-14 20:57:26','projects',1,0),(19,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 20:57:26','projects',1,0),(20,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 21:00:15','projects',1,0),(21,'8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','upload\\8509dda5-1367-481a-bc67-a4e539a4fe9f.jpg','image/jpeg','2025-06-14 21:00:15','projects',1,0),(22,'0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','upload\\0715ec0d-76e2-45d9-8ab3-8f5ddaadbb24.jpg','image/jpeg','2025-06-14 21:03:56','projects',1,9),(23,'82df69a9-7761-4456-8770-57e0657c57ff.jpg','upload\\82df69a9-7761-4456-8770-57e0657c57ff.jpg','image/jpeg','2025-06-14 21:03:56','projects',1,9),(24,'cry.png','upload\\cry.png','image/png','2025-06-16 07:13:33','projects',1,10),(25,'blush.png','upload\\blush.png','image/png','2025-06-16 07:13:33','projects',1,10),(26,'cry.png','upload\\cry.png','image/png','2025-06-16 07:40:43','projects',1,11),(27,'blush.png','upload\\blush.png','image/png','2025-06-16 07:40:43','projects',1,11),(30,'cherry.jpg','upload\\cherry.jpg','image/jpeg','2025-06-17 07:12:56','projects',1,15),(31,'peach.jpg','upload\\peach.jpg','image/jpeg','2025-06-17 07:12:56','projects',1,15),(36,'blush.png','upload\\blush.png','image/png','2025-06-18 07:34:43','personal_info',1,18),(37,'heart.png','upload\\heart.png','image/png','2025-06-18 08:52:03','projects',1,19),(38,'test.jpg','upload\\test.jpg','image/jpeg','2025-06-18 08:52:03','projects',1,19),(39,'Logo-13Kuga.png','upload\\Logo-13Kuga.png','image/png','2025-06-18 08:59:19','projects',1,19),(40,'apple.jpg','upload\\apple.jpg','image/jpeg','2025-06-18 09:09:01','projects',1,20),(41,'test.jpg','upload\\test.jpg','image/jpeg','2025-06-18 09:09:01','projects',1,20),(42,'bomb.webp','upload\\bomb.webp','image/webp','2025-06-18 09:09:20','projects',1,20),(43,'wallhaven-qd6ew7.jpg','upload\\wallhaven-qd6ew7.jpg','image/jpeg','2025-06-18 09:09:27','projects',1,20),(46,'output-11.pdf','upload\\output-11.pdf','application/pdf','2025-06-18 11:52:08','resume',1,1),(47,'Logo-13Kuga.webp','upload\\Logo-13Kuga.webp','image/webp','2025-06-18 11:55:03','personal_info',1,9),(48,'output-11.pdf','upload\\output-11.pdf','application/pdf','2025-06-18 12:20:36','resume',1,2),(49,'output-3.pdf','upload\\output-3.pdf','application/pdf','2025-06-18 12:39:48','resume',1,3),(50,'output-2.pdf','upload\\output-2.pdf','application/pdf','2025-06-18 12:40:33','resume',1,4),(53,'Untitled.png','upload\\Untitled.png','image/png','2025-06-19 06:43:03','personal_info',1,0),(54,'blush.png','upload\\blush.png','image/png','2025-06-19 06:46:57','personal_info',1,0),(55,'OIP.jpg','upload\\OIP.jpg','image/jpeg','2025-06-19 06:49:12','personal_info',1,0),(56,'wallhaven-qd6ew7.jpg','upload\\wallhaven-qd6ew7.jpg','image/jpeg','2025-06-19 06:51:16','personal_info',1,0),(58,'TEST-Safety-policy-statement.pdf','upload\\TEST-Safety-policy-statement.pdf','application/pdf','2025-06-19 06:56:14','resume',1,5),(59,'312091175_645583210304038_6726481968914642405_n.png','upload\\312091175_645583210304038_6726481968914642405_n.png','image/png','2025-06-22 20:33:32','personal_info',1,6),(60,'312091175_645583210304038_6726481968914642405_n.png','upload\\312091175_645583210304038_6726481968914642405_n.png','image/png','2025-06-22 20:33:55','personal_info',1,8),(61,'312091175_645583210304038_6726481968914642405_n.png','upload\\312091175_645583210304038_6726481968914642405_n.png','image/png','2025-06-22 20:38:41','personal_info',1,10),(62,'312091175_645583210304038_6726481968914642405_n.png','upload\\312091175_645583210304038_6726481968914642405_n.png','image/png','2025-06-22 20:41:02','personal_info',1,29),(63,'Gacelos_Resume.pdf','upload\\Gacelos_Resume.pdf','application/pdf','2025-06-22 20:42:26','resume',1,6),(77,'Screenshot 2025-06-22 210615.png','upload\\Screenshot 2025-06-22 210615.png','image/png','2025-06-22 21:12:40','projects',1,14),(78,'Screenshot 2025-06-22 210706.png','upload\\Screenshot 2025-06-22 210706.png','image/png','2025-06-22 21:12:40','projects',1,14),(79,'Screenshot 2025-06-22 210625.png','upload\\Screenshot 2025-06-22 210625.png','image/png','2025-06-22 21:12:40','projects',1,14),(80,'Screenshot 2025-06-22 210718.png','upload\\Screenshot 2025-06-22 210718.png','image/png','2025-06-22 21:12:40','projects',1,14),(81,'Screenshot 2025-06-22 210840.png','upload\\Screenshot 2025-06-22 210840.png','image/png','2025-06-22 21:12:40','projects',1,14),(82,'Screenshot 2025-06-22 210751.png','upload\\Screenshot 2025-06-22 210751.png','image/png','2025-06-22 21:12:40','projects',1,14),(83,'Screenshot 2025-06-22 204857.png','upload\\Screenshot 2025-06-22 204857.png','image/png','2025-06-22 21:13:26','projects',1,3),(84,'Screenshot 2025-06-22 204909.png','upload\\Screenshot 2025-06-22 204909.png','image/png','2025-06-22 21:13:26','projects',1,3),(85,'Screenshot 2025-06-22 204922.png','upload\\Screenshot 2025-06-22 204922.png','image/png','2025-06-22 21:13:26','projects',1,3),(86,'Screenshot 2025-06-22 204930.png','upload\\Screenshot 2025-06-22 204930.png','image/png','2025-06-22 21:13:26','projects',1,3),(87,'Screenshot 2025-06-22 211617.png','upload\\Screenshot 2025-06-22 211617.png','image/png','2025-06-22 21:27:38','projects',1,21);



/*Table structure for table `tbl_logs` */



DROP TABLE IF EXISTS `tbl_logs`;



CREATE TABLE `tbl_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tbl_origin` varchar(60) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_logs` */



insert  into `tbl_logs`(`id`,`tbl_origin`,`item_id`,`event_id`,`created_at`) values (1,'tbl_skills',11,2,'2025-06-22 19:26:01'),(2,'tbl_',57,3,'2025-06-22 20:29:38'),(3,NULL,23,1,'2025-06-22 20:29:56'),(4,NULL,24,1,'2025-06-22 20:29:58'),(5,NULL,25,1,'2025-06-22 20:29:58'),(6,'tbl_personal_info',26,1,'2025-06-22 20:33:31'),(7,'tbl_files',59,1,'2025-06-22 20:33:32'),(8,'tbl_personal_info',27,1,'2025-06-22 20:33:55'),(9,'tbl_files',60,1,'2025-06-22 20:33:55'),(10,'tbl_personal_info',28,1,'2025-06-22 20:38:41'),(11,'tbl_files',61,1,'2025-06-22 20:38:41'),(12,'tbl_personal_info',29,1,'2025-06-22 20:41:02'),(13,'tbl_files',62,1,'2025-06-22 20:41:02'),(14,'tbl_resume',6,1,'2025-06-22 20:42:26'),(15,'tbl_files',63,1,'2025-06-22 20:42:26'),(16,'tbl_resume',5,2,'2025-06-22 20:50:48'),(17,'tbl_resume',6,2,'2025-06-22 20:50:49'),(18,'tbl_education',21,2,'2025-06-22 20:52:52'),(19,'tbl_education',21,2,'2025-06-22 20:52:52'),(20,'tbl_education',21,2,'2025-06-22 20:58:37'),(21,'tbl_education',21,2,'2025-06-22 20:58:37'),(22,'tbl_education',4,2,'2025-06-22 20:58:52'),(23,'tbl_education',4,2,'2025-06-22 20:58:52'),(24,'tbl_skills',11,2,'2025-06-22 21:03:30'),(25,'tbl_skills',12,2,'2025-06-22 21:03:31'),(26,'tbl_skills',13,1,'2025-06-22 21:03:40'),(27,'tbl_projects',15,2,'2025-06-22 21:04:09'),(28,'tbl_',35,3,'2025-06-22 21:04:20'),(29,'tbl_',34,3,'2025-06-22 21:04:21'),(30,'tbl_projects',14,2,'2025-06-22 21:05:01'),(31,'tbl_projects',14,2,'2025-06-22 21:05:01'),(32,'tbl_files',64,1,'2025-06-22 21:05:01'),(33,'tbl_files',65,1,'2025-06-22 21:05:01'),(34,'tbl_projects',14,2,'2025-06-22 21:05:04'),(35,'tbl_projects',14,2,'2025-06-22 21:05:04'),(36,'tbl_files',66,1,'2025-06-22 21:05:04'),(37,'tbl_files',67,1,'2025-06-22 21:05:04'),(38,'tbl_projects',14,2,'2025-06-22 21:05:05'),(39,'tbl_projects',14,2,'2025-06-22 21:05:05'),(40,'tbl_files',68,1,'2025-06-22 21:05:05'),(41,'tbl_files',69,1,'2025-06-22 21:05:05'),(42,'tbl_projects',14,2,'2025-06-22 21:05:06'),(43,'tbl_projects',14,2,'2025-06-22 21:05:06'),(44,'tbl_files',70,1,'2025-06-22 21:05:06'),(45,'tbl_files',71,1,'2025-06-22 21:05:06'),(46,'tbl_',71,3,'2025-06-22 21:05:40'),(47,'tbl_',68,3,'2025-06-22 21:05:41'),(48,'tbl_',64,3,'2025-06-22 21:05:43'),(49,'tbl_',65,3,'2025-06-22 21:05:44'),(50,'tbl_',66,3,'2025-06-22 21:05:45'),(51,'tbl_',67,3,'2025-06-22 21:05:46'),(52,'tbl_',69,3,'2025-06-22 21:05:47'),(53,'tbl_',70,3,'2025-06-22 21:05:48'),(54,'tbl_projects',14,2,'2025-06-22 21:09:30'),(55,'tbl_projects',14,2,'2025-06-22 21:09:30'),(56,'tbl_files',72,1,'2025-06-22 21:09:30'),(57,'tbl_files',73,1,'2025-06-22 21:09:30'),(58,'tbl_projects',14,2,'2025-06-22 21:09:32'),(59,'tbl_projects',14,2,'2025-06-22 21:09:32'),(60,'tbl_files',74,1,'2025-06-22 21:09:32'),(61,'tbl_files',75,1,'2025-06-22 21:09:32'),(62,'tbl_projects',14,2,'2025-06-22 21:09:33'),(63,'tbl_projects',14,2,'2025-06-22 21:09:33'),(64,'tbl_files',76,1,'2025-06-22 21:09:33'),(65,'tbl_',72,3,'2025-06-22 21:11:45'),(66,'tbl_',73,3,'2025-06-22 21:11:46'),(67,'tbl_',74,3,'2025-06-22 21:11:47'),(68,'tbl_',75,3,'2025-06-22 21:11:48'),(69,'tbl_',76,3,'2025-06-22 21:11:49'),(70,'tbl_projects',14,2,'2025-06-22 21:12:40'),(71,'tbl_projects',14,2,'2025-06-22 21:12:40'),(72,'tbl_files',77,1,'2025-06-22 21:12:40'),(73,'tbl_files',78,1,'2025-06-22 21:12:40'),(74,'tbl_files',79,1,'2025-06-22 21:12:40'),(75,'tbl_files',80,1,'2025-06-22 21:12:40'),(76,'tbl_files',81,1,'2025-06-22 21:12:40'),(77,'tbl_files',82,1,'2025-06-22 21:12:40'),(78,'tbl_',33,3,'2025-06-22 21:13:02'),(79,'tbl_',32,3,'2025-06-22 21:13:03'),(80,'tbl_projects',3,2,'2025-06-22 21:13:26'),(81,'tbl_projects',3,2,'2025-06-22 21:13:26'),(82,'tbl_files',83,1,'2025-06-22 21:13:26'),(83,'tbl_files',84,1,'2025-06-22 21:13:26'),(84,'tbl_files',85,1,'2025-06-22 21:13:26'),(85,'tbl_files',86,1,'2025-06-22 21:13:26'),(86,'tbl_projects',3,2,'2025-06-22 21:14:16'),(87,'tbl_projects',3,2,'2025-06-22 21:14:16'),(88,'tbl_projects',3,2,'2025-06-22 21:14:19'),(89,'tbl_projects',3,2,'2025-06-22 21:14:19'),(90,'tbl_',44,3,'2025-06-22 21:27:33'),(91,'tbl_',45,3,'2025-06-22 21:27:34'),(92,'tbl_projects',21,2,'2025-06-22 21:27:38'),(93,'tbl_projects',21,2,'2025-06-22 21:27:38'),(94,'tbl_files',87,1,'2025-06-22 21:27:38'),(95,'tbl_projects',21,2,'2025-06-22 21:27:54');



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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_personal_info` */



insert  into `tbl_personal_info`(`id`,`name`,`introduction`,`created_at`,`status`,`professional_title`) values (4,'kwenn','hello','2025-06-14 12:24:44',1,'taong bahay'),(16,'testing','testing','2025-06-18 20:28:07',1,'testing'),(17,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. ','2025-06-19 06:40:41',1,'Fresh Graduate'),(19,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Update','2025-06-19 06:46:57',1,'Fresh Graduate'),(20,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Update','2025-06-19 06:49:11',1,'Fresh Graduate'),(21,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Update','2025-06-19 06:51:16',1,'Fresh Graduate'),(22,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Update','2025-06-19 06:54:55',1,'Fresh Graduate'),(23,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:29:56',1,'Graduating BSIT Student in Polytechnic University of the Phi'),(24,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:29:58',1,'Graduating BSIT Student in Polytechnic University of the Phi'),(25,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:29:58',1,'Graduating BSIT Student in Polytechnic University of the Phi'),(26,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:33:31',1,'Graduating BSIT Student in Polytechnic University of the Philippines'),(27,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:33:55',1,'Graduating BSIT Student in Polytechnic University of the Philippines'),(28,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:38:41',1,'Graduating BSIT Student in Polytechnic University of the Philippines'),(29,'Kwenn','Interested and passionate at Web Development; Curious and loves continuous learning. Let\'s connect!','2025-06-22 20:41:02',1,'Graduating BSIT Student in Polytechnic University of the Philippines');



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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



/*Data for the table `tbl_projects` */



insert  into `tbl_projects`(`id`,`status`,`created_at`,`project_name`,`project_role`,`project_tech`,`project_desc`,`is_active`) values (3,1,'2025-06-14 12:26:44','InvenTrack','Researcher, Developer','HTML, CSS, JS, PHP, MySQL','A capstone project for the Facility\'s Management Facility of the Polytechnic University of the Philippines.',1),(4,0,'2025-06-14 20:41:43','asdasd','asdasd','asdasd','teadasd',1),(5,0,'2025-06-14 20:46:32','taeadasd','taetasdad','teasdasda','teadatead',1),(6,0,'2025-06-14 20:50:12','asdadad','asdadad','asdadadasd','asdadadad',1),(7,0,'2025-06-14 20:57:26','asdasdada','sdasdadadsa','sdasdasdasd','asdasdasdasd',1),(8,0,'2025-06-14 21:00:15','asdasdasda','sasdadasd','asdadasda','dasdasdasdasd',1),(9,0,'2025-06-14 21:03:56','asdadasd','asdasdasd','asdadad','asdasdasdasd',1),(10,0,'2025-06-16 07:13:33','test w/ images','test w/ images','test w/ images','test w/ images',1),(11,0,'2025-06-16 07:40:43','test','ttest','astat','afafasf',1),(12,0,'2025-06-16 14:13:36','dfsdfsdfsdf','sdfsdfsdf','sdfsdfsfs','dfsdfsdfsdfsdf',1),(13,0,'2025-06-16 14:33:18','test','test','test','test',1),(14,1,'2025-06-16 14:35:51','Pet E-commerce Website','Lead Developer','HTML5, CSS3, JavaScript, MySQL','A final project for our Web Development course.',1),(15,1,'2025-06-17 07:12:56','Quotes Discord Bot','Lead and Sole Developer','Python, Quotes API, Discord Developer Token','A quotes prompt generator. Used API for fetching quotes and Discord to prompt.',0),(16,0,'2025-06-17 14:19:31',NULL,NULL,NULL,NULL,0),(17,0,'2025-06-17 14:19:41',NULL,NULL,NULL,NULL,0),(18,0,'2025-06-18 07:34:43','undefined','undefined','undefined','undefined',1),(19,0,'2025-06-18 08:52:03','doublemint','doublemint','doublemint','doublemint',1),(20,0,'2025-06-18 09:09:01','test','test','test','test',1),(21,1,'2025-06-18 09:15:20','Resume Website','Lead and Sole Developer','HTML5, CSS3, JQuery, CodeIgniter 3, JS Libraries','A resume website for showcasing my skills. Made with CI3 and MVC.',0);



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



insert  into `tbl_resume`(`id`,`resume_name`,`resume_desc`,`status`,`created_at`,`is_active`) values (5,'test','123456789',1,'2025-06-19 06:56:14',0),(6,'Fresh Graduate / Undergraduate Resume','Fresh Graduate Resume',1,'2025-06-22 20:42:26',1);



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



insert  into `tbl_skills`(`id`,`skill_name`,`skill_progress`,`skill_desc`,`created_at`,`status`,`is_active`) values (4,'HTML','70','html','2025-06-14 12:25:23',1,1),(5,'testing','95','','2025-06-16 13:21:20',0,1),(6,'JQuery','50','jquery','2025-06-17 08:59:41',1,1),(7,'CSS3','70','','2025-06-17 09:01:20',1,1),(8,'Bootstrap 5','80','','2025-06-17 14:13:44',1,1),(9,'CodeIgniter 3','50','','2025-06-19 16:27:56',1,1),(10,'Python','70','','2025-06-19 16:28:15',1,0),(11,'Elixir','90','','2025-06-19 16:28:40',1,0),(12,'Phoenix','50','','2025-06-19 16:28:58',1,0),(13,'MySQL','60','','2025-06-22 21:03:40',1,1);



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

