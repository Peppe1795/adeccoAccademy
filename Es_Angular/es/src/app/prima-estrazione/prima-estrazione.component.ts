import { Component } from '@angular/core';
import { EstrazioneService } from '../estrazione.service';

@Component({
  selector: 'app-estrazione-prima',
  template: ` <button (click)="effettuaEstrazione()">Estrai Numero</button> `,
})
export class EstrazionePrimaComponent {
  constructor(private estrazioneService: EstrazioneService) {}

  effettuaEstrazione() {
    this.estrazioneService.effettuaEstrazione();
  }
}
