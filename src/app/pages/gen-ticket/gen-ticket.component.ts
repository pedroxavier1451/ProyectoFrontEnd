import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Ticket } from 'src/app/domain/ticket';
import { ClienteService } from 'src/app/services/cliente.service';
import { TicketService } from 'src/app/services/ticket.service';


let cont:number = 0;
let val:number;

@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.component.html',
  styleUrls: ['./gen-ticket.component.scss']
})

export class GenTicketComponent implements OnInit{

  cliente:Cliente=new Cliente();
  ticket:Ticket=new Ticket();
  listadoTicket:any;

  constructor(private clienteService:ClienteService,
    private ticketService:TicketService,
    private router:Router){

      this.listadoTicket=ticketService.getAll()
    
      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
          this.cliente=new Cliente();
          this.cliente=params['cliente']
        }
      }
  ngOnInit(): void {
    this.listadoTicket=this.ticketService.getAll()
  }
  
  lugar(valor: any){
    //alert(valor);
    const divSeleccionable = document.getElementById(valor);
    if (divSeleccionable) {
      if(cont <= 0 || val == valor){
        divSeleccionable.classList.toggle("selected");
        cont ++;
        if(val == valor){
          cont = cont - 2;
        }
        val = valor;
      }

      if(val != valor){
        alert("Seleccione solo una opcion");
      }
    }
  }
  registrar(cliente:Cliente){
    // para buscar el vhiculo por la cedula y si lo encuentra manda a generar el vehiculo
    // codigo imcompleto
    this.ticketService.getVehiculo(cliente).subscribe(
      ()=>{console.log("busca cliente")
    this.ngOnInit()} 
    );
  }
}
