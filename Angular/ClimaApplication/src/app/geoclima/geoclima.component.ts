import { Component, OnInit } from '@angular/core';
import {IpInformationService} from '../../app/ip-information.service'
import {HttpClient} from '@angular/common/http'
import {ClimaIpService} from '../../app/clima-ip.service'

@Component({
  selector: 'app-geoclima',
  templateUrl: './geoclima.component.html',
  styleUrls: ['./geoclima.component.css']
})
export class GeoclimaComponent implements OnInit {

  public nombreCiudad;
  public datosClima;
  public pais;
  public horaAct;
  public fecha;
  public loaded=false;

  constructor(private http:HttpClient,private ipInfo:IpInformationService,private climaIP:ClimaIpService) { }

  ngOnInit() {
    let fechaAct=new Date();
    this.horaAct=`${fechaAct.getHours()}:${fechaAct.getMinutes()}`;
    this.obtenerLocalizacion();
    this.cargarDatosClima();
  }

  cargarDatosClima(){
    this.climaIP.obtenerClimaGeo().subscribe(
      res=>{
        console.log(res)
        this.datosClima=res
        this.loaded=true;
        res['dataseries'].map(
          x=>{
            x['date']=this.obtenerFecha(x['date'])})
      })
  }

  obtenerLocalizacion(){
    this.ipInfo.obtenerIP().subscribe(
      res=>{
        this.nombreCiudad=res['city'];
        this.pais=res['country_name'];
      })
  }

  obtenerFecha(fechaData){
    fechaData=fechaData.toString();
    console.log(fechaData)
    var fecha=new Date(`${fechaData.substring(0,4)}-${fechaData.substring(4,6)}-${fechaData.substring(6,8)}T00:00`);
    let diasSemana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']

    return {"Dia":diasSemana[fecha.getDay()],"Fecha":fecha}
  }

  changeImg(clima){
    let sourceImg="";
    switch(clima){

      case 'clear':
        sourceImg='linkImagen';
      break
    }
    return sourceImg;
  }
}
