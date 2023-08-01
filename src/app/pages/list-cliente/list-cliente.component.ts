import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContactoComponent } from '../contacto/contacto.component';
import { Cliente } from 'src/app/domain/cliente';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit{
  listadoContactosWS: any;
  cliente: Cliente =new Cliente();

  constructor(private clienteService:ClienteService,
    private personaService: ClienteService,
    private router: Router){

      this.listadoContactosWS=this.clienteService.getAll()
  }

  ngOnInit():void{
    this.listadoContactosWS=this.clienteService.getAll();
  }

  generar(cliente:Cliente){
    this.router.navigate(['paginas/genTicket'])
  }

  enviarCliente(cliente:Cliente){
    console.log("editar "+cliente)
    let params: NavigationExtras = {
      queryParams:{
        cliente:cliente,
      }
    }
    this.router.navigate(["paginas/genTicket"], params);
  }

  eliminar(contacto:Cliente){
    this.personaService.delete(contacto).subscribe(
      ()=>{console.log("cliente eliminado de manera correcta de la paguina web y de la base de datos de esta servicio")
      this.ngOnInit()} 
      );
  }
}
