import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styleUrls: ['./reg-cliente.component.scss']
})
export class RegClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(private clientesService: ClienteService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente = new Cliente()
        this.cliente = params['cliente']
      }
    }

    guardar(){ 
      console.log(this.cliente)

      if(this.cliente.cedula.length==10){
        const regexSoloNumeros: RegExp = /^[0-9]+$/;
        if(regexSoloNumeros.test(this.cliente.cedula) == true){
          this.clientesService.save(this.cliente).subscribe(data => {
            console.log("Resultado WS SAVE", data);
            this.router.navigate(['paginas/listCliente'])
          });
          this.cliente=new Cliente()
          
        }else{
          alert("Cedula invalida")
        }
      }
      else{
        alert("Cedula invalida")
      }
    }
}
