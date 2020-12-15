import { Injectable } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { environment } from "../.././environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class MapsService {
  map: mapboxgl.Map;
  positionData: any;


  initMap(lng: number, lat: number){
    (mapboxgl as any).accessToken = environment.mapboxkey;

    this.map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lng], // starting position
    zoom: 2 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  createMarker(marker: any, lng: number, lat: number) {
    this.positionData = {lng: lng, lat: lng};
    marker.setLngLat([lng, lat])
          .addTo(this.map)
          .on('drag', () => {

      this.positionData = marker.getLngLat();
      console.log( marker.getLngLat() );

    });

    return this.positionData;
  }

  getPositionData(){
    return this.positionData;
  }

}
