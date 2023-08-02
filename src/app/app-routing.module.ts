import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegClienteComponent } from './pages/reg-cliente/reg-cliente.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { ListTicketComponent } from './pages/list-ticket/list-ticket.component';
import { ListFacturaComponent } from './pages/list-factura/list-factura.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GenTicketComponent } from './pages/gen-ticket/gen-ticket.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { PagessoporteComponent } from './pages/pagessoporte/pagessoporte.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/Inicio', pathMatch: 'full' },
  {path: 'paginas/Inicio',component:InicioComponent},
  {path: 'paginas/regCliente', component: RegClienteComponent},
  {path: 'paginas/listCliente', component: ListClienteComponent},
  {path: 'paginas/listTicket', component: ListTicketComponent},
  {path: 'paginas/listFactura', component: ListFacturaComponent},
  {path: 'paginas/contacto', component: ContactoComponent},
  {path: 'paginas/genTicket', component: GenTicketComponent},
  {path: 'paginas/factura', component: FacturaComponent},
  {path: 'paginas/Soporte',component:PagessoporteComponent},
  {path: 'paginas/Contactenos',component:ContactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
