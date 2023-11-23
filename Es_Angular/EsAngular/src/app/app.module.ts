import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaEventiComponent } from './components/lista-eventi/lista-eventi.component';
import { DettagliEventiComponent } from './components/dettagli-eventi/dettagli-eventi.component';

const routes: Routes = [
  { path: 'eventi', component: ListaEventiComponent },
  { path: 'dettaglio/:id', component: DettagliEventiComponent },
  { path: '', redirectTo: '/eventi', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ListaEventiComponent, DettagliEventiComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
