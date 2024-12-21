-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2024 at 12:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitnesstracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `Username` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Confirm_Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`Username`, `Email`, `Password`, `Confirm_Password`) VALUES
('fshfhgs', 'vijayasreet02@gmail.com', 'gvvxcnvxn', 'hchnvx'),
('Viji', 'mickeysree9626@gmail.com', '123456', '12345'),
('sri', 'gxgfdf@gmail.com', '123456', '123456'),
('lavanya', 'karthi5496k@gmail.com', '123456', '123456'),
('vijay', 'vijayasg@gmail.com', '12345', '12345'),
('viji', 'gxgfdf@gmail.com', '12345', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `steps` int(11) DEFAULT NULL,
  `running` decimal(5,2) DEFAULT NULL,
  `sleep` int(11) DEFAULT NULL,
  `target_weight` int(11) DEFAULT NULL,
  `water` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `full_name`, `location`, `dob`, `height`, `weight`, `steps`, `running`, `sleep`, `target_weight`, `water`) VALUES
(3, 'svhnx', 'db cbn', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'svhnx', 'sjchjh', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'jsbm', 'dbcmb', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'sjdbmb', 'bdmscbm', '0000-00-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(8, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(9, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(10, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(11, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(12, 'gfg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(13, 'hghg', '', '0000-00-00', 0, 0, 0, 0.00, 0, 0, 0.00),
(14, 'sri', 'fgfgax', '0000-00-00', 0, 0, 1200, 30.00, 7, 36, 6.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
