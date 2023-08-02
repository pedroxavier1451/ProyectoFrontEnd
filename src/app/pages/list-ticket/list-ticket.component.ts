import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { LugarService } from 'src/app/services/lugar.service';
import { Lugar } from 'src/app/domain/lugar';
import { Factura } from 'src/app/domain/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent {
  listadoTicketsWS: any;
  ticket: Ticket =new Ticket();
  lugar:Lugar = new Lugar();
  factura:Factura = new Factura();
  displayedColumns: string[] = ['horaIngreso', 'placa', 'lugar', 'marcar'];
  fecha:string="";
  precio: number = 0;
  

  constructor(private ticketService:TicketService,
    private lugarService:LugarService,
    private facturaService:FacturaService,
    private router: Router){
      
      this.listadoTicketsWS=this.ticketService.getAll();
      
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.factura = new Factura()
        this.factura = params['factura']
      }
      
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

  public marcar(ticket: Ticket) {
    
    alert("Vehiculo: "+ticket.vehiculo.placa+" Salió")
    this.lugar=ticket.lugar;
    this.lugar.estado=true;
    this.lugarService.update(this.lugar).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    }); 
    ticket.horaSalida = this.setCurrentDateTime();
    this.ticketService.update(ticket).subscribe(() => {
      console.log("Ticket actualizado:", ticket);
    });
    
    
    const fechaInicioInput = JSON.stringify(ticket.horaIngreso);
    const fechaFinInput = JSON.stringify(ticket.horaSalida);

    const fechaInicio = new Date(fechaInicioInput.slice(1, 20));
    const fechaFin = new Date(fechaFinInput.slice(1, 20));

    console.log("fecha inicio "+ fechaInicioInput.slice(1, 20))
    console.log("fecha fin "+ fechaFinInput.slice(1, 20))

    if (!isNaN(fechaInicio.getTime()) && !isNaN(fechaFin.getTime())) {
      // Calculamos el tiempo transcurrido
      const tiempoTranscurrido = this.calcularTiempoTranscurrido(fechaInicio, fechaFin);

      this.precio = (tiempoTranscurrido.dias * 28.8) + (tiempoTranscurrido.horas * 1.2) + (tiempoTranscurrido.minutos * 0.02)

      console.log(`Han pasado ${tiempoTranscurrido.dias} días y ${tiempoTranscurrido.horas} horas y ${tiempoTranscurrido.minutos} minutos entre las fechas.`);
      console.log("Y su precio es de " + this.precio)
      
      ticket.precio = this.precio;
      this.ticketService.update(ticket).subscribe(() => {
      console.log("Ticket actualizado:", ticket);
      
    });

    }else {
      console.log('Ingresa fechas válidas en ambos campos.');
    }
    
    this.factura.fecha = ticket.horaSalida
    this.factura.total = ticket.precio 
    this.factura.ticket=this.ticket
    this.facturaService.save(this.factura).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.router.navigate(['paginas/listFactura'])
    });
    this.factura=new Factura()
    
  }

  public calcularTiempoTranscurrido(fechaInicial: Date, fechaFinal: Date): { dias: number, horas: number, minutos: number } {
    const milisegundosPorMinuto = 60 * 1000; // Cantidad de milisegundos en un minuto
    const milisegundosPorHora = 60 * milisegundosPorMinuto; // Cantidad de milisegundos en una hora
    const milisegundosPorDia = 24 * milisegundosPorHora; // Cantidad de milisegundos en un día
    const diferenciaEnMilisegundos = fechaFinal.getTime() - fechaInicial.getTime();
    const diasTranscurridos = Math.floor(diferenciaEnMilisegundos / milisegundosPorDia);
  
    // Calcula las horas y minutos restantes después de calcular los días
    const horasRestantes = diferenciaEnMilisegundos % milisegundosPorDia;
    const horasTranscurridas = Math.floor(horasRestantes / milisegundosPorHora);
  
    const minutosRestantes = horasRestantes % milisegundosPorHora;
    const minutosTranscurridos = Math.floor(minutosRestantes / milisegundosPorMinuto);
  
    return { dias: diasTranscurridos, horas: horasTranscurridas, minutos: minutosTranscurridos };
  }
  
}
