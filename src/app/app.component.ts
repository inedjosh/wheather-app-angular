import { Component,Pipe } from '@angular/core';
import { WheatherService } from './wheather.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var google: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Pipe({ name: 'safe' })
export class AppComponent {
  constructor(private whthrService: WheatherService) {
   }
  wheatherDetails:any
  lat = 10.7867
  lng = 76.65
  title = 'wheather-app';
  options: any;
  overlays: any = []
  map = google.maps.Map;
  keralaDistricts = [
    {
      name: 'Abuja',
      lat: '9.0765',
      lng: '7.3986'
    },
    {
      name: 'Makurdi',
      lat: '7.7322',
      lng: '8.5391'
    },
    {
      name: 'Benin',
      lat: '6.3350',
      lng: '5.6037'
    },
    {
      name: 'Lagos',
      lat: '6.5244',
      lng: '3.3792'
    },
    {
      name: 'Kaduna',
      lat: '10.5015',
      lng: '7.4408'
    },
    {
      name: 'Jos',
      lat: '9.8965',
      lng: '8.8583'
    },
    {
      name: 'Abia',
      lat: '5.4527',
      lng: '7.5248'
    },
    {
      name: 'Nassarawa',
      lat: '8.5475',
      lng: '7.7118'
    },
    {
      name: 'Lokoja',
      lat: '7.8023',
      lng: '6.7333'
    },
    {
      name: 'Minna',
      lat: '9.5836',
      lng: '6.5463'
    },
    {
      name: 'Zamfara',
      lat: '12.1222',
      lng: '6.2236'
    },

    {
      name: 'Cross river',
      lat: '5.8702',
      lng: '8.5988'
    },
    {
      name: 'Delta',
      lat: '5.7040',
      lng: '5.9339'
    },
    {
      name: 'Gombe',
      lat: '10.2791',
      lng: '11.1731'
    }
  ]
  singleDistrict:any
  setMap(event: any) {
    this.map = event.map;
    console.log({ eventaa: event.map })
  }
  ngOnInit() {
    this.singleDistrict={
      name: 'Ibadan',
      lat: '7.3775',
      lng: '3.9470'
    }
    this.options = {
      center: { lat: Number(this.lat), lng: Number(this.lng) },
      zoom: 16
    }
    this.getWheatherDetails(this.lat,this.lng)

  }

  getWheatherDetails(lat:any,lng:any){
    this.whthrService.getWheatherDAta(lat, lng).subscribe((res) => {
      this.wheatherDetails =res

      this.map.setCenter({
        lat: Number(lat),
        lng: Number(lng)
      });
    })
  }


  selectDistrict() {
    if(this.singleDistrict){
      this.lat = this.singleDistrict.lat
      this.lng = this.singleDistrict.lng
      if (this.singleDistrict) {
        this.getWheatherDetails(this.lat,this.lng)
      }

    }
  }


}

