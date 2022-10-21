-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2022 at 05:55 PM
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
  `status` varchar(100) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `staff_number` varchar(255) DEFAULT NULL,
  `staff_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobcard`
--

INSERT INTO `jobcard` (`jobcard_id`, `request_id`, `venue`, `description`, `category`, `status`, `picture`, `createdAt`, `staff_number`, `staff_name`) VALUES
(6, 1, 'B15G01', 'ziyakhala blind', 'Software', 'pending', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbroken-computer&psi', '2022-10-20', '2170000', 'Banele Mpofu'),
(7, 1, 'B15G01', 'ziyakhala blind', 'Software', 'pending', 'url', '2022-10-20', '2170000', 'Banele Mpofu'),
(8, 1, 'undefined', 'undefined', 'network blah blah blah', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(9, 1, 'undefined', 'undefined', 'network blah blah blah', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(10, 1, 'undefined', 'undefined', 'network blah blah blah', 'undefined', 'undefined', '0000-00-00', 'undefined', 'undefined'),
(11, 5, 'B15G01', 'undefined', 'kubi blind', 'Software', 'in Progress', '0000-00-00', 'Sosha', ''),
(12, 5, 'B15G01', 'undefined', 'kubi blind', 'Software', 'in Progress', '0000-00-00', 'undefined', ''),
(13, 5, 'B15G01', 'undefined', 'kubi blind', 'Software', 'in Progress', '0000-00-00', 'undefined', ''),
(14, 5, 'B15G01', 'kubi blind', 'Software', 'in Progress', '', '0000-00-00', '217000', 'Banele'),
(15, 5, 'B15G02', 'Ziyakhala keh manje', 'music :-)', 'pending', '', '0000-00-00', '218000', 'Gugu'),
(16, 16, 'B15G02', 'Ziyakhala keh manje', 'music :-)', 'pending', '', '0000-00-00', '218000', 'Nana'),
(17, 16, 'B15G02', 'Ziyakhala keh manje', 'music :-)', 'pending', '', '0000-00-00', '218000', 'Nana');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `request_id` int(11) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `time_requested` time NOT NULL,
  `admin_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `venue`, `user_id`, `time_requested`, `admin_id`) VALUES
(1, 'B15G01', 1, '14:38:48', 1);

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
  `user_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname`, `contact`, `email_address`, `password`, `venue`, `department_id`, `user_type`) VALUES
(1, 'Banele', 'Mpofu', '0136651234', 'mpofu@gmail', '123456', 'B15G01', 1234, 'IT01'),
(2, '', '', '', '', '', '', 0, '');

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
  MODIFY `jobcard_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
