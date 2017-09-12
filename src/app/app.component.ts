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
                var marker = new Marker(
                    data["address"]["common_place_name"],
                    data["address"]["latitude"],
                    data["address"]["longitude"],
                    data["address"]["address_line1"],
                    data["address"]["response_zone"],
                    data["description"]["comments"],
                    new Date(data["description"]["event_opened"]),
                    new Date(data["description"]["event_closed"])
                );
                this.getWeatherData(marker);
                this.getParcelData(marker);
            });
        }
    }
    getParcelData(marker): void
    {
        this.http.get('http://gis.richmondgov.com/ArcGIS/rest/services/WebMercator/Parcels/MapServer/2/query?&geometry='+marker.latitude+','+marker.longitude+'&geometryType=esriGeometryPoint&f=pjson').subscribe(data => {
            marker.parcelData = data;
        });
    };
    getWeatherData(marker): void
    {
        var date = marker.event_opened.getFullYear()+"-"+marker.event_opened.getMonth()+"-"marker.event_opened.getDay();
        this.http.get("http://api.apixu.com/v1/current.json?q=Richmond&key=5787a43fa8d4423a886203850170909&date="+date).subscribe(data => {
            marker.weatherData = data;
        });
    };
}

