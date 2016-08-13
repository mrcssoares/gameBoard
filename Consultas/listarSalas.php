<?php
	try{
      	#Conexão com MySQL via PDO_MYSQL
      	$DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "");
  	}catch (PDOException $e) {
      	echo $e->getMessage();
  	}

  	$sql = "SELECT NOME FROM SALA";
  	$NOME_SALA = $DBH->query($sql) or die ("Erro: ".$NOME_SALA->erroInfo());
    $i = 0;
  	while($objSala = $NOME_SALA->fetch(PDO::FETCH_OBJ)){
  		echo $objSala->NOME.";";
      $i++;
    }
    echo "^";

?>