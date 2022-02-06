-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2022 a las 02:37:12
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cellnow_db`
--
CREATE DATABASE IF NOT EXISTS `cellnow_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cellnow_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marks`
--

CREATE TABLE `marks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marks`
--

INSERT INTO `marks` (`id`, `name`) VALUES
(7, 'Samsung'),
(8, 'Motorola'),
(9, 'OnePlus'),
(10, 'LG'),
(11, 'Xiaomi'),
(12, 'iPhone');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `markId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `models`
--

INSERT INTO `models` (`id`, `name`, `markId`) VALUES
(2, 'GALAXY S7', 7),
(3, 'NOTE 8', 7),
(4, 'GALAXY S20 PLUS', 7),
(5, 'MOTO G100', 8),
(6, 'MOTO G 9 POWER', 8),
(7, 'MOTO G 200', 8),
(8, 'G7 ONE', 10),
(9, 'K12 PLUS', 10),
(10, '8T', 9),
(11, '8 PRO', 9),
(12, '8', 9),
(13, '13 PRO', 12),
(14, '12 MINI', 12),
(15, '6 S', 12),
(16, 'POCO X3', 11),
(17, 'MI 10 PRO', 11),
(18, 'MI 11 T', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `markId` int(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  `discount` varchar(10) NOT NULL,
  `camera` varchar(50) NOT NULL,
  `modelId` int(11) NOT NULL,
  `screen` varchar(20) NOT NULL,
  `unlocking` varchar(20) NOT NULL,
  `image` varchar(20) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `markId`, `price`, `discount`, `camera`, `modelId`, `screen`, `unlocking`, `image`, `description`) VALUES
(9, 0, '120000', '', '56mp', 0, '8.4', 'huella ', '', ''),
(10, 0, 'sdfsdfsdfs', '', 'sfsfds', 0, 'sdfsdf', 'sdfsdfsdfs', '', 'sdfsdfsd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trolly`
--

CREATE TABLE `trolly` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `prudctId` int(11) NOT NULL,
  `amount` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usercategory`
--

CREATE TABLE `usercategory` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usercategory`
--

INSERT INTO `usercategory` (`id`, `name`) VALUES
(3, 'usuario'),
(4, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userCategoryId` int(11) NOT NULL,
  `avatar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `userName`, `email`, `password`, `userCategoryId`, `avatar`) VALUES
(8, 'ale', 'ale', 'ale', 'ale@ale.com', '$2a$10$d1Xmbv2It.G3bJ/ZTbrIUelS8Q/byZU6tAwrdh7e971MznEe9GkfK', 0, '0'),
(9, 'Agustín', 'Zurita', 'aguian', 'aguian0104@gmail.com', '$2a$10$scsGCoURz/NldBl0twzvI.Dm14x7qu/idF2rBOg25n8YCIss3pTZq', 3, '0'),
(10, 'Agustína', 'Zurita', 'aguian', 'aguian01045@gmail.co', '$2a$10$nvg3OC/0QF8J.jHDhVUDV.awQDvh8Vi0o6l1/xmjiuctfvRy0/fNy', 3, '0'),
(11, 'Agustín', 'Zurita', 'aguian', 'aguian0104@gmail.com', '$2a$10$rUMVm5ce9lGZn2ypt3z7peKn2Ph2TIWLnMUA96Tg90k9QwDKc7xS.', 3, '0'),
(12, 'Agustín', 'Zurita', 'aguian', 'aguian010334@gmail.c', '$2a$10$td8wDpO6L8PY76SPfR.HXOkoGAkoqoFG2/ezrFzsHXJ1AcmR6/fCO', 3, '0'),
(13, 'Agustín', 'Zurita', 'aguian', 'aguian0104@gmail.com', '$2a$10$jEdz3cFkbR/Xga44jJQOUOk7M6.EDcCah61cAo1bWb5ec4lw25K5i', 3, '0'),
(14, 'alej', '', 'ale', 'alej@alej.com', '$2a$10$b0AK4Uuzdql79iIYQpy31eJpUXPaedeLd9IQGrs1pb.S5mzNR21oS', 0, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mark_id` (`markId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mark_id` (`markId`),
  ADD KEY `model_id` (`modelId`),
  ADD KEY `mark_id_2` (`markId`),
  ADD KEY `model_id_2` (`modelId`);

--
-- Indices de la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userId`),
  ADD KEY `prudct_id:` (`prudctId`);

--
-- Indices de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_category_id` (`userCategoryId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `trolly`
--
ALTER TABLE `trolly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
