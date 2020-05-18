import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  baseUrl='https://rickandmortyapi.com/api/';
  constructor(private http:HttpClient, private random: RandomService) { }

  obtenerMultiplesPersonajes(numPersonajes){
    const ids=this.random.generarNumerosAleatorios(numPersonajes)
    return this.http.get(this.baseUrl + 'character/' + ids.toString())
  }
}
