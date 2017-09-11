import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
    height = '100px';
    myLatLng = {lat: -25.363, lng: 131.044};
    map:any;
    
  constructor(private googleApi:GoogleApiService) { }

  ngOnInit() {
      this.googleApi.initMap().then(() => {

          let latlng = new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng);

          this.map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 4
          });

          new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: 'Hello World!'
          });
        });
  }

}
