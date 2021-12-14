-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.27 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- nutrient 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `nutrient` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `nutrient`;

-- 테이블 nutrient.humidity 구조 내보내기
CREATE TABLE IF NOT EXISTS `humidity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.humidity:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `humidity` DISABLE KEYS */;
REPLACE INTO `humidity` (`id`, `value`, `createdAt`) VALUES
	(1, '21', '2021-12-06 01:52:57'),
	(2, '21', '2021-12-06 06:32:28'),
	(3, '21', '2021-12-10 16:51:50'),
	(4, '21', '2021-12-10 16:51:51'),
	(5, '21', '2021-12-10 16:51:52');
/*!40000 ALTER TABLE `humidity` ENABLE KEYS */;

-- 테이블 nutrient.machine 구조 내보내기
CREATE TABLE IF NOT EXISTS `machine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='					';

-- 테이블 데이터 nutrient.machine:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `machine` DISABLE KEYS */;
REPLACE INTO `machine` (`id`, `name`, `createdAt`) VALUES
	(1, 'waterspray', '2021-12-04 16:40:59'),
	(2, 'valve_1', '2021-12-04 16:46:40'),
	(3, 'valve_2', '2021-12-04 16:47:07'),
	(4, 'valve_\r\n\r\n3', '2021-12-04 16:49:23'),
	(5, 'waterpump', '2021-12-05 03:22:51'),
	(6, 'led', '2021-12-05 03:59:25'),
	(7, 'valve_in', '2021-12-06 06:38:18'),
	(8, 'valve_out', '2021-12-14 10:29:04'),
	(9, 'nutrientpump_A', '2021-12-14 10:29:50'),
	(10, 'nutrientpump_B', '2021-12-14 10:30:03');
/*!40000 ALTER TABLE `machine` ENABLE KEYS */;

-- 테이블 nutrient.nutrientsupply 구조 내보내기
CREATE TABLE IF NOT EXISTS `nutrientsupply` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` float DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.nutrientsupply:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `nutrientsupply` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutrientsupply` ENABLE KEYS */;

-- 테이블 nutrient.report 구조 내보내기
CREATE TABLE IF NOT EXISTS `report` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` int DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `solution` varchar(45) DEFAULT NULL,
  `isFixed` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.report:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;

-- 테이블 nutrient.section 구조 내보내기
CREATE TABLE IF NOT EXISTS `section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `main` varchar(45) DEFAULT NULL,
  `sub` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';

-- 테이블 데이터 nutrient.section:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
REPLACE INTO `section` (`id`, `main`, `sub`, `createdAt`) VALUES
	(1, 's1', 'd1', '2021-12-05 01:47:03');
/*!40000 ALTER TABLE `section` ENABLE KEYS */;

-- 테이블 nutrient.sensor 구조 내보내기
CREATE TABLE IF NOT EXISTS `sensor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';

-- 테이블 데이터 nutrient.sensor:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `sensor` DISABLE KEYS */;
REPLACE INTO `sensor` (`id`, `name`, `createdAt`) VALUES
	(2, 'temp', '2021-12-06 06:37:56'),
	(3, 'temp', '2021-12-06 06:38:06');
/*!40000 ALTER TABLE `sensor` ENABLE KEYS */;

-- 테이블 nutrient.switch 구조 내보내기
CREATE TABLE IF NOT EXISTS `switch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `machine_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `controlledBy_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';

-- 테이블 데이터 nutrient.switch:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `switch` DISABLE KEYS */;
REPLACE INTO `switch` (`id`, `machine_id`, `status`, `controlledBy_id`, `createdAt`) VALUES
	(2, 1, 0, 1, '2021-12-06 05:58:15'),
	(3, 1, 0, 1, '2021-12-06 05:58:35'),
	(4, 1, 0, 1, '2021-12-06 06:32:52');
/*!40000 ALTER TABLE `switch` ENABLE KEYS */;

-- 테이블 nutrient.temperature 구조 내보내기
CREATE TABLE IF NOT EXISTS `temperature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.temperature:~18 rows (대략적) 내보내기
/*!40000 ALTER TABLE `temperature` DISABLE KEYS */;
REPLACE INTO `temperature` (`id`, `value`, `createdAt`) VALUES
	(1, '21', '2021-12-06 06:31:54'),
	(2, '21', '2021-12-06 06:31:56'),
	(3, '21', '2021-12-06 06:33:57'),
	(4, '21', '2021-12-10 11:43:23'),
	(5, '21', '2021-12-10 11:43:23'),
	(6, '21', '2021-12-10 11:43:23'),
	(7, '21', '2021-12-10 11:43:23'),
	(8, '21', '2021-12-10 11:43:23'),
	(9, '21', '2021-12-10 11:43:23'),
	(10, '21', '2021-12-10 13:49:01'),
	(11, '21', '2021-12-10 13:49:01'),
	(12, '21', '2021-12-10 13:49:01'),
	(13, '21', '2021-12-10 13:49:01'),
	(14, '21', '2021-12-10 13:56:53'),
	(15, '21', '2021-12-10 13:56:53'),
	(16, '21', '2021-12-10 13:57:03'),
	(17, '1', '2021-12-13 16:46:48'),
	(18, '1', '2021-12-13 16:47:12'),
	(19, '11', '2021-12-14 16:30:40');
/*!40000 ALTER TABLE `temperature` ENABLE KEYS */;

-- 테이블 nutrient.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.user:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `name`, `password`, `type`, `createdAt`) VALUES
	(1, 'llewyn', 'temp', 'admin', '2021-12-06 06:45:48');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 테이블 nutrient.watercycle 구조 내보내기
CREATE TABLE IF NOT EXISTS `watercycle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `period` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.watercycle:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `watercycle` DISABLE KEYS */;
/*!40000 ALTER TABLE `watercycle` ENABLE KEYS */;

-- 테이블 nutrient.waterspray 구조 내보내기
CREATE TABLE IF NOT EXISTS `waterspray` (
  `id` int NOT NULL AUTO_INCREMENT,
  `operatingTime` int DEFAULT NULL,
  `period` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.waterspray:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `waterspray` DISABLE KEYS */;
/*!40000 ALTER TABLE `waterspray` ENABLE KEYS */;

-- 테이블 nutrient.watersupply 구조 내보내기
CREATE TABLE IF NOT EXISTS `watersupply` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` float DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 nutrient.watersupply:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `watersupply` DISABLE KEYS */;
/*!40000 ALTER TABLE `watersupply` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
