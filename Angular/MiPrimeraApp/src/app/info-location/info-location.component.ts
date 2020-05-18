import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-location',
  templateUrl: './info-location.component.html',
  styleUrls: ['./info-location.component.css']
})
export class InfoLocationComponent implements OnInit {

  @Input() urlLocation;
  location;

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.http.get(this.urlLocation)
      .subscribe( loc => {
        this.location = loc;
      });
  }

}