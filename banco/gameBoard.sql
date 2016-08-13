-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 27/07/2016 às 21:47
-- Versão do servidor: 10.1.13-MariaDB
-- Versão do PHP: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gameBoard`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `JOGADOR`
--

CREATE TABLE `JOGADOR` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(40) NOT NULL,
  `Fase` int(11) NOT NULL,
  `IdSala` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabela que armazenara informações das dos jogadores';

--
-- Fazendo dump de dados para tabela `JOGADOR`
--

INSERT INTO `JOGADOR` (`ID`, `Nome`, `Fase`, `IdSala`) VALUES
(1, 'marcos', 0, 1),
(2, 'marcos', 0, 1),
(3, 'gisele', 0, 1),
(4, 'gisel', 0, 1),
(5, 'dara', 0, 1),
(6, 'josane', 0, 1),
(7, 'josane', 0, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `PERGUNTA`
--

CREATE TABLE `PERGUNTA` (
  `ID` int(11) NOT NULL,
  `Descricao` text NOT NULL,
  `Resposta` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `PERGUNTA`
--

INSERT INTO `PERGUNTA` (`ID`, `Descricao`, `Resposta`) VALUES
(1, 'o nome que se dá a estrutura de dados em o primeiro elemento a entrar é o ultimo a sair é pilha.', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `SALA`
--

CREATE TABLE `SALA` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabela que armazenara informações das salas criadas no jogo';

--
-- Fazendo dump de dados para tabela `SALA`
--

INSERT INTO `SALA` (`ID`, `Nome`) VALUES
(1, 'game'),
(2, 'salateste'),
(3, 'ue'),
(4, 'WORD'),
(5, 'marcos'),
(6, 'marcos2'),
(7, 'josane');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `JOGADOR`
--
ALTER TABLE `JOGADOR`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IdSala` (`IdSala`);

--
-- Índices de tabela `PERGUNTA`
--
ALTER TABLE `PERGUNTA`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `SALA`
--
ALTER TABLE `SALA`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `JOGADOR`
--
ALTER TABLE `JOGADOR`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de tabela `PERGUNTA`
--
ALTER TABLE `PERGUNTA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de tabela `SALA`
--
ALTER TABLE `SALA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
