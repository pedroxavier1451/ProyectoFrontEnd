import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private router:Router){

  }

  anadir(){
    this.router.navigate(['paginas/regCliente'])
  }
  cliente(){
    this.router.navigate(['paginas/listCliente'])
  }
  ticket(){
    this.router.navigate(['paginas/listTicket'])
  }
  factura(){
    this.router.navigate(['paginas/listFactura'])
  }


}
