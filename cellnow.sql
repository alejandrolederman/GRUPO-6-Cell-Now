-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2022 a las 01:41:08
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
-- Base de datos: `cellnow`
--
CREATE DATABASE IF NOT EXISTS `cellnow` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cellnow`;

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
(13, 'Samsung'),
(14, 'iPhone'),
(15, 'OnePlus'),
(16, 'LG'),
(17, 'Xiaomi'),
(18, 'iPhone');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `markId` int(11) NOT NULL,
  `model` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  `discount` varchar(10) NOT NULL,
  `camera` varchar(50) NOT NULL,
  `screen` varchar(50) NOT NULL,
  `memory` varchar(50) NOT NULL,
  `unlocking` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `markId`, `model`, `price`, `discount`, `camera`, `screen`, `memory`, `unlocking`, `description`, `image`) VALUES
(11, 13, 'A20', '$85.000', '%15', '84', '15', '512', 'huella ', 'esta muy bueno', '1644540001001_img.jpg'),
(12, 14, '8 plus', '$113.000', '%5', '123', '8.4', '256', 'huella ', 'muy bueno', '1644539601468_img.jpg');

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
(5, 'usuario'),
(6, 'administrador');

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
(14, 'alejandro', 'lederman', 'ale', 'ale@ale.com', '$2a$10$rTuNOOUINTUNAZa..XzOhOiSWh6DvdIT600cGWLrNJWUwOe4Zp8T2', 6, ''),
(15, 'Alejandro', 'Lederman', 'ale', 'a@a.com', '$2a$10$b0SZ4SZoAckzZAqBb8Cf0Or2iGTuAAq9A.tAgcmFlEhBH/C2CvEL.', 6, '1644514524067_img.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mark_id` (`markId`),
  ADD KEY `mark_id_2` (`markId`),
  ADD KEY `markId` (`markId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `trolly`
--
ALTER TABLE `trolly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD CONSTRAINT `trolly_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `trolly_ibfk_2` FOREIGN KEY (`prudctId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`userCategoryId`) REFERENCES `usercategory` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
