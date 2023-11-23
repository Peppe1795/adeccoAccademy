import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvento } from '../models/ievento';

@Injectable({
  providedIn: 'root',
})
export class EventiService {
  private baseUrl = 'https://www.yumegears.com/services/public/evento';

  constructor(private http: HttpClient) {}

  getEventiAttivi(): Observable<{ statusCode: number; data: IEvento[] }> {
    const url = `${this.baseUrl}/active`;
    return this.http.get<{ statusCode: number; data: IEvento[] }>(url);
  }

  getDettaglioEvento(
    id: number
  ): Observable<{ statusCode: number; data: IEvento }> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<{ statusCode: number; data: IEvento }>(url);
  }
}
