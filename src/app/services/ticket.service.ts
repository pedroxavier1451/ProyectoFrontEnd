import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';
import { tick } from '@angular/core/testing';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  save(ticket: Ticket){
    console.log("Post");
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", ticket)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Lugar/lugarLista")
  }
  
  delete(ticket: Ticket){
    // return this.http.delete("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/deleteCliente/"+ticket.precio) esta se agregar el id en el domain e incluir aqui
  }

  update(ticket:Ticket){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", ticket)
  }

  getVehiculo(cliente:Cliente){
    return this.http.get(""+cliente.cedula);
  }
}
