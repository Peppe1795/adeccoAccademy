import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManipolatoreComponent } from './components/manipolatore/manipolatore.component';

@NgModule({
  declarations: [
    AppComponent,
    ManipolatoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
