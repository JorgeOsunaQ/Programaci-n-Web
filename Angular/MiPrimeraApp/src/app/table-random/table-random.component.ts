import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-random',
  templateUrl: './table-random.component.html',
  styleUrls: ['./table-random.component.css']
})
export class TableRandomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getArray() {
    let array = []
    for (let i = 0; i < 10; i++) {
      let temp = [...Array(5)].map(() => { return Math.floor(Math.random() * 100 + 1); })
      array.push(temp);
    }
    return array;
  }
  array = this.getArray();
}
