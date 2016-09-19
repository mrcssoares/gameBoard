<?php
header('Content-Type: text/html; charset=utf-8');
$player= $_GET['player'];
$fase =$_GET['fase'];

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

$sql = "SELECT * FROM FASE WHERE ID = $fase";
$Fase = $DBH->query($sql);
$objFase = $Fase->fetch(PDO::FETCH_OBJ);

$idPergunta = $objFase->IdPergunta;
$sql = "SELECT * FROM PERGUNTA WHERE ID ='$idPergunta'";
$Pergunta = $DBH->query($sql);
$objPergunta = $Pergunta->fetch(PDO::FETCH_OBJ);
echo $objPergunta->Pergunta.";".$objPergunta->Resposta;


?>