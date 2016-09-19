<?php
	try{
	      	#Conexão com MySQL via PDO_MYSQL
		$DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
	}catch (PDOException $e) {
	   	echo $e->getMessage();
	}

	$sql = "SELECT * FROM GAME";
	$consulta = $DBH->query($sql);
	$objConsulta = $consulta->fetch(PDO::FETCH_OBJ);
	echo $objConsulta->Jogador1.";".$objConsulta->Jogador2;

?>