import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/models/ievento';
import { EventiService } from 'src/app/service/eventi-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-eventi',
  templateUrl: './lista-eventi.component.html',
  styleUrls: ['./lista-eventi.component.sass'],
})
export class ListaEventiComponent implements OnInit {
  eventi: IEvento[] = [];

  constructor(private eventoService: EventiService, private router: Router) {}

  ngOnInit() {
    this.eventoService.getEventiAttivi().subscribe(
      (response) => {
        console.log(response.data);
        this.eventi = response.data || [];
      },
      (error) => {
        console.error('Error fetching events:', error);
      },
      () => {
        console.log('Event fetching completed');
      }
    );
  }
  mostraDettagli(eventoId: number) {
    this.router.navigate(['dettaglio', eventoId]);
  }
}
