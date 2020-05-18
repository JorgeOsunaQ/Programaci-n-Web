import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {GeolocalizacionService} from '../app/geolocalizacion.service'
import { mergeMap, map } from 'rxjs/operators';
import { Observable, observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoClimaService {
  
  constructor( private _http:HttpClient, private ipStack:GeolocalizacionService) {
   }
  
  getClima(){     

    return this.ipStack.getIP().pipe(
      mergeMap(result=>{
        const observeIP=this.ipStack.getIPInfo(result['ip'])
        return observeIP.pipe(
          mergeMap(infoIP=>{
            const infoGeo=
            {
              latitud:infoIP['latitude'],
              longitud: infoIP['longitude'],
            }
            return forkJoin(this._http.get(`http://www.7timer.info/bin/api.pl?lon=${infoGeo.longitud}
            &lat=${infoGeo.latitud}&product=civillight&output=json`),observeIP)
          })
        )
      })
    )
  }
}
