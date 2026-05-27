var map = L.map('map').setView([45.89409637451172, 3.1103131771087646], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.89409637451172, 3.1103131771087646]).addTo(map);