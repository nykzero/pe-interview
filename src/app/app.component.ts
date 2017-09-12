import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Marker } from './marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
       
    private title: string = 'Prominent Edge Interview - Nick Clifton';
    private lat: number = 37.541885;
    private lng: number = -77.440624;
    private dataUrls = ['assets/F01705150050.json','assets/F01705150090.json'];
    private dataUrl = 'assets/F01705150050.json';
    markers: Marker[];
    results: string[];
    constructor(private http: HttpClient) {}
    
    ngOnInit(): void {
        for(let dataUrl of this.dataUrls){
            this.http.get(dataUrl).subscribe(data => {
                var marker = new Marker();
                marker.common_place_name=data["address"]["common_place_name"];
                marker.address_line1=data["address"]["address_line1"];
                marker.latitude=data["address"]["latitude"];
                marker.longitude=data["address"]["longitude"];
                marker.response_zone=data["address"]["longitude"];
                marker.comments=data["description"]["comments"];
                marker.event_opened=new Date(data["description"]["event_opened"]);
                marker.event_closed=new Date(data["description"]["event_closed"]);
                marker.getWeatherData();
                marker.getParcelData();
            });
        }
    }
}

