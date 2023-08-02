import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-factura',
  templateUrl: './list-factura.component.html',
  styleUrls: ['./list-factura.component.scss']
})
export class ListFacturaComponent {
  listadoFacturasWS: any;
  displayedColumns: string[] = ['fecha', 'total', 'ticket', 'correo', 'generar', 'eliminar'];


}
