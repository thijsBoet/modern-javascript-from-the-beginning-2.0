const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0])
	.addTo(map)
	.bindPopup('<strong>You are here</strong>')
	.openPopup();

navigator.geolocation.getCurrentPosition(position => {
	const { latitude, longitude } = position.coords;
	map.setView([latitude, longitude], 10);
	marker.setLatLng([latitude, longitude]);
});

// L.marker([51.5, -0.09])
// 	.addTo(map)
// 	.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
// 	.openPopup();
