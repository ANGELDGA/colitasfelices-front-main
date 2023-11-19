import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  mascotas = [
    {
      nombre: 'Mascota 1',
      imagenUrl: '../assets/dog.jpg'
    },
    {
      nombre: 'Mascota 2',
      imagenUrl: '../assets/kittens.jpg'
    },
    {
      nombre: 'Mascota 3',
      imagenUrl: '../assets/shepherd.jpg'
    },
    // Agrega más objetos de mascotas según sea necesario
  ];

}
