import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CittaComponent } from './citta/citta.component';
import { Route, RouterModule } from '@angular/router';
import { EstrazionePrimaComponent } from './prima-estrazione/prima-estrazione.component';
import { EstrazioneSecondaComponent } from './seconda-estrazione/seconda-estrazione.component';

const routes: Route[] = [
  {
    path: '',
    component: CittaComponent,
  },
  {
    path: 'prima-estrazione',
    component: EstrazionePrimaComponent,
  },
  {
    path: 'seconda-estrazione',
    component: EstrazioneSecondaComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CittaComponent,
    EstrazionePrimaComponent,
    EstrazioneSecondaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
