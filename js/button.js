var conboton = 0;
var contr = 0;
function boton() {
	if(typeof j != 'undefined'){
		for (i = 0; i < j; i = i + 1){
			map.removeLayer(newMarker[i]);
		}
	}	
	if ((conboton%2) == 0) {
		if (cont == 0) {
			document.getElementById("filterlocation").checked = true;
			markerhis = L.marker([map.getCenter().lat, map.getCenter().lng]).addTo(map);
			polygon = L.polygon([[0,0],[0,0]], {color: '#FF5E36'}).addTo(map);
			document.getElementById("radiovalue").style.display = "";
			document.getElementById("startroute").style.display = "none";
			polygon.on('mousedown', function () {
				map.eachLayer(function (layer) {if (layer._icon != undefined) {map.removeLayer(layer);}});
			  map.on('mousemove', function (e) {
			    markerhis.setLatLng({lat:e.latlng.lat,lng:e.latlng.lng})
			    map.setView({lat:e.latlng.lat,lng:e.latlng.lng})
			    desvlat = Number(document.getElementById("radiovalue").value)*0.000009;
			    desvlng = Number(document.getElementById("radiovalue").value)*0.000009155;
			    var lati = markerhis.getLatLng().lat - desvlat
			    var latf = markerhis.getLatLng().lat + desvlat
			    var lngi = markerhis.getLatLng().lng - desvlng
			    var lngf = markerhis.getLatLng().lng + desvlng
			    document.getElementById("lati_inicial").value = lati;
			    document.getElementById("lati_final").value = latf;
			    document.getElementById("longi_inicial").value = lngi;
			    document.getElementById("longi_final").value = lngf;
			    polygon.setLatLngs([[lati,lngf],[lati,lngi],[latf,lngi],[latf,lngf]])
			    });
			  }
			); 
			map.on('mouseup',function(e){
			map.removeEventListener('mousemove');
				lati = document.getElementById("lati_inicial").value;
				latf = document.getElementById("lati_final").value;
				lngi = document.getElementById("longi_inicial").value;
				lngf = document.getElementById("longi_final").value;
				idate = document.getElementById("fecha_inicial").value;
				idate = idate.split("T");
				idate = idate[0]+" "+idate[1];
				fdate = document.getElementById("fecha_final").value;
				fdate = fdate.split("T");
				fdate = fdate[0]+" "+fdate[1];	
				if (document.getElementById("carro1").checked == true) {
					idc = 1;
				}
				if (document.getElementById("carro2").checked == true) {
					idc = 2;
				}				
				$.get( "datahispos.php", {id: idate, fd: fdate, lai: lati, laf: latf, loi: lngi, lof: lngf, idcar: idc}, function(xhr){
					document.getElementById("datos").value = xhr;
					if (document.getElementById("datos").value == "") {
						if (cont > 0) {
							map.removeLayer(polylinehis);						
						}
						if (contr > 0) {
							map.removeLayer(animatedMarker);
						}
					}
					else {
						map.removeLayer(markerhis);
						datos = document.getElementById("datos").value;
						datos = datos.split("#");
						newMarker = {};
						j = 0;
						for (i = 0; i < datos.length - 2; i=i+3) {
							newMarker[j] = L.marker([Number(datos[i]),Number(datos[i+1])]).addTo(map).bindPopup(datos[i+2]);
							j = j + 1;
						}
					}
				});				
			})			
		}
		else {
			document.getElementById("filterlocation").checked = true;
			markerhis = L.marker([map.getCenter().lat, map.getCenter().lng]).addTo(map);
			polygon = L.polygon([[0,0],[0,0]], {color: '#FF5E36'}).addTo(map);
			document.getElementById("radiovalue").style.display = "";
			document.getElementById("startroute").style.display = "none";
			polygon.on('mousedown', function () {
				map.eachLayer(function (layer) {if (layer._icon != undefined) {map.removeLayer(layer);}});
			  map.on('mousemove', function (e) {
			    markerhis.setLatLng({lat:e.latlng.lat,lng:e.latlng.lng})
			    map.setView({lat:e.latlng.lat,lng:e.latlng.lng})
			    desvlat = Number(document.getElementById("radiovalue").value)*0.000009;
			    desvlng = Number(document.getElementById("radiovalue").value)*0.000009155;
			    var lati = markerhis.getLatLng().lat - desvlat
			    var latf = markerhis.getLatLng().lat + desvlat
			    var lngi = markerhis.getLatLng().lng - desvlng
			    var lngf = markerhis.getLatLng().lng + desvlng
			    document.getElementById("lati_inicial").value = lati;
			    document.getElementById("lati_final").value = latf;
			    document.getElementById("longi_inicial").value = lngi;
			    document.getElementById("longi_final").value = lngf;
			    polygon.setLatLngs([[lati,lngf],[lati,lngi],[latf,lngi],[latf,lngf]])
			    });
			  }
			); 
			map.on('mouseup',function(e){
			map.removeEventListener('mousemove');
				lati = document.getElementById("lati_inicial").value;
				latf = document.getElementById("lati_final").value;
				lngi = document.getElementById("longi_inicial").value;
				lngf = document.getElementById("longi_final").value;
				idate = document.getElementById("fecha_inicial").value;
				idate = idate.split("T");
				idate = idate[0]+" "+idate[1];
				fdate = document.getElementById("fecha_final").value;
				fdate = fdate.split("T");
				fdate = fdate[0]+" "+fdate[1];	
				if (document.getElementById("carro1").checked == true) {
					idc = 1;
				}
				if (document.getElementById("carro2").checked == true) {
					idc = 2;
				}					
				$.get( "datahispos.php", {id: idate, fd: fdate, lai: lati, laf: latf, loi: lngi, lof: lngf, idcar: idc}, function(xhr){
					document.getElementById("datos").value = xhr;
					if (document.getElementById("datos").value == "") {
						if (cont > 0) {
							map.removeLayer(polylinehis);						
						}
						if (contr > 0) {
							map.removeLayer(animatedMarker);
						}
					}
					else {
						map.removeLayer(markerhis);
						datos = document.getElementById("datos").value;
						datos = datos.split("#");
						newMarker = {};
						j = 0;
						for (i = 0; i < datos.length - 2; i=i+3) {
							newMarker[j] = L.marker([Number(datos[i]),Number(datos[i+1])]).addTo(map).bindPopup(datos[i+2]);
							j = j + 1;
						}
					}
				});				
			})
			map.removeLayer(polylinehis);
			if (contr > 0) {
				map.removeLayer(animatedMarker);
			}
		}
	}
	else {
		document.getElementById("filterlocation").checked = false;
		map.removeLayer(markerhis);
		document.getElementById("radiovalue").style.display = "none";		
		document.getElementById("startroute").style.display = "";
		map.removeLayer(polygon);
		document.getElementById("radiovalue").value = "";
		cont = 0;
		map.removeEventListener('mousemove');
		map.removeEventListener('clic');
		polygon.removeEventListener('mousedown');
		map.removeEventListener('mouseup');
	}
	conboton = conboton + 1;
}
function route() {
	if (cont > 0) {
		if (contr == 0) {
			contr = contr + 1;
		}
		else {
			map.removeLayer(animatedMarker);						
		}
		animatedMarker = L.animatedMarker(polylinehis.getLatLngs(),{icon: camion}).addTo(map);
		map.addLayer(animatedMarker);
	}
	if (cont == 0) {
		alert("Realice una busqueda primeramente.");
	}
}
function bcarro1() {
	if (document.getElementById("carro1").checked == true) {
		document.getElementById("carro2").checked = false;
	}
}
function bcarro2() {
	if (document.getElementById("carro2").checked == true) {
		document.getElementById("carro1").checked = false;
	}
}