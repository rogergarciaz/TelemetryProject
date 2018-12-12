$(document).ready(function(){
	$('#tabla').load('tabla.php');
	setInterval(
		function(){
			$('#tabla').load('tabla.php');
		},5000
	);
});
function cambiolayer() {
	var e = document.getElementById("menumapa");
	var tipomapa = e.selectedIndex;
	if (tipomapa == 0) {
		mymap.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.run-bike-hike'}))
		map.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.run-bike-hike'}))
	}
	if (tipomapa == 1) {
		mymap.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.streets'}))
		map.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.streets'}))
	}	    		
	if (tipomapa == 2) {
		mymap.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.satellite'}))
		map.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.satellite'}))
	}	    		
	if (tipomapa == 3) {
		mymap.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.streets-satellite'}))
		map.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {id:'mapbox.streets-satellite'}))
	}
}
window.onload = codeAddress;
function codeAddress() {
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	if (month < 10) {
		month = "0"+month;
	}
	var day = time.getDate();
	if (day < 10) {
		day = "0"+day;
	}
	var hour = time.getHours();
	if (hour < 10) {
		hour = "0"+hour;
	}
	var min = time.getMinutes();
	if (min < 10) {
		min = "0"+min;
	}
	document.getElementById('fecha_inicial').value = year+"-"+month+"-"+day+"T00:00";
	document.getElementById('fecha_final').value = year+"-"+month+"-"+day+"T"+hour+":"+min;
	document.getElementById("fecha_inicial").max = document.getElementById("fecha_final").value;
	document.getElementById("fecha_final").min = document.getElementById("fecha_inicial").value;
}