var cont = 0;
function filtrar() {
	document.getElementById("fecha_inicial").max = document.getElementById("fecha_final").value;
	document.getElementById("fecha_final").min = document.getElementById("fecha_inicial").value;
	if (document.getElementById("fecha_inicial").valueAsNumber > document.getElementById("fecha_final").valueAsNumber){
		alert("¡¡Orden de fechas incorrecto!!")
	}
	else {
		if(typeof j != 'undefined'){
			for (i = 0; i < j; i = i + 1){
				map.removeLayer(newMarker[i]);
			}
		}
		if ((conboton%2) == 0) {
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
			$.get( "datahis.php", {id: idate, fd: fdate, idcar: idc}, function(xhr){
				document.getElementById("datos").value = xhr;
				if (document.getElementById("datos").value == "") {
					if (cont > 0) {
						map.removeLayer(polylinehis);						
					}
					if (contr > 0) {
						map.removeLayer(animatedMarker);
					}
					alert("No hay datos para estas fechas.");
				}
				else {
					datos = document.getElementById("datos").value;
					datos = datos.split("#");
					polyh = [[Number(datos[0]),Number(datos[1])]];
					dateh = [[datos[2]]];	
					for (i = 3; i < datos.length - 2; i=i+3) {
						polyh.push([Number(datos[i]),Number(datos[i+1])]);
						dateh.push(datos[i+2]);
					}			
					if (cont == 0) {
						cont = cont + 1;
					}
					else {
						map.removeLayer(polylinehis);
						if (contr > 0) {
							map.removeLayer(animatedMarker);						
						}
					}
					polylinehis = L.polyline(polyh, {color: 'blue'}).addTo(map);
					map.fitBounds(polylinehis.getBounds());
				}
			});	
		}
		else {
			if (document.getElementById("radiovalue").value == "") {
				alert("Ingrese valor radio.");
			}
			else {
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
						alert("No hay datos para estas fechas y area.");
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
						map.fitBounds(polygon.getBounds());
					}
				});					
			}			
		}
	}
}
