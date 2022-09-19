let map;

var locations = [
    ['Condomínio Beach Town', -22.962104952390177, -42.022286440027145, 5],
    ['Pousada Princesa', -22.962272224452622, -42.02273066408372, 4],
    ['Arraial CasaMar', -22.96276345386124, -42.022118050326306, 3],
    ['Pousada Thetis', -22.959576463737264, -42.02557972609277, 2],
    ['Pousada da Prainha', -22.96185286476121, -42.024892542523496, 1]
];

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-22.962340481279725, -42.023498775247184),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

    }

    //  const marker = new google.maps.Marker({
    //      position: uluru,
    //      map: map,
    //  });
}

window.initMap = initMap;

initMap();