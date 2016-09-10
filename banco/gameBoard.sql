-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 10/09/2016 às 09:12
-- Versão do servidor: 5.7.13-0ubuntu0.16.04.2
-- Versão do PHP: 7.0.8-0ubuntu0.16.04.2

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
-- Estrutura para tabela `FASE`
--

CREATE TABLE `FASE` (
  `ID` int(11) NOT NULL,
  `IdPergunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabela com jogadores relacionados ás perguntas em suas fases';

--
-- Fazendo dump de dados para tabela `FASE`
--

INSERT INTO `FASE` (`ID`, `IdPergunta`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `GAME`
--

CREATE TABLE `GAME` (
  `ID` int(11) NOT NULL,
  `Jogador1` int(11) NOT NULL,
  `Jogador2` int(11) NOT NULL,
  `Vez` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `GAME`
--

INSERT INTO `GAME` (`ID`, `Jogador1`, `Jogador2`, `Vez`) VALUES
(1, 5, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `JOGADOR`
--

CREATE TABLE `JOGADOR` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(40) NOT NULL,
  `Fase` int(11) NOT NULL,
  `IdSala` int(11) NOT NULL,
  `player` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabela que armazenara informações das dos jogadores';

--
-- Fazendo dump de dados para tabela `JOGADOR`
--

INSERT INTO `JOGADOR` (`ID`, `Nome`, `Fase`, `IdSala`, `player`) VALUES
(31, 'jogadorteste', 1, 52, 1),
(65, 'risos', 3, 67, 1),
(66, 'marcos', 2, 67, 2),
(67, 'indo', 2, 68, 1),
(68, 'vamo', 2, 68, 2),
(69, 'marcos', 2, 69, 1),
(70, 'Gisele', 2, 69, 2),
(71, 'maria', 2, 70, 1),
(72, 'marwuin', 2, 70, 2),
(73, 'haiagua', 2, 71, 1),
(74, 'hyfgsasuyfdg', 1, 71, 2),
(75, 'iyfhi', 1, 72, 1),
(76, 'java', 1, 72, 2),
(77, 'ytfhh', 1, 73, 1),
(78, 'mdsa', 1, 73, 2),
(79, 'entrandonasala', 1, 74, 1),
(80, 'gatinhaSafadinha', 1, 74, 2),
(81, 'jogadortop', 4, 75, 1),
(82, 'gatinhatop', 4, 75, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `PERGUNTA`
--

CREATE TABLE `PERGUNTA` (
  `ID` int(11) NOT NULL,
  `Pergunta` text NOT NULL,
  `Resposta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `PERGUNTA`
--

INSERT INTO `PERGUNTA` (`ID`, `Pergunta`, `Resposta`) VALUES
(1, 'O nome que se dá a estrutura de dados em o primeiro elemento a entrar é o ultimo a sair é Pilha', 1),
(2, 'Quais são as características de uma LAN?\nR=LAN tem uma cobertura mais limitada (prédio, campus)', 1),
(3, 'Quais são as características de uma WAN?\nR=WAN tem cobertura ampla (internacional).', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `SALA`
--

CREATE TABLE `SALA` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(40) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci COMMENT='tabela que armazenara informações das salas criadas no jogo';

--
-- Fazendo dump de dados para tabela `SALA`
--

INSERT INTO `SALA` (`ID`, `Nome`) VALUES
(52, 'salateste'),
(67, 'tumbe'),
(68, 'agoravai'),
(69, 'saladomarcos'),
(70, 'salagisele'),
(71, 'vaigha'),
(72, 'mgdty'),
(73, 'SALA'),
(74, 'criandosala'),
(75, 'salatop');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `FASE`
--
ALTER TABLE `FASE`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `GAME`
--
ALTER TABLE `GAME`
  ADD PRIMARY KEY (`ID`);

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
-- AUTO_INCREMENT de tabela `FASE`
--
ALTER TABLE `FASE`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `GAME`
--
ALTER TABLE `GAME`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de tabela `JOGADOR`
--
ALTER TABLE `JOGADOR`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT de tabela `PERGUNTA`
--
ALTER TABLE `PERGUNTA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `SALA`
--
ALTER TABLE `SALA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
