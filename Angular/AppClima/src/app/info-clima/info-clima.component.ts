import { Component, OnInit } from '@angular/core';
import {InfoClimaService } from '../info-clima.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-info-clima',
  templateUrl: './info-clima.component.html',
  styleUrls: ['./info-clima.component.css'],
  providers: [InfoClimaService]
})

export class InfoClimaComponent implements OnInit {

  loaded=false;
  infoClima=null;
  todayInfo=null;

  constructor(
    private climaAPI:InfoClimaService,
    private _http: HttpClient) { }

  ngOnInit() {
    this.cargarDatosClima()
  }

  cargarDatosClima(){
    this.climaAPI.getClima().subscribe(result=>
      {
        this.infoClima=result[0]['dataseries'].map(x=>this.obtenerDatosDia(x));
        this.todayInfo=this.infoClima[0]
        this.loaded=true
      });
  }

  obtenerDatosDia(dataSerie){
    let fecha=dataSerie['date'].toString();
    let fechaFormatted= new Date(`${fecha.substring(0,4)}/${fecha.substring(4,6)}/${fecha.substring(6,8)}`)

    return {
        "FechaUF":fechaFormatted,
        "FechaF":`${fecha.substring(6,8)}/${fecha.substring(4,6)}/${fecha.substring(0,4)}`,
        "Max":dataSerie['temp2m']['max'],
        "Min":dataSerie['temp2m']['min'],
        "Clima":dataSerie['weather']
        }
  }

  obtenerDiaSemana(dia){
    let diaSemana='';
    switch(dia){
      case 0:
        diaSemana='Domingo';
      break

      case 1:
        diaSemana='Lunes'
      break 

      case 2:
        diaSemana='Martes'
      break 

      case 3:
        diaSemana='Miercoles'
      break 

      case 4:
        diaSemana='Jueves'
      break 

      case 5:
        diaSemana='Viernes'
      break 

      case 6:
        diaSemana='Sabádo'
      break 
    }
    return diaSemana
  }

  cambiarImagen(clima){
    let climaUrl='';

    switch(clima){
      case 'clear':
      climaUrl='../../assets/Images/Weather/clear_weather.svg';
      break

      case 'pcloudy':
      climaUrl='../../assets/Images/Weather/partly_cloudy.svg';
      break

      case 'cloudy':
      climaUrl='../../assets/Images/Weather/cloudy.svg';
      break

      case 'rain':
      climaUrl='../../assets/Images/Weather/rain.svg';
      break

      case 'snow':
      climaUrl='../../assets/Images/Weather/snow.svg';
      break

      case 'thunderstorm':
      climaUrl='../../assets/Images/Weather/thunderstorm.svg';
      break

      case 'lightrain':
      climaUrl='../../assets/Images/Weather/rain_thunder.svg';
      break
    }
    return climaUrl
  }
}
