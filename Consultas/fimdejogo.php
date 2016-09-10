<?php  
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

	$sql2 = "UPDATE GAME SET Jogador1 = 0, Jogador2 = 0, Vez = 1 WHERE GAME.ID = 1";
	$jogador2 = $DBH->query($sql2);




?>