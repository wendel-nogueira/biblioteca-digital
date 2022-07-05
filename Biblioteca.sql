-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 13/06/2013 às 19h59min
-- Versão do Servidor: 5.5.31
-- Versão do PHP: 5.3.10-1ubuntu3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `Biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `ASSOCIADO`
--

CREATE TABLE IF NOT EXISTS `ASSOCIADO` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(35) NOT NULL,
  `Endereco` varchar(45) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Status` enum('Grad','Posgrad','Prof') NOT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `EMPRESTIMO`
--

CREATE TABLE IF NOT EXISTS `EMPRESTIMO` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `Nro_Exemplar` int(11) NOT NULL,
  `ISBN` varchar(12) NOT NULL,
  `Codigo_Assoc` int(11) NOT NULL,
  `Data_Emp` date NOT NULL,
  `Data_Devol` date DEFAULT NULL,
  PRIMARY KEY (`Codigo`),
  KEY `Nro_Exemplar` (`Nro_Exemplar`,`ISBN`),
  KEY `Codigo_Assoc` (`Codigo_Assoc`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `EXEMPLAR`
--

CREATE TABLE IF NOT EXISTS `EXEMPLAR` (
  `Numero` int(11) NOT NULL,
  `ISBN` varchar(12) NOT NULL,
  `Preco` float DEFAULT NULL,
  PRIMARY KEY (`Numero`,`ISBN`),
  KEY `ISBN` (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `FUNCIONARIO`
--

CREATE TABLE IF NOT EXISTS `FUNCIONARIO` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(35) NOT NULL,
  `Funcao` enum('gerente','funcionario') NOT NULL,
  `Email` varchar(20) NOT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `PUBLICACAO`
--

CREATE TABLE IF NOT EXISTS `PUBLICACAO` (
  `ISBN` varchar(12) NOT NULL,
  `Titulo` varchar(40) NOT NULL,
  `Autor` varchar(35) NOT NULL,
  `Editora` varchar(30) NOT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `RESERVA`
--

CREATE TABLE IF NOT EXISTS `RESERVA` (
  `Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `ISBN` varchar(12) NOT NULL,
  `Codigo_Assoc` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Status` enum('Iniciado','Avisado','Anulado') NOT NULL,
  PRIMARY KEY (`Codigo`),
  KEY `ISBN` (`ISBN`),
  KEY `Codigo_Assoc` (`Codigo_Assoc`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Restrições para as tabelas dumpadas
--

--
-- Restrições para a tabela `EMPRESTIMO`
--
ALTER TABLE `EMPRESTIMO`
  ADD CONSTRAINT `EMPRESTIMO_ibfk_1` FOREIGN KEY (`Codigo_Assoc`) REFERENCES `ASSOCIADO` (`Codigo`);

--
-- Restrições para a tabela `EXEMPLAR`
--
ALTER TABLE `EXEMPLAR`
  ADD CONSTRAINT `EXEMPLAR_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `PUBLICACAO` (`ISBN`);

--
-- Restrições para a tabela `RESERVA`
--
ALTER TABLE `RESERVA`
  ADD CONSTRAINT `RESERVA_ibfk_2` FOREIGN KEY (`Codigo_Assoc`) REFERENCES `ASSOCIADO` (`Codigo`),
  ADD CONSTRAINT `RESERVA_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `PUBLICACAO` (`ISBN`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
