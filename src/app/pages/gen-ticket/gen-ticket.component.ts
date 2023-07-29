import { Component } from '@angular/core';

let cont:number = 0;
let val:number;

@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.component.html',
  styleUrls: ['./gen-ticket.component.scss']
})

export class GenTicketComponent {
  

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
}
