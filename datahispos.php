<?php
$servername="syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com";
$dbname="syrusdatabase";
$username="syrusric";
$password="syrus000";
$conexion = mysqli_connect($servername, $username, $password, $dbname); 
$idate = $_GET["id"];
$fdate = $_GET["fd"];
$ilat =+$_GET["lai"];
$flat =+$_GET["laf"];
$ilng =+$_GET["loi"];
$flng =+$_GET["lof"];
$idcar = $_GET["idcar"];
$consulta = "SELECT * FROM syrustable WHERE fecha BETWEEN '$idate' AND '$fdate' And (latitud BETWEEN '$ilat' AND '$flat' AND (longitud BETWEEN '$ilng' AND '$flng')) AND idcarro = $idcar";
$resultado = mysqli_query($conexion,$consulta);
if ($resultado->num_rows > 0) {
	while($row = $resultado->fetch_assoc()){
		echo $row["latitud"]."#".$row["longitud"]."#".$row["fecha"]."#";
	}	
}
else {
    echo "";
}
?>