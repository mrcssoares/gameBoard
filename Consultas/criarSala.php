<?php
/**
 * Created by PhpStorm.
 * User: marcos
 * Date: 27/07/16
 * Time: 14:30
 */
  $id = "NULL";
  $nome  = $_GET['nome'];

  try{
      #Conexão com MySQL via PDO_MYSQL
      $DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
  }catch (PDOException $e) {
      echo $e->getMessage();
  }

  $sql = "select * from SALA where Nome like '".$nome."'";
  $resultado = $DBH->query($sql);// or die ("Error: ".$resultado->erroInfo());

  $sql = $resultado->fetch(PDO::FETCH_OBJ);
  $count = $resultado->rowCount();

  if($count == 0){
      $resultado = $DBH->prepare("INSERT INTO SALA (ID, Nome) VALUES (NULL, '$nome')");
      $resultado->execute();
      echo "Sala criada com sucesso!";
  }else{
    echo "Sala já existe!";
  }
?>