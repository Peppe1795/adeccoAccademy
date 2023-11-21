import { Component, OnInit } from '@angular/core';
import { Iindirizzo } from '../iindirizzo';

@Component({
  selector: 'app-citta',
  templateUrl: './citta.component.html',
  styleUrls: ['./citta.component.sass'],
})
export class CittaComponent implements OnInit {
  indirizzo: Iindirizzo;

  constructor() {
    this.indirizzo = {
      name: 'Napoli',
      prefix: 'NA',
      regione: 'Campania',
      provincia: 'NA',
    };
  }

  ngOnInit(): void {}
}
