<?php
include('mysqli/conexion.php');    
$consulta1 = "SELECT * FROM `syrustable` WHERE idcarro = 1 ORDER BY (ID) DESC LIMIT 10";
$resultado1 = mysqli_query($conexion,$consulta1);
$ejex1 = "";
$ejey1 = "";
if ($resultado1->num_rows > 0) {
	while($row = $resultado1->fetch_assoc()){
		$ejey1 = $row["vel"].",".$ejey1;
		$ejex1 = "'".$row["fecha"]."'".",".$ejex1;		
	}	
}
$consulta2 = "SELECT * FROM `syrustable` WHERE idcarro = 2 ORDER BY (ID) DESC LIMIT 10";
$resultado2 = mysqli_query($conexion,$consulta2);
$ejex2 = "";
$ejey2 = "";
if ($resultado2->num_rows > 0) {
	while($row = $resultado2->fetch_assoc()){
		$ejey2 = $row["vel"].",".$ejey2;
		$ejex2 = "'".$row["fecha"]."'".",".$ejex2;		
	}	
}
mysqli_close($conexion);
?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="refresh" content="5"/>
		<script src="js/Chart.bundle.js"></script>
		<script src="js/utils.js"></script>
		<style>
		canvas {
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}
		</style>
	</head>
	<body>
		<div style="width:85%;">
			<canvas id="canvas"></canvas>
		</div>
		<script>
		var config = {
			type: 'line',
			data: {
				labels: [<?php echo $ejex1 ?>],
				datasets: [{
					label: 'Carro 1',
					backgroundColor: window.chartColors.yellow,
					borderColor: window.chartColors.yellow,
					data: [<?php echo $ejey1 ?>],
					fill: false,
				},{
					label: 'Carro 2',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [<?php echo $ejey2 ?>],
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Grafica velocidad'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Fecha y hora'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Velocidad'
						}
					}]
				}
			}
		};
		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
		</script>
	</body>
</html>
