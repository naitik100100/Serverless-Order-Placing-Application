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
-- Table structure for table `search_z`
--

DROP TABLE IF EXISTS `search_z`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `search_z` (
  `searchId` int(11) NOT NULL AUTO_INCREMENT,
  `jobName` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  PRIMARY KEY (`searchId`),
  KEY `jobName` (`jobName`),
  CONSTRAINT `search_z_ibfk_1` FOREIGN KEY (`jobName`) REFERENCES `jobs_x` (`jobName`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search_z`
--

LOCK TABLES `search_z` WRITE;
/*!40000 ALTER TABLE `search_z` DISABLE KEYS */;
INSERT INTO `search_z` VALUES (7,'Job158','2020-07-08','19:58:23'),(9,'Job158','2020-07-08','20:01:33'),(10,'Job158','2020-07-08','20:08:00'),(11,'job758','2020-07-09','01:36:12'),(12,'Job695','2020-07-09','01:57:43'),(13,'Job158','2020-07-09','01:57:57'),(14,'Job458','2020-07-09','01:58:08'),(21,'job158','2020-07-10','23:41:33'),(22,'Job158','2020-07-10','23:46:48'),(23,'job111','2020-07-11','17:32:50'),(25,'sam','2020-07-11','17:35:41'),(26,'job158','2020-07-13','18:21:32');
/*!40000 ALTER TABLE `search_z` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-13 15:30:28
