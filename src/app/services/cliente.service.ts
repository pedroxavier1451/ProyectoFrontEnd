import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  save(cliente: Cliente){
    console.log("Post");
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", cliente)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo/rs/clientes/all")
  }
  
  delete(cliente: Cliente){
    return this.http.delete("http://localhost:8080/demo/rs/clientes/delete/"+cliente.cedula)
  }

  update(cliente:Cliente){
    return this.http.post<any>("http://localhost:8080/demo/rs/clientes",cliente)
  }
}
