var map = L.map('mapid', {
    minZoom: 17,
    maxZoom: 17
}).setView([44.52104, 11.33579], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

/*L.marker([44.52034, 11.3357]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();*/


var coord = [[44.52312, 11.33436], [44.52124, 11.33377], [44.52104, 11.33498], [44.5196, 11.3344],
             [44.51949, 11.3353], [44.52127, 11.33817], [44.52295, 11.33677]];

var style = {color: 'red', weight: 2, fillColor: 'transparent'}

var polygon = L.polygon(coord, style).addTo(map)

// Zoom sul poligono
map.fitBounds(polygon.getBounds());


