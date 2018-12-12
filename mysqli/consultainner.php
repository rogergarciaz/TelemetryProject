<?php  
$consulta = "SELECT A.* FROM syrustable A 
			      INNER JOIN (SELECT MAX(id) AS id FROM syrustable GROUP BY idcarro) B ON A.id = B.id 
			      ORDER BY A.idcarro";
$resultado = mysqli_query($conexion,$consulta);
mysqli_close($conexion);
?>