import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';
import { tick } from '@angular/core/testing';
import { Cliente } from '../domain/cliente';
import { Lugar } from '../domain/lugar';
import { Vehiculo } from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  save(ticket: Ticket){
    console.log("Post");
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Ticket/AgregarTicket/", ticket)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Ticket/ticketLista")
  }
  
  delete(ticket: Ticket){
    // return this.http.delete("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/deleteCliente/"+ticket.precio) esta se agregar el id en el domain e incluir aqui
  }

  update(ticket:Ticket){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Ticket/AgregarTicket/", ticket)
  }

  getTicketId(id:number){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Ticket/buscarTicket/"+id)
  }

  // getPlacaLugar(v:Vehiculo, l :Lugar ){
  //   return this.http.get<any>("http://localhost:8080/proyecto/rs/Ticket/BuscarVehiculo-Lugar/"+v.placa+"/"+l.nroLugar)
  // }

  // getPlaca(c:Cliente){
  //   return this.http.get<any>(""+c.cedula)
  // }
}
