import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Pets } from 'src/app/Pets';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user?: Pets
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.user = data
     // Aquí puedes llenar el formulario con los datos existentes
     this.form.patchValue({
      name: this.user.name,
      tipo: this.user.tipo,
      raza: this.user.raza,
      ubicacion: this.user.ubicacion,
      descripcion: this.user.descripcion,
      imagenPath: this.user.imagenPath,
       estado: this.user.estado,
      contactos: this.user.contactos,

    });
  });
}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    raza: new FormControl('', [Validators.required]),
    ubicacion: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    imagenPath: new FormControl('', [Validators.required]),
    fechaDesaparicion: new FormControl(this.getTodayDate(), [Validators.required]), // Agrega la fecha de desaparición
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

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
