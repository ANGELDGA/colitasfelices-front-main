import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Pets } from 'src/app/Pets';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

//users: any[] | undefined
users: any[] = []
filterValue: string = "";

  url: string = "http://localhost:8080/api/v1/pets/";

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      this.filterUsers();

    })

  }


  filterUsers() {
    this.users = this.users.filter(user => {
      return user.name.toLowerCase().startsWith(this.filterValue.toLowerCase()) ||
        user.tipo.toLowerCase().includes(this.filterValue.toLowerCase())||
        user.raza.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        user.ubicacion.toLowerCase().startsWith(this.filterValue.toLowerCase()) ||
        user.descripcion.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        user.imagenPath.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        user.estado.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        user.fechaDesaparicion.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        user.contactos.toLowerCase().includes(this.filterValue.toLowerCase())

    });
  }


  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.users = this.users?.filter(user => user.id !== id);

    })

      setTimeout(()=>{
        window.location.reload();
      }, 100);

  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

  verDetalles(id : number) {
    this.router.navigate(['verDetalles', id]);

  }


}
