import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { LugarService } from 'src/app/services/lugar.service';
import { Lugar } from 'src/app/domain/lugar';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent {
  listadoTicketsWS: any;
  ticket: Ticket =new Ticket();
  lugar:Lugar = new Lugar();
  displayedColumns: string[] = ['horaIngreso', 'placa', 'lugar', 'marcar'];
  fecha:string="";
  fecha2: string="";
  

  constructor(private ticketService:TicketService,
    private lugarService:LugarService,
    private router: Router){
      // this.ticket.horaIngreso=this.setCurrentDateTime();
      this.listadoTicketsWS=this.ticketService.getAll();
      
      //this.fecha2 = this.ticket.horaIngreso.toISOString().slice(0, 16);
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
    return now;
  }

  // public marcar(t: Ticket){
  //   alert("este es el ticket de salida "+t)
  //   this.ticket.lugar.estado=true
  //   this.ticket.horaSalida=this.setCurrentDateTime()
  //   this.ticketService.update(this.ticket)
  //   console.log("este es el ticket de salida "+this.ticket)
  //   this.router.navigate(['paginas/genTicket'])
  // }

  public marcar(ticket: Ticket) {
    alert("Vehiculo: "+ticket.vehiculo.placa+" Esta Salido")
    ticket.horaSalida = this.setCurrentDateTime();
    this.ticketService.update(ticket).subscribe(() => {
      console.log("Ticket actualizado:", ticket);
      this.router.navigate(['paginas/factura'])
    });
    this.lugar=ticket.lugar;
    this.lugar.estado=true;
    this.lugarService.update(this.lugar).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    }); 
  }
  
}
