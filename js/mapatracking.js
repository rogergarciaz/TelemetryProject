var mymap = L.map('mapid').setView([lat1, lng1], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {attribution: 'Diseño Electrónico - Uninorte 2018',maxZoom: 18, id:'mapbox.run-bike-hike'}).addTo(mymap);
var camion = L.icon({
  iconUrl:'images/camion.png',
  iconSize:[45, 45], 
  iconAnchor:[23, 25], 
  popupAnchor:[0, -30] 
});
var marker = L.marker([lat1, lng1],{icon: camion}).addTo(mymap).bindPopup("Carro 1"); 
var latlngs = [[lat1, lng1]];
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(mymap);

var marker2 = L.marker([lat2, lng2],{icon: camion}).addTo(mymap).bindPopup("Carro 2"); 
var latlngs2 = [[lat2, lng2]];
var polyline2 = L.polyline(latlngs2, {color: 'red'}).addTo(mymap);

$(document).ready(function(){
    setInterval(
      	function(){
        	peticion(marker, mymap); 
          peticion2(marker2);
     },5000);
});
function peticion(marker, mymap){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ubicacion = this.responseText.split(" ");
      if (marker != null){
        marker.setLatLng({lat:ubicacion[0],lng:ubicacion[1]})
        mymap.setView({lat:ubicacion[0],lng:ubicacion[1]})
		    latlngs.push([ubicacion[0],ubicacion[1]]);
		    var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(mymap);
      }              
  	}
	};
  xmlhttp.open("GET", "get.php", true);
  xmlhttp.send();
}   

function peticion2(marker2){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var ubicacion = this.responseText.split(" ");
      if (marker2 != null){
        marker2.setLatLng({lat:ubicacion[0],lng:ubicacion[1]})
        latlngs2.push([ubicacion[0],ubicacion[1]]);
        var polyline2 = L.polyline(latlngs2, {color: 'red'}).addTo(mymap);
      }              
    }
  };
  xmlhttp.open("GET", "get2.php", true);
  xmlhttp.send();
}   