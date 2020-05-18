import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  url='https://http.cat/200'
  constructor() { }

  ngOnInit() {
  }

  cambiarCodigo(codigo){
    this.url=`https://http.cat/${codigo}`;
  }
}
