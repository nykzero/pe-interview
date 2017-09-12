import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }
    
    public getJSON = (url:string): Observable<Response> => {
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get(url).map(res => res.json());
    }
}
