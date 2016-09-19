<?php
  header('Content-Type: text/html; charset=utf-8');
/**
 * Created by PhpStorm.
 * User: marcos
 * Date: 27/07/16
 * Time: 14:31
 */
  $ID = "NULL";
  $nome =$_GET['nome'];
  $sala = $_GET['sala'];


  try{
      #Conexão com MySQL via PDO_MYSQL
      $DBH = new PDO("mysql:host=localhost;dbname=gameBoard", "root", "root");
  }catch (PDOException $e) {
      echo $e->getMessage();
  }

  //retorna id do time ja cadastrado posteriormente\\
  $sql_id_time = $DBH->query("SELECT ID FROM SALA WHERE Nome = '".$sala."'") or die ("Erro: ".$sql_id_time->erroInfo());
  $id = $sql_id_time->fetch(PDO::FETCH_OBJ);
  $nt = $id->ID;

  $consulta = $DBH->query("SELECT IdSala FROM JOGADOR WHERE Nome = '$nome' AND (IdSala = '$nt')");
  $count = $consulta->rowCount();

  // se jogador não existe, ele é cadastrado
  if ($count == 0){
      $insercao = $DBH->prepare("INSERT INTO JOGADOR (ID, Nome,Fase, IdSala, player) VALUES ($ID, '$nome', '1', '$nt', '2')") or die ("Error: " .$insercao->erroInfo());
      $insercao->execute();
      echo"Jogador: ".$nome." Entrou na Sala: ".$sala;//true
  }else
      echo "Jogador ja existe."//false
?>