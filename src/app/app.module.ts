import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './template/cabecera/cabecera.component';
import { PieComponent } from './template/pie/pie.component';
import { MenuComponent } from './template/menu/menu.component';
import { RegClienteComponent } from './pages/reg-cliente/reg-cliente.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ListTicketComponent } from './pages/list-ticket/list-ticket.component';
import { ListFacturaComponent } from './pages/list-factura/list-factura.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GenTicketComponent } from './pages/gen-ticket/gen-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FacturaComponent } from './pages/factura/factura.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PagessoporteComponent } from './pages/pagessoporte/pagessoporte.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    RegClienteComponent,
    ListClienteComponent,
    ListTicketComponent,
    ListFacturaComponent,
    ContactoComponent,
    GenTicketComponent,
    FacturaComponent,
    PagessoporteComponent,
    ContactenosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
