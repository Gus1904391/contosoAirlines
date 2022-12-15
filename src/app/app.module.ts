import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
