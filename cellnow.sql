-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2022 a las 19:00:59
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
(1, 'Samsung'),
(2, 'iPhone');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `markId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `models`
--

INSERT INTO `models` (`id`, `name`, `markId`) VALUES
(1, 'A20', 1),
(2, '8 Plus', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `markId` int(11) NOT NULL,
  `modelId` int(11) NOT NULL,
  `price` varchar(50) NOT NULL,
  `camera` varchar(100) NOT NULL,
  `screen` varchar(100) NOT NULL,
  `unlocking` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(100) NOT NULL,
  `discount` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `markId`, `modelId`, `price`, `camera`, `screen`, `unlocking`, `description`, `image`, `discount`) VALUES
(16, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(21, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(22, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(30, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(37, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(38, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(39, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(40, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(41, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(42, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(43, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(44, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(45, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(46, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(47, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(48, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs'),
(49, 2, 1, '123456', 'sdfsdf', 'sdfsfd', 'sfdsfd', 'sdfsfd', '71FuI8YvCNL._AC_SL1500_.jpg', 'sdfsfdsfs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trolly`
--

CREATE TABLE `trolly` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `prudctId` int(11) NOT NULL,
  `amount` varchar(50) NOT NULL
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
(1, 'usuario'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `usercategoryId` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(500) NOT NULL,
  `avatar` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usercategoryId`, `firstName`, `lastName`, `userName`, `email`, `password`, `avatar`) VALUES
(6, 2, 'ale', 'ale', 'ale', 'ale@ale.com', '$2a$10$LjEUfsWPbLawOzc5rjXOwuMFt2fiEYwxfU3VtEVUGWCkGoHP3RK5C', '');

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
  ADD KEY `markId` (`markId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `markId` (`markId`),
  ADD KEY `modelId` (`modelId`);

--
-- Indices de la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `prudctId` (`prudctId`);

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
  ADD KEY `userCategoryId` (`usercategoryId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `models`
--
ALTER TABLE `models`
  ADD CONSTRAINT `models_ibfk_1` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD CONSTRAINT `trolly_ibfk_1` FOREIGN KEY (`prudctId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `trolly_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`usercategoryId`) REFERENCES `usercategory` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
