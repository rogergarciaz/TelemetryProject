<?php
include('mysqli/conexion.php');   
include('mysqli/consultainner.php');   
?>
<!DOCTYPE html >
<html>
  <head>
  </head>
  <body>
    <h2><center>Dispositivos</center></h2>    
    <table align="center" id="pos">
      <tr class="Fila1">
        <td>Dispositivo</td>
        <td>Latitud</td>
        <td>Longitud</td>
        <td>Fecha</td>
        <td>RPM</td>
        <td>Velocidad </td>
      </tr>
      <?php
		if ($resultado->num_rows > 0) {
			while($row = $resultado->fetch_assoc()){
				echo "
					<tr>
					<td>Carro ".$row["idcarro"]."</td>
					<td><p>".$row["latitud"]."</p></td>
					<td><p>".$row["longitud"]."</p></td>
					<td><p>".$row["fecha"]."</p></td>
					<td><p>".$row["rpm"]."</p></td>
					<td><p>".$row["vel"]."</p></td>
					</tr>				
				";
			}	
		}
      ?>
    </table> 
  </body>
</html>
