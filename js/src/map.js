document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const GEOSEARCH = new GeoSearch.OpenStreetMapProvider({params: {countrycodes: 'fr'}});


    //affichage de la carte

    var map = L.map('map').setView([48.866667, 2.333333], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    //affichage des markers.

    var tabPinpoints = pinpointsStr.split('|');

    tabPinpoints.forEach(pinpoint => {
        GEOSEARCH.search({query: pinpoint, countrycodes: ['FR'], limit: 1}).then((response) => {
            var marker = L.marker([response[0].y, response[0].x]).addTo(map);
            marker.bindPopup(pinpoint);
        });
    });


    //Recherche du code postal

    const rechercheCP = document.getElementById('cp');
    const envoiRecherche = document.getElementById('rechercher');

    envoiRecherche.addEventListener('click', function(){
        let adresse = rechercheCP.value;

        GEOSEARCH.search({query: adresse}).then((response) => {
            map.setView([response[0].y, response[0].x],10);
        });
    });

    var chercheMagasin = document.getElementById('chercheMagasin');
    var retourSite = document.getElementById('fermerRecherche');
    var afficheMap = document.getElementById('afficheMap');

    chercheMagasin.addEventListener('click', function(){
        afficheMap.style.display = 'block';
        map.invalidateSize();
        retourSite.addEventListener('click', function(){
            afficheMap.style.display = 'none';
        })
    })

});