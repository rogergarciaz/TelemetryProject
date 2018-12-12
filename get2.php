<?php
	$conexionn = mysqli_connect("syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com","syrusric","syrus000","syrusdatabase");    
	$consultaa="SELECT * FROM syrustable WHERE idcarro = 2  ORDER BY (id) DESC LIMIT 1";
	$resultadoo=mysqli_query($conexionn,$consultaa);
	$registroo = mysqli_fetch_array($resultadoo); 
	mysqli_close($conexionn);
	echo $registroo[2]." ".$registroo[3];
?> 
