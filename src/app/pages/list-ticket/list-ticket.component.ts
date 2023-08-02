import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent {

  constructor(private router: Router)
  {

  }

  public generarFactura(){
    this.router.navigate(['paginas/factura'])
  }
}
