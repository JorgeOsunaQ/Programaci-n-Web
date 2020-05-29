import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpInformationService {
  
  aKey='f95ed04b6922fd52b78ce7f73dedbcae';
  ipURL='http://api.ipstack.com/check?access_key=';

  constructor(private http:HttpClient) { }

  obtenerIP(){
    return this.http.get(`${this.ipURL}${this.aKey}`)
  }

}
