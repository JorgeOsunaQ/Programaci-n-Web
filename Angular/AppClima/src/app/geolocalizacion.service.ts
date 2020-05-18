import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {
  ipURL='https://api.ipify.org?format=json'
  ipStackBase='http://api.ipstack.com/'

  constructor(private _http:HttpClient) { }
  getIP(){
    let observer= this._http.get(this.ipURL);
    return observer;
  }

  getIPInfo(ip){
    return this._http.get(`${this.ipStackBase}${ip}?access_key=f95ed04b6922fd52b78ce7f73dedbcae&format=1`)
  }
}
