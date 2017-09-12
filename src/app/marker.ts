export class Marker {
    public common_place_name: string;
    public latitude:number;
    public longitude:number; 
    public address_line1: string;
    public response_zone: string;
    public parcelData: string;
    public weatherData: string;
    public comments: string;
    public event_opened:Date;
    public event_closed:Date;
    public getParcelData(): void
    {
        this.http.get('http://gis.richmondgov.com/ArcGIS/rest/services/WebMercator/Parcels/MapServer/2/query?&geometry='+this.latitude+','+this.longitude+'&geometryType=esriGeometryPoint&f=pjson').subscribe(data => {
            this.parcelData = data;
        }
    };
    public getWeatherData(): void
    {
        var key='5787a43fa8d4423a886203850170909';
        var q = 'city';
        var date = this.event_opened.getFullYear()+"-"+this.event_opened.getMonth()+"-"this.event_opened.getDay();
        'q':city, 'key': key,'date':date
        this.http.get('http://api.apixu.com/v1/current.json?q='+q+'&key='+key+'&date='+date).subscribe(data => {
            this.weatherData = data;
        }
    };
}