<!DOCTYPE html>
<html>
	<head>
		<title>Syrus 3G</title>
		<link rel="shortcut icon" type="image/x-icon" href="images/camion.ico">
		<meta name="description" content="Pagina diseñada con el fin de mostrar los datos recibidos del sistema Syrus 3G." /> 
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
	   	integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
	   	crossorigin=""/> 
	   	<script 
	   		src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
	   		integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
	   		crossorigin="">	   		
	   	</script>
		<link rel="stylesheet" type="text/css" href="css/estilo.css">
		<script
			src="https://code.jquery.com/jquery-3.3.1.js"
			integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
			crossorigin="anonymous">
		</script>
		<script src="js/inicio.js"></script>
		<?php $conexion = mysqli_connect("syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com","syrusric","syrus000","syrusdatabase");    
		$consulta="SELECT * FROM syrustable WHERE idcarro = 1  ORDER BY (id) DESC LIMIT 1";
		$resultado=mysqli_query($conexion,$consulta);
		$registro = mysqli_fetch_array($resultado); 
		echo "<script type='text/javascript'> var lat1 = ".$registro[2].";var lng1 = ".$registro[3].";</script>";	
		$consulta="SELECT * FROM syrustable WHERE idcarro = 2  ORDER BY (id) DESC LIMIT 1";
		$resultado=mysqli_query($conexion,$consulta);
		$registro = mysqli_fetch_array($resultado); 
		echo "<script type='text/javascript'> var lat2 = ".$registro[2].";var lng2 = ".$registro[3].";</script>";		
		mysqli_close($conexion);
		?>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">﻿
		<script src="js/movermarker.js"></script>
	</head>
	<body>
		<div class="contenedor">
			<header>
				<div class="camion">
					<img src="images/camion.png" width="25%" alt="Logotipo">
				</div>
				<h1 class="titulo">Syrus 3G</h1>
				<br />
				<script type="text/javascript">
				</script>
				<nav>
					<ul class="menu1">
						<li><a href="login.php">Logout</a></li>
					</ul>
				</nav>
				<nav>
					<ul class="menu">
						<li><a href="index.php">Inicio</a></li>
						<li><a href="descripcion.php">Descripci&oacuten del proyecto</a></li>
						<li><a href="integrantes.php">Integrantes</a></li>
					</ul>
				</nav>
			</header>
			<h2>Ubicaci&oacuten del veh&iacuteculo</h2>
			Seleccione tipo de mapa:
			<select id="menumapa" onchange="cambiolayer()">
		    	<option >Por defecto</option>
		    	<option >Calles</option>
		    	<option >Satelite</option>
		    	<option >Calles y satelites</option>
		    </select>
		    <br />
		    <br />
			<div id="mapid"></div>
			<script src="js/mapatracking.js"></script>
			<iframe class="iframe1" src="graficarpm.php" height= "310" width="50%" frameborder="0"></iframe>
			<iframe class="iframe2" src="graficavel.php" height= "310" width="50%" frameborder="0"></iframe>			
			<div id="tabla"></div>
			<hr />
			<h2><center>Hist&oacutericos</center></h2>
			<br />
			Fecha inicial: <input type="datetime-local" id="fecha_inicial" name="idate" onchange="linker()"> <br />
			Fecha final: <input type="datetime-local" id="fecha_final" name="fdate" onchange="linker()"> 
			<input type="radio" id="filterlocation" onclick="boton()"><button class="link" onclick="boton()">Filtrar ubicaciones</button>
			<script src="js/button.js"></script>
			<input type="number" id="radiovalue" name="radio" step="20" min="20" placeholder="Ingrese radio (m)" style = "display: none" onchange="searcharea()">
			<script src="js/area.js"></script> <br />
			<script src="js/formdate.js"></script> <br />
			<input type="radio" id="carro1" onclick="bcarro1()" checked="true">Carro 1
			<input type="radio" id="carro2" onclick="bcarro2()">Carro 2 <br>
			<button class="bus" onclick="filtrar()">Filtrar</button> <br /> <br /> 
			<script src="js/historicos.js"></script>
			<input type="hidden" id="datos" name="vectores">
			<div id="mapahistorico"></div>
			<button id="startroute" onclick="route()" class="ruta">Iniciar ruta</button>
			<script src="js/mapahistorico.js"></script>
			<hr />
			<footer>
				<p>
					Proyecto Dise&ntildeo Electr&oacutenico 2018. <br />
					Barranquilla- Colombia. <br />
					Uninorte.
				</p>			
			<a href="mailto:syrus000@gmail.com" title="Enviar correo a servicio de ayuda" class="Correo">Contactar ayuda</a>
			</footer>
		</div>
		<input type="hidden" id="lati_inicial" name="ilat" step="0.000000000000001">
		<input type="hidden" id="lati_final" name="flat" step="0.000000000000001">
		<input type="hidden" id="longi_inicial" name="ilng" step="0.000000000000001">
		<input type="hidden" id="longi_final" name="flng" step="0.000000000000001">
	</body>
</html>
