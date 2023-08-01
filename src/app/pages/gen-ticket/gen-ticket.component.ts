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
let lugarUsado: boolean = false;

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
  // Propiedad que es un array de números enteros
  private numeros: number[];

  constructor(private clienteService:ClienteService,
    private vehiculoService:VehiculoService,
    private ticketService:TicketService,
    private lugarService:LugarService,
    private router:Router){

      // Crear el array vacío en el constructor
      this.numeros = [];
      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
          this.cliente=new Cliente();
          this.cliente=params['cliente']
          this.vehiculo=this.cliente.vehiculo
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
          this.numeros.push(elemento);
        }
      } else {
        const divSeleccionable = document.getElementById(data);
          if(divSeleccionable){
            divSeleccionable.classList.toggle("selected");
          }
          this.numeros.push(data);
      }
    });

    
  }
  
  verLugar(valor: any){
    const divSeleccionable = document.getElementById(valor);
    if (divSeleccionable) {
      for (let numUsado of this.numeros) {
        if(numUsado == valor){
          lugarUsado = true;
        }
      }

      if(lugarUsado == false){
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
      }else{
          alert("Ese lugar ya esta ocupado");
          lugarUsado = false;
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


    // this.vehiculoService.save(this.vehiculo).subscribe(data => {
    //   console.log("Resultado WS SAVE", data);
    // });
    // this.vehiculo=new Vehiculo()



    // this.ticketService.getPlacaLugar(this.vehiculo,this.lugar)

    this.lugar.nroLugar = val;
    this.lugar.estado = false;

    this.lugarService.update(this.lugar).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    }); 

    this.ticket.lugar=this.lugar;
    this.ticket.vehiculo=this.vehiculo;
    console.log(this.ticket)
    this.ticketService.save(this.ticket).subscribe(data => {
      console.log("Resultado WS SAVE", data);
      this.reloadPage();
      this.router.navigate(['paginas/listTicket'])
    });
    this.ticket=new Ticket()
   }

   reloadPage(){
    let currentUrl = this.router.url
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(
      () =>{
        this.router.navigate([currentUrl])
      }
    )
  }

}
