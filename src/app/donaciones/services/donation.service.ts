import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donation } from '../modells/Donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  rutaGlobal = 'http://localhost:8083/Donation/'

  constructor(private http: HttpClient) { }

  //registrar
  registrarDonacion(donation: Donation){
    return this.http.post<Donation>(this.rutaGlobal + 'add', donation,{
      observe: 'response'
    })
  }

  //listar
  getDonation(){
    return this.http.get<Donation[]>(this.rutaGlobal + 'findAll')
  }

}
