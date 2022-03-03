-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2022 a las 12:42:38
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
(19, 'Motorola');

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
(11, 13, 'A20', '23.999', '%15', '84', '15', '512', 'huella ', 'esta muy bueno', '1644540001001_img.jpg'),
(12, 14, '13 Pro Max (512 GB) ', ' 514.499', '%5', '12 Mpx', ' 6.7 \"', ' 512 GB', 'reconocimiento facial', 'iPhone 13 Pro Max. El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.1', '1644539601468_img.jpg'),
(36, 15, 't10', '123254136', '5', '23', '8.5', '256', 'huella ', 'muy bueno', '1645800575754_img.jpg'),
(37, 13, 'Z FLIP 3', '159.999', '', '12 mp', '7.6', '128 gb', 'facial / huella', 'Memoria RAM de 8GB y 128GB de almacenamiento internoCamara: Cámara trasera: Wide 12 MP F1.8 OIS – Ultra Wide 12 MP F2.Cámara Frontal de 10MPProcesador: Octa CoreBateria: 3300mAh', '1645803131310_img.jpg'),
(38, 13, 'A 52', '64.999', '13', '64 mp', 'Pantalla 6.5\"', 'Almacenamiento 128GB', 'huella ', 'En el modo Super Steady, el smartphone mantiene tus videos fluidos y estables. Graba como una cámara de acción de alta calidad, utilizando la cámara ultra ancha y un software predictivo.', '1646302524544_img.jpg'),
(39, 13, 'Z Fold 3', '224.999', '3', ' Ultra Wide 12 MP F2.2 - Wide 12 MP OIS F1.8.', '7,6\"+ 6,2\"', '12/256GB', 'huella ', 'Procesador: Octa Core  Batería: 4400mAh  Conectividad: USB type C- USB 2.0 - GPS, Glonass, Beidou, Galileo, QZSS- Wifi-Bluetooth-NFC- Smart Switch', '1646302772563_img.jpg'),
(41, 13, 'S21 Ultra', '187.999', '3', 'Quad cámara trasera de 108 (W) MP + 12 (UW) MP + 1', '6,8\"', '	256 GB', 'huella / reconocimiento facial ', 'Presentamos el Galaxy S21 Ultra 5G. Diseñado con una sola cámara en los contornos de un marco para crear una revolución en fotografía. Vas a poder hacer videos cinematográficos en 8K y tomar fotos épicas, todo al mismo tiempo. Además, cuenta con el chip más rápido en un teléfono Galaxy, el vidrio más resistente, velocidad 5G y una batería que dura todo, “Ultra” realmente le rinde honor a su nombre.', '1646303080968_img.jpg'),
(42, 19, 'moto G31', '38.849', '3', '	50MP', '6,4\"', '	128 GB', 'huella ', 'Celular Motorola G31 6,43\" 4/128 13MP Gris  Resolución: 1080 x 2400 FHD+, 409ppi, HiD, 60Hz Sistema Operativo: Android Procesador: Octa Core Resolución de Cámara(s) traseras: Principal: 50MP (74.3°) F1.8 Ultra Gran Angular y profundidad: 8MP (118°) F2.2 Macro: 2MP (78°) F2.4 Resolución de Cámara Frontal: 13MP Memoria RAM: 4GB Memoria Interna: 128GB Redes Móviles e Inalambricas: WIFI, Bluetooth 4G Conexiones: USB Colores: Gris Meteoro', '1646303733518_img.jpg'),
(47, 19, 'moto E20', '22.999', '3', '5 mp', '6,5\"', '32 gb', 'huella ', 'Modelo	Moto e20 XT2155-1 Azul Aqua Marca	Motorola Origen	Argentina  Sistema operativo	Android', '1646304607704_img.jpg'),
(48, 19, 'Motorola 20PRO', '111.999', '3', '32MP', '	6,7\"', '	256 GB', 'huella / reconocimiento facial ', 'Motorola Edge 20 Pro XT2153-1 Blanco Optic + Cable.  Sistema Operativo: Android 11  procesador: Octa Core  memoria RAM: 12GB  Almacenamiento: 256GB  Cámara frontal: 32MP  Conectividad: USB puerto tipo C. Wifi.  Bluetooth. NFC.  bateria: 4500mAh.  Incluye Cargador.', '1646304708241_img.jpg'),
(49, 19, 'moto  EDGE', '116.839', '0', '	Principal: 64MP (79°) F1.8 Tele 2x: 8MP (44°) F2.', '	6,7\"', '256 GB', 'huella ', 'Colores: Midnight (Gris Midnight), Sangria (Rojo Plum) Formato de Celular: Touchscreen Resistencia al agua: P2i Tipo de vidrio de pantalla: Gorilla Glass 5', '1646305257024_img.jpg'),
(50, 14, 'SE', '134.999,00', '0', 'Camara principal	12 MP Camara frontal	7 MP', '4.7', '	64 GB', 'huella / reconocimiento facial ', 'Procesador	APPLE A13 BIONIC Marca del equipo	APPLE', '1646305461997_img.jpg'),
(51, 16, 'VELVET GRIS', '', '', '	TRIPLE 48+8+5 MP', '	6.8\'', '	128GB', 'huella / reconocimiento facial ', ' PROCESADOR (VELOCIDAD)	2.8GHZ PROCESADOR (MODELO)	QUALCOMM SNAPDRAGON 845', '1646305715575_img.jpg'),
(52, 15, '8', '52.779', '0', '48 MP, f/1.8, 26mm (wide), 1/2.0\", 0.8µm, PDAF, OI', '6.55', '256 GB', 'huella / reconocimiento facial ', 'Nuevo: Un artículo totalmente nuevo, sin usar, sin abrir y sin daños, en su envase original (en los casos en los que posee un envase). El envase debe ser igual al que se puede encontrar en una tienda, a menos que sea un artículo hecho a mano o que haya sido empaquetado por el fabricante con material no comercial, como una caja o una bolsa de plástico sin logotipo. Consulta el anuncio del vendedor para los detalles completos', '1646306028501_img.jpg'),
(53, 17, ' Poco M4 Pro', ' 85.000', '0', '50 MP f/1.8', 'IPS/LCD de 6,6 pulgadas', '128 GB', 'Huella dactilar y reconocimiento facial', 'POCO M4 PRO NUEVO MODELO COLOR YELLOW. SOMOS MULTICELELECTRONICA-SALTA. HACEMOS ENVIOS A TODP EL PAIS. POR EL MOMENTO REALIZAMOS FACTURA C DE FORMA ELECTRÓNICA Y A PAPEL. CONSULTAR PANTALLA', '1646306228860_img.jpg'),
(54, 17, ' Mi 11 Lite ', '128.799', '0', '64 MP, apertura f / 1.79', ' 6,55 pulgadas', '128 GB', 'huella ', 'Pantalla: Pantalla AMOLED HDR10 + Tamaño: 6,55 pulgadas Resolución: 2400 x 1080 (FHD +), 402 ppi Relación de aspecto: 20: 9 Frecuencia de actualización hasta 90 Hz Frecuencia de muestreo táctil: hasta 240 Hz Gama de colores: DCI-P3 Brillo máximo de pantalla: 800 nits Relación de contraste 5,000,000: 1 / HDR10 + / Admite modo de lectura 3.0 / profundidad de color de 10 bits / Modo de lectura de protección ocular 3.0 / Sensores de luz ambiental de 360 ​​° Corning Gorilla Glass 5 SIM: nanoSIM + nan', '1646306588451_img.jpg'),
(55, 17, 'REDMI NOTE 10 5G', '54.999', '5', '48 Mpx/2 Mpx/2 Mpx', '6.5 \"\"', '128 GB', 'huella ', 'Ultra Rápido. La conectividad 5G no es rápida, es ultrarrápida. Al conectarse a una red 5G, Redmi Note 10 5G te permite disfrutar de juegos fluidos en tiempo real y video llamadas sin interrupciones, ofreciendo una experiencia de uso mucho más envolvente y fluida para ver series, películas o jugar sin que se trabe y sin pausas. Es compatible con la avanzada tecnología de dual SIM o doble SIM (5G+5G).', '1646306801953_img.jpg'),
(56, 14, ' iPhone 12 (256 GB)', '306.570', '0', '12 Mpx', '6.1 \"', '256 GB', ' reconocimiento facial ', 'El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida', '1646307028275_img.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seles`
--

CREATE TABLE `seles` (
  `id` int(11) NOT NULL,
  `markId` int(11) NOT NULL,
  `model` varchar(50) NOT NULL,
  `discount` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `camera` varchar(50) NOT NULL,
  `sreen` varchar(50) NOT NULL,
  `memory` varchar(50) NOT NULL,
  `unlocking` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userCategoryId` int(11) NOT NULL,
  `avatar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `userName`, `email`, `password`, `userCategoryId`, `avatar`) VALUES
(14, 'alejandro', 'lederman', 'ale', 'ale@ale.com', '$2a$10$rTuNOOUINTUNAZa..XzOhOiSWh6DvdIT600cGWLrNJWUwOe4Zp8T2', 6, '1644514524067_img.jpg'),
(15, 'Alejandro', 'Lederman', 'ale', 'a@a.com', '$2a$10$b0SZ4SZoAckzZAqBb8Cf0Or2iGTuAAq9A.tAgcmFlEhBH/C2CvEL.', 6, '1644514524067_img.jpg'),
(17, 'martin', 'martin', 'martin', 'martintajman@gmail.com', '$2a$10$oVbgHXHb2XfNVAibtGJ/mOnGaoMg6zrrnpCsHITfm4p5POynYWJvi', 5, '1645462665039_img.jpg'),
(18, 'Alejandro', 'Lederman', 'ale', 'alejandro.lederman@live.com.ar', '$2a$10$mKaCLXrX/AMXGgtVZqZlg.e/N/LGYR5A4fkORjJI8LYXs87eIiesi', 6, '1645801195092_img.jpg');

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
-- Indices de la tabla `seles`
--
ALTER TABLE `seles`
  ADD PRIMARY KEY (`id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `seles`
--
ALTER TABLE `seles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `seles`
--
ALTER TABLE `seles`
  ADD CONSTRAINT `seles_ibfk_1` FOREIGN KEY (`markId`) REFERENCES `marks` (`id`) ON UPDATE CASCADE;

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
