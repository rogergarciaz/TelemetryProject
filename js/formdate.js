function seetable(){
	document.getElementById("hdate").action = "filterdate.php";
	document.getElementById("tablenotsee").checked = false;
}
function notseetable(){
	document.getElementById("hdate").action = "filterdaten.php";
	document.getElementById("tablesee").checked = false;
}
function linker(){
	document.getElementById("fecha_inicial").max = document.getElementById("fecha_final").value;
	document.getElementById("fecha_final").min = document.getElementById("fecha_inicial").value;
}