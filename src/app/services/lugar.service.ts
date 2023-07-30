import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from '../domain/lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http:HttpClient) { } 

  // codigo imcompleto

  save(lugar: Lugar){
    console.log("Post");
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Lugar", lugar)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Lugar/lugarLista")
  }
  
  delete(lugar: Lugar){
    return this.http.delete("http://localhost:8080/proyecto/rs/Vehiculo-Cliente/deleteCliente/"+lugar.idLugar)
  }

  update(lugar:Lugar){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/Lugar", lugar)
  }

  verificar(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/Lugar/verificar")
  }

}
