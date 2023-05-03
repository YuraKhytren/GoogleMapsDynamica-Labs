let map;
let markers = [];
const relatedBuildingIconImage = "http://maps.google.com/mapfiles/ms/icons/blue.png";
let buildings = [
  {position: { lat: 37.769, lng: -122.416 } , type: "1", image:relatedBuildingIconImage},
  {position: { lat: 37.769, lng: -122.426 } , type: "1", image: relatedBuildingIconImage},
  {position: { lat: 37.789, lng: -122.426 } , type: "1", image: null},
  {position: { lat: 37.769, lng: -122.436 } , type: "2", image:relatedBuildingIconImage},
  {position: { lat: 37.789, lng: -122.436 } , type: "2", image:relatedBuildingIconImage},
  {position: { lat: 37.769, lng: -122.446 } , type: "2", image:null},
  {position: { lat: 37.769, lng: -122.456 } , type: "3", image:relatedBuildingIconImage},
  {position: { lat: 37.789, lng: -122.456 } , type: "3", image:relatedBuildingIconImage},
  {position: { lat: 37.769, lng: -122.466 } , type: "3", image:null},
  {position: { lat: 37.769, lng: -122.476 } , type: "4", image:relatedBuildingIconImage},
  {position: { lat: 37.789, lng: -122.476 } , type: "4", image:relatedBuildingIconImage},
  {position: { lat: 37.769, lng: -122.486 } , type: "4", image:null},
  {position: { lat: 37.769, lng: -122.496 } , type: "5", image:null},
  {position: { lat: 37.789, lng: -122.496 } , type: "5", image:relatedBuildingIconImage},
  {position: { lat: 37.795, lng: -122.496 } , type: "5", image:relatedBuildingIconImage}
];

function initMap() {
  const haightAshbury = { lat: 37.769, lng: -122.446 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: haightAshbury,
    mapTypeId: "terrain",
  });
  document
    .getElementById("filter")
    .addEventListener("change", (e) => {
      setMapOnAll(map ,e.target.value);
    });
  addMarker(buildings);
}

// Adds a marker to the map and push to the array.
function addMarker(buildings) {
  for (let i = 0; i < buildings.length; i++) {
    const marker = new google.maps.Marker({
      position : buildings[i].position,
      map: map,
      label: buildings[i].type,
      icon : buildings[i].image  
    });
    markers.push(marker);
  }
}

function setMapOnAll(map, buildType) {
  if(buildType == "0")
  {
    for (let i = 0; i < markers.length; i++) 
      {
        markers[i].setMap(map);
      }
  }
  else
  {
    for (let i = 0; i < markers.length; i++) 
      {
        if(markers[i].label === buildType)
          markers[i].setMap(map);
        else
            markers[i].setMap(null);
      }  
 }
}
window.initMap = initMap;