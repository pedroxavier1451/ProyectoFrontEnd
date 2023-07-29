import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent {

  constructor(private router: Router){

  }

  generar(){
    this.router.navigate(['paginas/genTicket'])
  }
}
