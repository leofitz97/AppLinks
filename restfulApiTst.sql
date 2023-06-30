-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 30, 2023 at 03:09 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restfulApiTst`
--

-- --------------------------------------------------------

--
-- Table structure for table `apps`
--

CREATE TABLE `apps` (
  `id` varchar(255) NOT NULL DEFAULT '74aa63dd-3419-44ed-9',
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apps`
--

INSERT INTO `apps` (`id`, `name`, `icon`, `url`, `createdAt`, `updatedAt`) VALUES
('06afc390-71a9-48a5-a', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:28:47', '2023-06-30 12:28:47'),
('260044ee-eee8-4e28-b', 'ufasi', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:21:41', '2023-06-30 12:30:38'),
('3564c146-0dbb-4445-8', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:30:37', '2023-06-30 12:30:37'),
('68f4709a-4c9f-40f5-a', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:23:20', '2023-06-30 12:23:20'),
('77904724-49fb-4c3d-8', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:30:06', '2023-06-30 12:30:06'),
('83dce02c-56b0-4c8d-b', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:13:57', '2023-06-30 12:13:57'),
('ac24fb86-c750-4a59-a', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:17:33', '2023-06-30 12:17:33'),
('cef70159-848a-49bb-8', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:34:17', '2023-06-30 12:34:17'),
('d785ebcb-ca46-4c03-8', 'app', 'http://fskj.com', 'http://uiewlj.com', '2023-06-30 12:23:51', '2023-06-30 12:23:51');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230624113029-create-users.js'),
('20230626171320-create-apps.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL DEFAULT '3890e6c4-fdc2-4eae-9',
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('12', 'Admin', 'admin@email.com', '$2b$10$2ihzBgYNVBXCI2FEjDEPl.c3PDrFA7R1KRxDL0lnEcSio85cpPeOK', '2023-06-30 12:02:44', '2023-06-30 12:02:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apps`
--
ALTER TABLE `apps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
