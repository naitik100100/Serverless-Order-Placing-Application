-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: csci5409.cgw0icp6tjnv.us-east-1.rds.amazonaws.com    Database: db_instance_company_XYZ
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_parts_z`
--

DROP TABLE IF EXISTS `job_parts_z`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_parts_z` (
  `partId` int(11) NOT NULL,
  `jobName` varchar(50) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `qty` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `result` enum('success','failure') NOT NULL,
  PRIMARY KEY (`partId`,`jobName`,`userId`,`result`),
  KEY `jobName` (`jobName`),
  KEY `userId` (`userId`),
  CONSTRAINT `job_parts_z_ibfk_1` FOREIGN KEY (`partId`) REFERENCES `parts_y` (`partId`),
  CONSTRAINT `job_parts_z_ibfk_2` FOREIGN KEY (`jobName`) REFERENCES `jobs_x` (`jobName`),
  CONSTRAINT `job_parts_z_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users_z` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_parts_z`
--

LOCK TABLES `job_parts_z` WRITE;
/*!40000 ALTER TABLE `job_parts_z` DISABLE KEYS */;
INSERT INTO `job_parts_z` VALUES (3,'sam','37',2,'2020-07-09','01:19:06','success'),(3,'sam','54',2,'2020-07-09','03:48:40','success'),(4,'Job758','37',65,'2020-07-08','19:14:53','success'),(4,'Job758','37',65,'2020-07-08','19:13:39','failure'),(4,'test','37',464,'2020-07-08','20:05:04','failure'),(4,'test','73',464,'2020-07-09','03:41:59','failure'),(8,'Job158','37',26,'2020-07-11','17:35:15','failure'),(8,'Job158','54',25,'2020-07-09','03:48:20','failure'),(8,'Job158','73',25,'2020-07-09','03:42:12','failure'),(8,'Job158','91',26,'2020-07-10','23:57:20','failure'),(12,'job111','37',111,'2020-07-09','22:20:28','success'),(12,'job111','91',111,'2020-07-10','23:57:31','failure'),(12,'Job758','37',65,'2020-07-08','19:14:53','success'),(12,'Job758','37',65,'2020-07-08','19:13:39','failure'),(42,'Job695','37',14,'2020-07-08','19:42:42','success'),(42,'Job695','54',14,'2020-07-09','03:48:05','success'),(42,'Job695','91',14,'2020-07-11','01:43:14','success'),(55,'Job458','73',27,'2020-07-09','03:42:21','success'),(55,'Job458','91',10,'2020-07-11','00:00:42','success'),(55,'Job854','37',55,'2020-07-08','19:40:37','failure'),(55,'Job854','73',55,'2020-07-09','03:41:39','failure'),(78,'Job695','37',11,'2020-07-08','19:42:42','success'),(78,'Job695','54',11,'2020-07-09','03:48:05','success'),(78,'Job695','91',11,'2020-07-11','01:43:14','success');
/*!40000 ALTER TABLE `job_parts_z` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-13 15:30:27
