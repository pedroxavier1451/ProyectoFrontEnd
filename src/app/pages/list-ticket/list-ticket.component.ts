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
  displayedColumns: string[] = ['horaIngreso', 'placa', 'lugar', 'marcar'];
  fecha:string="";
  fecha2: string="";

  constructor(private ticketService:TicketService,
    private router: Router){
      this.ticket.horaIngreso=this.setCurrentDateTime();
      this.listadoTicketsWS=this.ticketService.getAll();
      
      this.fecha2 = this.ticket.horaIngreso.toISOString().slice(0, 16);
  }

  ngOnInit():void{
    this.listadoTicketsWS=this.ticketService.getAll();
    
  }


  public generarFactura(){
    this.router.navigate(['paginas/factura'])
  }

  setCurrentDateTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    now.setMinutes(now.getMinutes() - offset);
    this.fecha = now.toISOString().slice(0, 16); // Formato YYYY-MM-DDTHH:mm
    return this.ticket.horaIngreso=now;
  }

  public marcar(){
    alert(this.fecha);
    
  }
}
