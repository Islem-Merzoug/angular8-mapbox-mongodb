import { Injectable } from '@angular/core';
import { MapsService } from '../services/maps.service';
import { Place } from '../models/place.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  baseurl: string = "http://localhost:3000/";

  place: Place;
  totalAngularPackages: any;
  jsonContacts;

  constructor( private mapsService: MapsService, private httpclient: HttpClient ) { }

  postPosition(data: any) {
      return this.httpclient.post(this.baseurl + 'createPosition', data, {responseType: 'text'})
      .subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  getAllPlaces(){
    return this.httpclient.get<Place[]>(this.baseurl + 'places');
  }

  delatePlaceById(id: string){
    console.log("delate:", id);
    // return this.httpclient.get<any>(this.baseurl + 'delatePlace' + '/' + id);
    this.httpclient.get<any>(this.baseurl + 'delatePlace' + '/' + id).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

  }
}
