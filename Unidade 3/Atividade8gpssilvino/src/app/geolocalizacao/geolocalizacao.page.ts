import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
})
export class GeolocalizacaoPage implements OnInit {
  map: any;  
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

      }).catch((error) => {
        const pos =  new google.maps.LatLng(-26.908889,-49.072222);
        const mapop = {
          zoom: 18,
          center: pos,
          setMyLocationButtonEnabled: true,
          disableDefaultUI: false
        }
    
        this.map = new google.maps.Map(document.getElementById('map'), mapop);
    
        const marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          animation: google.maps.Animation.DROP
        });
        console.log('Erro posição padrão setada! ', error);
      });
  }
}
