import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pets } from 'src/app/Pets';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  user: Pets | undefined;



  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('id'); // Obtén el ID de la ruta como string
      if (userIdParam) {
        const userId = +userIdParam; // Convierte el valor en número si no es null
        if (!isNaN(userId)) {
          // Llama al servicio para obtener los detalles del usuario según el ID
          this.service.getUserById(userId).subscribe(data => {
            this.user = data;

            // Muestra una ventana emergente con SweetAlert2
            Swal.fire({
              title: 'Detalles /  Mascota Perdida',
              text: `Nombre: ${this.user.name}`,
              icon: 'info'
            });
          });
        }
      }
    });
  }
}

function swal() {
  throw new Error('Function not implemented.');
}
