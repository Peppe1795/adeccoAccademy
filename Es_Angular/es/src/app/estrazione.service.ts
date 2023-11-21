import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstrazioneService {
  primaEstrazione = new EventEmitter<void>();
  dopoEstrazione = new EventEmitter<number>();

  constructor() {}

  effettuaEstrazione() {
    this.primaEstrazione.emit();
    const numeroEstratto = Math.floor(Math.random() * 3) + 1;
    this.dopoEstrazione.emit(numeroEstratto);
  }
}
