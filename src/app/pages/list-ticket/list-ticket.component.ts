import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent {
  listadoTicketsWS: any;
  ticket: Ticket =new Ticket();

  constructor(private ticketService:TicketService,
    private router: Router){

      this.listadoTicketsWS=this.ticketService.getAll();
  }

  ngOnInit():void{
    this.listadoTicketsWS=this.ticketService.getAll();
  }


  public generarFactura(){
    this.router.navigate(['paginas/factura'])
  }
}
