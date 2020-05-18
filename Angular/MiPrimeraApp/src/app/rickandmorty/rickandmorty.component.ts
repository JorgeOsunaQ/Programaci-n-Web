import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../rickandmorty.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import {InfoLocationComponent} from '../info-location/info-location.component'
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  constructor(private rickandmortyAPI:RickandmortyService, private modalService: NgbModal, private popOverConfig:NgbPopoverConfig) { }

  info;
  ngOnInit() {
    this.obtenerDatos()
  }

  obtenerDatos(){
    this.rickandmortyAPI.obtenerMultiplesPersonajes(5).subscribe(datos =>{
      this.info=datos
    },
    error=>{
      alert(error)
    })
  }

  cambiarImagenes(cantidad){
    this.rickandmortyAPI.obtenerMultiplesPersonajes(parseInt(cantidad)).subscribe(datos =>{
      if(!(typeof datos[Symbol.iterator] === 'function'))
        this.info=[...[datos]];
      else
        this.info=datos;

    },
    error=>{
      alert(error)
    })
  }

  open(urlLocation){
    const componentRef = this.modalService.open(InfoLocationComponent);
    componentRef.componentInstance.urlLocation = urlLocation;
  }

  obtenerDatosPersonaje(personaje){
    return [{"nameProperty":"Id","data":personaje.id},{"nameProperty":"Ubicación","data":personaje.location.name},
    {"nameProperty":"Status","data":personaje.status},{"nameProperty":"Specie","data":personaje.species},
    {"nameProperty":"Type","data":personaje.type},{"nameProperty":"Origin","data":personaje.origin.name},
    {"nameProperty":"Gender","data":personaje.gender},{"nameProperty":"Fecha de creación","data":personaje.created}]
  }

}
