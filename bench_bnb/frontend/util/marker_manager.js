class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const newMarker= {
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: `${bench.description}`
    };

    this.markers[`${bench.id}`] = newMarker;
    let marker = new google.maps.Marker(newMarker);
    // marker.setMap(this.map);
  }

  updateMarkers(benches) {
    benches.forEach((bench) => {
      if (!this.markers[`${bench.id}`]) {
        console.log("creating marker");
        this.createMarkerFromBench(bench);
      }
    });
  }
}

export default MarkerManager;
