import { Component, OnInit } from '@angular/core';
import { environment } from "../.././environments/environment.prod";
import * as mapboxgl from "mapbox-gl";
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  marker = new mapboxgl.Marker({ draggable: true });

  constructor( private mapsService: MapsService ) { }

  ngOnInit() {
    this.mapsService.initMap(34.5, 40);
    this.mapsService.createMarker(this.marker, 34.5, 40);
  }

}
