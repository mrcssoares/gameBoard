<?php
$player = $_GET['player']
try{
		#Conexão com MySQL via PDO_MYSQL
	$DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
}catch (PDOException $e) {
   	echo $e->getMessage();
}

if($player == "1"){
	$sql2 = "UPDATE GAME SET Vencedor = 1 WHERE GAME.ID = 1";
	$jogador2 = $DBH->query($sql2);
}else
	$sql2 = "UPDATE GAME SET Vencedor = 2 WHERE GAME.ID = 1";
	$jogador2 = $DBH->query($sql2);
?>