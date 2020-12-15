import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Place } from '../models/place.model';
import { MapsService } from '../services/maps.service';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-save-place',
  templateUrl: './save-place.component.html',
  styleUrls: ['./save-place.component.scss']
})
export class SavePlaceComponent implements OnInit {

  savePlaceForm: FormGroup;
  Places: Place;
  lstPlaces: Place[]


  constructor(private formBuilder: FormBuilder, private placesService: PlacesService, private mapsService: MapsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.refreshPlaces();
  }

  refreshPlaces() {
    this.placesService.getAllPlaces()
    .subscribe(
      data => {
        this.lstPlaces = data;
        console.log(data);

      }
    );
  }

  initForm() {
    this.savePlaceForm = this.formBuilder.group({
      name: ['', Validators.required],
      localisation: '',
      comment: ''
    });
  }

  onSavePlace() {
    const name = this.savePlaceForm.get('name').value;
    const localisation = this.mapsService.getPositionData();
    const comment = this.savePlaceForm.get('comment').value;

    const newPlace = new Place(name, localisation);
    newPlace.comment = comment;
    console.log('newPlace: ', newPlace);
    this.placesService.postPosition(newPlace);
    this.placesService.getAllPlaces();

    // const newContact2 = new Contact('amine', 'i.merzoug16@gmailcom');


    // this.sendContact(newContact);
  }

  delatePlace(id) {
    this.placesService.delatePlaceById(id);
  }

}
