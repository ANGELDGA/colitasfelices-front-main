import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_OPTIONS } from 'header.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  userForm: FormGroup;
  submitted = false;

  role = [{ id: 2, name: "USUARIO" }];

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private toastr: ToastrService) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: this.fb.array([
        this.fb.group({
          id: 2,
          name: 'USUARIO'
        }),
      ]), // Puedes manejar roles de usuario de manera personalizada
      sexo: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      cantidadMascota: [0, Validators.min(0)],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: [''],
      distrito: [''],
      provincia: [''],
      departamento: [''],
      pais: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      // Envía los datos del formulario al servidor para el registro del usuario
      console.log('Datos del usuario:', userData);
      // Realiza la solicitud POST al servicio de inicio de sesión. ec2-18-190-26-89.us-east-2.compute.amazonaws.com
    this.http.post('http://localhost:8081/api/v1/auth/signup', userData).subscribe(
      (response) => {
        // El proceso de registro fue exitoso, maneja la respuesta aquí.
        console.log('registro exitoso', response);
        // Si las credenciales son correctas, puedes redirigir al usuario a una página de inicio.
        this.toastr.success('Registro correctamente', 'Exito');
        this.router.navigate(['/inicio']);
      },
      (error) => {
        // Error de registro falló, maneja el error aquí.
        console.error('Error de registro', error);
        this.toastr.error('Ocurrió un error en el registro', 'Error');
      }
    );
    }
  }

}
