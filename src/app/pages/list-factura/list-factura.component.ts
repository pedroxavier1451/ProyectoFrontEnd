import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Factura } from 'src/app/domain/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-list-factura',
  templateUrl: './list-factura.component.html',
  styleUrls: ['./list-factura.component.scss']
})
export class ListFacturaComponent {
  listadoFacturasWS: any;
  displayedColumns: string[] = ['codigo', 'fecha', 'total', 'ticket', 'generar', 'eliminar'];
  factura: Factura = new Factura();

  constructor(private facturaService:FacturaService,
    private router: Router){

      this.listadoFacturasWS=this.facturaService.getAll()
  }

  ngOnInit():void{
    this.listadoFacturasWS=this.facturaService.getAll()
  }


  eliminar(factura:Factura){
    this.facturaService.delete(factura).subscribe(
      ()=>{console.log("factura eliminada de manera correcta de la paguina web y de la base de datos de esta servicio")
      this.ngOnInit()} 
      );
  }

  generarFactura(){
    this.router.navigate(['paginas/factura'])
  }

}
