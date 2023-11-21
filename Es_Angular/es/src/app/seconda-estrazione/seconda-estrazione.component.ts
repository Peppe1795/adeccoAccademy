import { Component, OnInit } from '@angular/core';
import { EstrazioneService } from '../estrazione.service';

@Component({
  selector: 'app-estrazione-seconda',
  template: `
    <div *ngIf="numeroEstratto !== undefined">
      <p>{{ testo }}</p>
    </div>
  `,
})
export class EstrazioneSecondaComponent implements OnInit {
  numeroEstratto: number | undefined;
  testo: string = '';

  constructor(private estrazioneService: EstrazioneService) {}

  ngOnInit() {
    this.estrazioneService.primaEstrazione.subscribe(() => {
      this.testo = 'Rullo di tamburi';
    });

    this.estrazioneService.dopoEstrazione.subscribe((numero: number) => {
      this.numeroEstratto = numero;
      this.aggiornaTesto();
    });
  }

  aggiornaTesto() {
    switch (this.numeroEstratto) {
      case 1:
        this.testo = 'Animale';
        break;
      case 2:
        this.testo = 'Vegetale';
        break;
      case 3:
        this.testo = 'Minerale';
        break;
      default:
        this.testo = '';
    }
  }
}
