var map = L.map('mapahistorico').setView([lat1, lng1], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {attribution: 'Diseño Electrónico - Uninorte 2018',maxZoom: 18, id:'mapbox.run-bike-hike'}).addTo(map);
