import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'contactanos', component: ContactanosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
