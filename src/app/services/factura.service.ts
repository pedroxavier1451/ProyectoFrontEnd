import { Injectable } from '@angular/core';
import { Factura } from '../domain/factura';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

    save(factura: Factura){
      console.log("Post");
      return this.http.post<any>("http://localhost:8080/proyecto/rs/Factura/AgregarFactura/", factura)
    }
  
    getAll(){
      return this.http.get<any>("http://localhost:8080/proyecto/rs/Factura/facturaLista")
    }
    
    delete(factura: Factura){
      return this.http.delete("http://localhost:8080/proyecto/rs/Factura/deleteFactura/"+factura.idFactura) 
    }
  
    update(factura: Factura){
      return this.http.post<any>("http://localhost:8080/proyecto/rs/Ticket/AgregarTicket/", factura)
    }
  
    getTicketId(id:number){
      return this.http.get<any>("http://localhost:8080/proyecto/rs/Ticket/buscarTicket/"+id)
    }

  
}
