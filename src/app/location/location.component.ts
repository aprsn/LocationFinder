import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  latitude: any;
  longitude: any;

  constructor() { }

  ngOnInit() {

  }

  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(response => {
        this.latitude = response.coords.latitude;
        this.longitude = response.coords.longitude;
        document.getElementById('mapButton').style.display = 'block';
      }, error => {
        console.log(error);
      });
    }
  }

  goToMap() {
    window.open('https://www.google.com/maps/search/?api=1&query=' + this.latitude + ',' + this.longitude + ' ', '_blank');
  }

}
