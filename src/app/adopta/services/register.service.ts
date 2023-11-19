import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../modells/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  rutaGlobal = 'http://localhost:8082/Adopt/'

  constructor(private http: HttpClient) { }

  //crear registro
  crearRegister(register: Register){
    return this.http.post<Register>(this.rutaGlobal + 'add', register, {
      observe: 'response'
    })
  }

  //listar
  getRegister(){
    return this.http.get<Register[]>(this.rutaGlobal + 'findAll')
  }

  //actualizar
  actualizarRegister(register: Register){
    return this.http.post<Register>(this.rutaGlobal  + 'update', register,{
      observe: 'response'
    })
    
  }

  //eliminar
  eliminarRegister(idRegister: number){
    return this.http.post<Boolean>(this.rutaGlobal + 'delete/{idRegister}', idRegister,{
      observe: 'response'
    })
  }

}
