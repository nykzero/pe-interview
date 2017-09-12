import { HttpClient } from '@angular/common/http';

export class Marker {
    constructor( 
        public common_place_name: string,
        public latitude:number,
        public longitude:number, 
        public address_line1: string,
        public response_zone: string,
        public comments: string,
        public event_opened:Date,
        public event_closed:Date,
        public parcelData: string,
        public weatherData: string
    ) {}
}