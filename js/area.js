function searcharea() {
	desvlat = Number(document.getElementById("radiovalue").value)*0.000009;
	desvlng = Number(document.getElementById("radiovalue").value)*0.000009155;
	var lati = markerhis.getLatLng().lat - desvlat;
	var latf = markerhis.getLatLng().lat + desvlat;
	var lngi = markerhis.getLatLng().lng - desvlng;
	var lngf = markerhis.getLatLng().lng + desvlng;
	document.getElementById("lati_inicial").value = lati;
	document.getElementById("lati_final").value = latf;
	document.getElementById("longi_inicial").value = lngi;
	document.getElementById("longi_final").value = lngf;
	polygon.setLatLngs([[lati,lngf],[lati,lngi],[latf,lngi],[latf,lngf]]);
	map.fitBounds(polygon.getBounds());
}