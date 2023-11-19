import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Register } from '../../modells/Register';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  registros : Array<Register>
    
  formularioRegister: FormGroup

    constructor(private fb: FormBuilder, private rService: RegisterService){
      this.registros = new Array<Register>()

      this.formularioRegister = fb.group({
        idRegister:new FormControl('',[Validators.required]),
        categoryName: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        raza: new FormControl('',[Validators.required]),
        information: new FormControl('',[Validators.required]),
        img: new FormControl('',[Validators.required]),
      })
    }

    ngOnInit() {
      this.getRegister(); // Cargar registros al inicializar el componente
    } 

    //crear
    crearRegister(){
      if(this.formularioRegister.valid){
        let registro = new Register()
        registro.idRegister = this.formularioRegister.get('idRegister')?.value
        registro.categoryName = this.formularioRegister.get('categoryName')?.value
        registro.name = this.formularioRegister.get('name')?.value
        registro.raza = this.formularioRegister.get('raza')?.value
        registro.information = this.formularioRegister.get('information')?.value
        registro.img = this.formularioRegister.get('img')?.value
        this.rService.crearRegister(registro).subscribe(res =>{
          this.getRegister();
          this.formularioRegister.reset;
        })
      }
    }

    //get register
    getRegister(){
      this.rService.getRegister().subscribe(res=>{
        this.registros = res
      })
    }

    //eliminar persona
    eliminarRegister(idRegister: number){
      this.rService.eliminarRegister(idRegister).subscribe(res =>{
        this.getRegister
      })
    }

}
