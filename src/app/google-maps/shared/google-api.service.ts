const API_KEY = 'AIzaSyCAhr8F9u8ihlShdn9Hz03Jlqj9Ly2kkLs';
const url = 'https://maps.googleapis.com/maps/api/js?key='+ API_KEY +'&callback=initMap';

@Injectable()
export class GoogleApiService {
  private loadMap: Promise<any>;

  constructor(private http:Http) {
    this.loadMap = new Promise((resolve) => {
      window['initMap'] = () => {
        resolve();
      };
      this.loadScript()
    });
  }

  public initMap():Promise<any> {
    return this.loadMap;
  }

  private loadScript() {
    let script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';

    if (document.body.contains(script)) {
      return;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}