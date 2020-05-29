import { Component, OnInit } from '@angular/core';
import {GeolocalizacionService } from '../geolocalizacion.service'
import {HttpClient} from '@angular/common/http'
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-info-ip',
  templateUrl: './info-ip.component.html',
  styleUrls: ['./info-ip.component.css']
})
export class InfoIpComponent implements OnInit {

  ciudad='';
  pais='';
  hora=null;
  loaded=false;
  constructor(private _http: HttpClient, private ipStack:GeolocalizacionService) { }


  ngOnInit() {
    this.cargarDatosIP()
  }

  cargarDatosIP(){
    this.ipStack.getIP().pipe(
      mergeMap(ip=>{
        return this.ipStack.getIPInfo(ip['ip'])
      })
    ).subscribe(
        data=>{
          this.ciudad=data['city'];
          this.pais=data['country_name']
          let fechaActual=new Date();
          this.hora=`${fechaActual.getHours()}:${fechaActual.getMinutes()}`
          this.loaded=true;
        }
      )
  }
}
