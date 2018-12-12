<!DOCTYPE html>
<html>
  <head>
    <meta name="description" content="Pagina diseñada con el fin de mostrar los datos recibidos del sistema Syrus 3G." />
    <link rel="stylesheet" type="text/css" href="css/loginc.css">
    <link rel="shortcut icon" type="image/x-icon" href="Camion.ico">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">﻿
    <style type="text/css">
      html body {
        position: relative;
        left: 2.5%  
        width: 90%;
        height: 100%;
        padding: 0;
      }
    </style>
  </head>
<body id="LoginForm">
  <div class="container">
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <h2 class="titulo">Syrus 3G</h2>
          <p>Por favor ingrese su usuario y contraseña</p>
        </div>
        <script type="text/javascript">
          function go(){
              if (document.form.password.value=='syrusric000' && document.form.login.value=='syrusric'){ 
                      document.form.submit(); 
              } 
              else{ 
                   alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
              } 
          } 
        </script> 
        <form id="Login" method="post" name=form action="index.php">
          <div class="form-group">
            <input type="text" name="login" class="form-control" id="inputEmail" placeholder="Usuario">
          </div>
          <div class="form-group">
            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Contraseña">
          </div>
          <div class="ayuda">
            <a href="mailto:syrus000@gmail.com" title="Enviar correo a servicio de ayuda" class="Correo">Contactar ayuda</a>
          </div>       
          <input class="btn btn-primary" onclick=go() type=button value=Acceder>
        </form>
      </div>
    </div>
  </div>
  <hr />
  <footer>
    <p>
      Proyecto Dise&ntildeo Electr&oacutenico 2018. <br />
      Barranquilla- Colombia. <br />
      Uninorte.
    </p>      
  </footer>
</body>
</html>