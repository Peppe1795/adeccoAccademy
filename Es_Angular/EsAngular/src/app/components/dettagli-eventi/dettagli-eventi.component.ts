import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/models/ievento';
import { EventiService } from 'src/app/service/eventi-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli-eventi',
  templateUrl: './dettagli-eventi.component.html',
  styleUrls: ['./dettagli-eventi.component.sass'],
})
export class DettagliEventiComponent implements OnInit {
  evento: IEvento | null = null;

  constructor(
    private eventoService: EventiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const eventId = Number(params.get('id'));

      if (!isNaN(eventId)) {
        this.eventoService
          .getDettaglioEvento(eventId)
          .subscribe((response: { statusCode: number; data: IEvento }) => {
            if (response.statusCode === 200) {
              this.evento = response.data;
              console.log('Evento:', this.evento);
            } else {
              console.error('Errore nella richiesta:', response.statusCode);
            }
          });
      } else {
        console.log('Errore nella Fetch');
      }
    });
  }
}
