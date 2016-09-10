<?php

$sala = $_GET['sala'];
try{
      #Conexão com MySQL via PDO_MYSQL
      $DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
  }catch (PDOException $e) {
      echo $e->getMessage();
  }

   //retorna id do time ja cadastrado posteriormente\\
  $sql =  "SELECT * FROM SALA WHERE Nome = '$sala'";
  $consulta = $DBH->prepare($sql) or die ("Error: " .$consulta->erroInfo());
  $consulta->execute();

  $nomeT = $consulta->fetch(PDO::FETCH_OBJ);
  $id_time = $nomeT->ID;

  $sql2="SELECT * FROM JOGADOR where idSala=".$id_time;  
  $consulta2 = $DBH->prepare($sql2);
  $consulta2->execute();
  $count = $consulta2->rowCount();
  
  if ($count > 1)
      echo "true";
  else
      echo "false";

?>