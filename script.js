    // CARTE OPENSTREETMAP
        // Remplacez les coordonnées par celles de la station de métro
        const map = L.map('osm-map').setView([48.870875, 2.325324], 15); // Exemple : Paris centre

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Marqueur
        L.marker([48.870875, 2.325324]).addTo(map)
            .bindPopup('Joseph Coiffeur<br>Métro Madeleine')
            .openPopup();
