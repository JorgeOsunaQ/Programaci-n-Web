import { Injectable } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }
  generarNumeroAleatorio(min=1,max=494){
    return Math.floor(Math.random()*(max - min) + min)
  }

  generarNumerosAleatorios(cantidad){
    const numeros=[...Array(cantidad)].map(()=>{
        return this.generarNumeroAleatorio()
    })
    return numeros;
  }
}
