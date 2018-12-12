<?php
$connect=mysqli_connect("syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com","syrusric","syrus000","syrusdatabase");

if (isset($_POST["rpm"])) {
	$sensor=$_POST["rpm"];
	mysqli_query($connect,"INSERT INTO syrustable (sensor) VALUES('$sensor')");
}

if (isset($_POST["velocidad"])) {
	$sensor=$_POST["velocidad"];
	mysqli_query($connect,"INSERT INTO syrustable (velo) VALUES('$sensor')");
}
?>﻿