import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  // codigo imcompleto

  save(cliente: Cliente){
    console.log("Post");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", JSON.stringify(cliente), { headers })
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/clienteLista")
  }
  
  delete(cliente: Cliente){
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/deleteCliente/"+cliente.cedula)
  }

  update(cliente:Cliente){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", cliente)
  }
}
