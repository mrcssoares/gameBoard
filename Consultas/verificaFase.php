<?php
$nome= $_GET['nome'];

try{
      	#Conexão com MySQL via PDO_MYSQL
	$DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
}catch (PDOException $e) {
   	echo $e->getMessage();
}

$DBH->query("SET NAMES 'utf8'");
$DBH->query('SET character_set_connection=utf8');
$DBH->query('SET character_set_client=utf8');
$DBH->query('SET character_set_results=utf8');

$sql = "SELECT * FROM JOGADOR WHERE Nome = '$nome'";
$jogador = $DBH->query($sql);
$objJogador = $jogador->fetch(PDO::FETCH_OBJ);
//print_r($objJogador);
$fase = $objJogador->Fase;
echo $fase;
?>