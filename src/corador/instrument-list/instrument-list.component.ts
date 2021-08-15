import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'corador-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {

  instrument = {
    "name":"Crassio PIP-258",
    "type":"Teclado musical",
    "image":"assets/img/instruments/keyboard/crassio_KB_PIP-258.png",
    "price":"$65536 USD",
    "stock": 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
