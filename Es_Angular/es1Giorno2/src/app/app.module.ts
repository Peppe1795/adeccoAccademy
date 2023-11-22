import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SommaComponent } from './somma/somma.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [AppComponent, SommaComponent, LinkComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
