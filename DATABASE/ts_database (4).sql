-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2022 at 03:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ts_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobcard`
--

CREATE TABLE `jobcard` (
  `jobcard_id` int(11) NOT NULL,
  `request_id` int(100) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `category` varchar(100) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `staff_name` varchar(255) DEFAULT NULL,
  `staff_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobcard`
--

INSERT INTO `jobcard` (`jobcard_id`, `request_id`, `venue`, `description`, `category`, `picture`, `createdAt`, `staff_name`, `staff_number`) VALUES
(1, 1, '45-5', 'idk', 'Electrical', 'http://url_pic', '2022-11-02', 'Thabo', '21900000'),
(50, 0, '78-9', 'undefined', 'undefined', 'undefined', '2022-11-08', 'zani', 'undefined'),
(63, 0, 'undefined', 'undefined', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(64, 0, 'undefined', 'undefined', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(65, 0, '6-98', 'yfkjcvhhbn', '1', 'undefined', '2022-11-09', 'nuri', '2180000'),
(66, 0, '5-9', 'jgbnm', '2', 'undefined', '2022-11-09', 'zani', '217000'),
(67, 0, 'B9', 'xxxx', '2', 'undefined', '2022-11-09', 'nuri', '217000'),
(68, 0, 'undefined', 'undefined', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(69, 6, 'B15G01', 'uvele ubone kuthi wee', 'Software', 'http://url', '2022-10-24', 'Banele', '2170000'),
(70, 6, 'B15G01', 'uvele ubone kuthi wee', 'Software', 'http://url', '2022-10-24', 'Banele', '2170000'),
(71, 6, 'B15G01', 'uvele ubone kuthi wee', 'Software', 'http://url', '2022-10-24', 'Banele', '2170000'),
(72, 6, 'B15G01', 'uvele ubone kuthi wee', 'Software', 'http://url', '2022-10-24', 'Banele', '2170000');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `request_id` int(11) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `time_requested` time NOT NULL,
  `date` date DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `staff_number` varchar(255) DEFAULT NULL,
  `staff_name` varchar(255) DEFAULT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `category_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `venue`, `time_requested`, `date`, `picture`, `staff_number`, `staff_name`, `issue`, `category_type`) VALUES
(4, 'B16G01', '00:00:00', '2022-10-24', 'http://url', '21800000', NULL, NULL, NULL),
(5, 'B17G01', '00:00:00', '0000-00-00', 'http://url', '21900000', NULL, NULL, NULL),
(6, 'B17G01', '00:00:00', '0000-00-00', 'http://url', '22000000', 'banele', 'Monitor', 'Hardware');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `department_id` int(100) NOT NULL,
  `staff_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname`, `contact`, `email_address`, `password`, `venue`, `department_id`, `staff_number`) VALUES
(3, 'Banele', 'Mpofu', '0136651234', 'mpofu@gmail', '123456', 'B15G01', 1, '21700000'),
(5, 'Nathi', 'Mpofu', '0136657894', 'mpofu1@gmail.com', '123456', 'B15', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobcard`
--
ALTER TABLE `jobcard`
  ADD PRIMARY KEY (`jobcard_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobcard`
--
ALTER TABLE `jobcard`
  MODIFY `jobcard_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
