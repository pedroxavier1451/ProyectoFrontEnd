import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styleUrls: ['./reg-cliente.component.scss']
})
export class RegClienteComponent {

  cliente: Cliente = new Cliente();
  vehiculo: Vehiculo = new Vehiculo();

  constructor(private clientesService: ClienteService,
    private vehiculoService: VehiculoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente = new Cliente()
        this.cliente = params['cliente']
      }

      let params2 = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params2){
        console.log(params2)
        this.vehiculo = new Vehiculo()
        this.vehiculo = params2['vehiculo']
      }
    }

    guardar(){ 
      console.log(this.cliente)

      if(this.cliente.cedula.length==10){
        const regexSoloNumeros: RegExp = /^[0-9]+$/;
        if(regexSoloNumeros.test(this.cliente.cedula) == true){
          this.cliente.vehiculo=this.vehiculo
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
      this.vehiculo=new Vehiculo()
    }
}
