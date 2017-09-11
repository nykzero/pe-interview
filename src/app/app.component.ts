import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
    testResponse: any;
    constructor(private Http: HttpService) {
     
    }
    ngOnInit() {
        getEventsWithObservable(): Observable<Event[]> {
            return this.http.get(this.url)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
        }
    }
       
}


