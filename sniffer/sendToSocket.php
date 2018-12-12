<?php
$connect=mysqli_connect("syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com","syrusric","syrus000","syrusdatabase");

$fech=$_POST["fecha"];
$lati=$_POST["latitud"];
$longi= $_POST["longitud"];
$carro= $_POST["carro"];

mysqli_query($connect,"INSERT INTO syrustable (fecha,latitud,longitud,idcarro) VALUES('$fech','$lati','$longi','$carro')");
?>﻿
