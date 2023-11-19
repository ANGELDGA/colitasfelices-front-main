import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service: AppService, private router: Router) {

  }


  data: any


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    raza: new FormControl('', [Validators.required]),
    ubicacion: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    imagenPath: new FormControl('', [Validators.required]),
    fechaDesaparicion: new FormControl(this.getTodayDate(), [Validators.required]),
    // Agrega la fecha de desaparición
    estado: new FormControl('', [Validators.required]),
    contactos: new FormControl('', [Validators.required])

  });

  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  ngOnInit(): void {

  }


  submit() {
    const fechaDesaparicion = this.form.get('fechaDesaparicion')?.value;

    if (fechaDesaparicion) {
      this.data = this.form.value;
      console.log(this.data);

      this.service.adduser(this.data).subscribe(data => {
        console.log(data);
      });

      this.router.navigate(['/']);
    } else {

    }





    this.router.navigate(['/']);
  }



}
