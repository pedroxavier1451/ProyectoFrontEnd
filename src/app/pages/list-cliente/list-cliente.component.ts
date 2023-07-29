import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit{
  listadoContactosWS: any;

  constructor(private clienteService:ClienteService,
    private personaService: ClienteService,
    private router: Router){

      this.listadoContactosWS=personaService.getAll
  }

  ngOnInit():void{
    this.listadoContactosWS=this.clienteService.getAll();
  }

  generar(){
    this.router.navigate(['paginas/genTicket'])
  }
}
