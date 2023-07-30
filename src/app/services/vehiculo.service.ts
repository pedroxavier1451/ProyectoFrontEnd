import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

  save(vehiculo: Vehiculo){
    console.log("Post");
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarVehiculo/", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Lugar/lugarLista")
  }
  
  delete(vehiculo: Vehiculo){
    // return this.http.delete("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/deleteCliente/"+ticket.precio) esta se agregar el id en el domain e incluir aqui
  }

  update(vehiculo:Vehiculo){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/AgregarCliente/", vehiculo)
  }
}
