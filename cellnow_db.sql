-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2022 a las 13:33:18
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
  `mark_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `models`
--

INSERT INTO `models` (`id`, `name`, `mark_id`) VALUES
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
  `mark_id` int(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  `discount` varchar(10) NOT NULL,
  `camera` varchar(50) NOT NULL,
  `model_id` int(11) NOT NULL,
  `screen` varchar(20) NOT NULL,
  `unlocking` varchar(20) NOT NULL,
  `image` varchar(20) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trolly`
--

CREATE TABLE `trolly` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `prudct_id:` int(11) NOT NULL,
  `amount` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `user_category_id` int(11) NOT NULL,
  `avatar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id`, `name`) VALUES
(3, 'usuario'),
(4, 'administrador');

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
  ADD KEY `mark_id` (`mark_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mark_id` (`mark_id`),
  ADD KEY `model_id` (`model_id`),
  ADD KEY `mark_id_2` (`mark_id`),
  ADD KEY `model_id_2` (`model_id`);

--
-- Indices de la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `prudct_id:` (`prudct_id:`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_category_id` (`user_category_id`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `trolly`
--
ALTER TABLE `trolly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `models`
--
ALTER TABLE `models`
  ADD CONSTRAINT `models_ibfk_1` FOREIGN KEY (`mark_id`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`mark_id`) REFERENCES `marks` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`model_id`) REFERENCES `models` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `trolly`
--
ALTER TABLE `trolly`
  ADD CONSTRAINT `trolly_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `trolly_ibfk_2` FOREIGN KEY (`prudct_id:`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_category_id`) REFERENCES `user_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
