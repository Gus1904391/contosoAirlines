import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BuscaComponent } from './busca/busca.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';

const router:Routes =[
{
  path:'micuenta',
  component:MicuentaComponent
},
{
  path:'busca',
  component:BuscaComponent
},
{
  path:'confirmacion',
  component:ConfirmacionComponent
}
,
{
  path:'inicio',
  component:InicioComponent
}
,
{
  path:'carrito',
  component:CarritoComponent
}
];



@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    ConfirmacionComponent,
    MicuentaComponent,
    InicioComponent,
    CarritoComponent
  ],
  imports: [
    RouterModule.forRoot(router, {useHash: true}),
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
