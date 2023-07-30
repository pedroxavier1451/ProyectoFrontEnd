import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Lugar } from 'src/app/domain/lugar';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';
import { LugarService } from 'src/app/services/lugar.service';
import { TicketService } from 'src/app/services/ticket.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';


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
  vehiculo:Vehiculo = new Vehiculo();
  lugar:Lugar = new Lugar();
  numeros: any;

  constructor(private clienteService:ClienteService,
    private vehiculoService:VehiculoService,
    private ticketService:TicketService,
    private lugarService:LugarService,
    private router:Router){
    
      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
          this.cliente=new Cliente();
          this.cliente=params['cliente']
        }

      }

      
  ngOnInit(): void {

    this.lugarService.verificar().subscribe(data => {
      console.log("Resultado WS SAVE", data);
      // Verificar que la variable sea una lista
      if (Array.isArray(data)) {
        // Acceder a los elementos de la lista
        for (let elemento of data) {
          const divSeleccionable = document.getElementById(elemento);
          if(divSeleccionable){
            divSeleccionable.classList.toggle("selected");
          }
        }
      } else {
        const divSeleccionable = document.getElementById(data);
          if(divSeleccionable){
            divSeleccionable.classList.toggle("selected");
          }
      }
    });

    
  }
  
  verLugar(valor: any){
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
    // para buscar el vehiculo por la cedula y si lo encuentra manda a generar el vehiculo
    // codigo imcompleto
    this.ticketService.getVehiculo(cliente).subscribe(
      ()=>{console.log("busca cliente")
    this.ngOnInit()} 
    );

    this.vehiculoService.save(this.vehiculo).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    this.vehiculo=new Vehiculo()

    this.lugar.nroLugar = val;
    this.lugar.estado = false;

    this.lugarService.update(this.lugar).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    }); 

    this.ticketService.save(this.ticket).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.router.navigate(['paginas/listTicket'])
    });
    this.ticket=new Ticket()
  }

}
