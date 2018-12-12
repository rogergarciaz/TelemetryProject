<!DOCTYPE html>
<html> 
	<head>
		<title>Syrus 3G</title>		
		<link rel="shortcut icon" type="image/x-icon" href="images/camion.ico">
		<meta name="description" content="Pagina diseñada con el fin de mostrar los datos recibidos del sistema Syrus 3G." />
		<link rel="stylesheet" type="text/css" href="css/estilo.css">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">﻿
	</head>

	<body>
		<div class="contenedor">
			<header>
				<div class="camion">
					<img src="images/camion.png" width=25% alt="Logotipo">
				</div>
				<h1 class="titulo">Syrus 3G</h1>
				<br /> 
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
			<section class="wrapper">
				<section class="main"></section>
					<article>
						<h2><center> Descripci&oacuten del proyecto </center></h2>
					</article>
			</section>

			<P>
				Este proyecto consiste en el envio de la ubicaci&oacuten GPS de vehiculos de transporte de cargas pesadas, mediante el dispositivo Syrus 3G instalado en cada uno de ellos para el monitoreo de rutas y vigilancia de mercancias. Esto se logra mediante la utilizaci&oacuten de la red celular para el envío de datos a una IP p&uacuteblica con un puerto predeterminado. Dicha informaci&oacuten ser&aacute captada por un Sniffer, ejecutado con Python, utilizando el sofware Pycharm, que la enviar&aacute a una base de datos local administrada con Mysql. Como servidor web se utiliz&oacute Apache. Al que previamente se accedi&oacute para mostrar los datos en esta p&aacutegina. Cabe aclarar que tanto Mysql como Apache viene en incluiado en un paquete de sofware libre llamado XAMPP. Para la cartograf&iacutea se utiliz&oacute <a target="_blank" href="https://leafletjs.com/">Leaflet</a>, un librer&iacutea de codigo abierto de JavaScript, que nos permite tener un visualizaci&oacuten bastante decente de la ubicaci&oacuten de nuestro vehiculo.
			</P>

			<p>
			    Para ver ver todas las especificaciones del sistema Syrus por favor haga clic en el siguiente enlace:
			</p>

			<a target="_blank" href="manuales/index.html">Ver manual</a>

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
	</body>
</html>


