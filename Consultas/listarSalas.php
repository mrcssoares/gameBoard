<?php
  header('Content-Type: text/html; charset=utf-8');
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

  	$sql = "SELECT NOME FROM SALA";
  	$NOME_SALA = $DBH->query($sql) or die ("Erro: ".$NOME_SALA->erroInfo());
  	while($objSala = $NOME_SALA->fetch(PDO::FETCH_OBJ)){
  		$nome = $objSala->NOME;

      $sql = "SELECT JOGADOR.Nome 
                FROM JOGADOR 
                  INNER JOIN SALA 
                    ON SALA.ID LIKE JOGADOR.IdSala 
                      WHERE SALA.Nome = '$nome'";

      $consulta = $DBH->query($sql) or die ("Erro consulta Jogador: ".$consulta->erroInfo());
      if($consulta->rowCount() < 2){
        echo $nome.";";
      }
              /*$j = 0;
              while($objJogadores = $consulta->fetch(PDO::FETCH_OBJ)){
                $j++;
                echo $objJogadores->Nome;
              }*/
    }
  /*  Sabados 99196-7874
      Seg-Sex 99418-9483
      Seg-Sex 99418-9479 // //comida ali de perto da ufam
  */
?>

