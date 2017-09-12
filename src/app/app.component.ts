import { Component, OnInit } from '@angular/core';
import { Http }       from '@angular/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    
    private title: string = 'My first AGM project';
    private lat: number = 51.678418;
    private lng: number = 7.809007;
    private dataUrls = ['F01705150050.json','F01705150090.json'];
    private dataUrl = 'F01705150050.json';
    geoEvent: any;
    results: string[];
    constructor(private http: Http) {}
    ngOnInit(): void {
        // Make the HTTP request:
        this.http.get(this.dataUrl).subscribe(data => {
          // Read the result field from the JSON response.
          this.results = data['results'];
        });
      }
    /*constructor(private _httpService: HttpService) {
        this._httpService.getJSON(this.dataUrl)
        .subscribe(
        (res) => {
            this.geoEvent = res;
        },
        (error) => console.log("error : " + error),
        () => console.log('Error in GetApplication in Login : ' + Error)
    );
    }*/
}


