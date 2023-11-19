import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Aquí puedes agregar lógica de autenticación real.
    // Por ejemplo, puedes verificar las credenciales del usuario.
    
    // Si las credenciales son correctas, puedes redirigir al usuario a una página de inicio.
    // Por ahora, simplemente redirigiremos al usuario a una página ficticia llamada 'inicio'.
    this.router.navigate(['/inicio']);
  
  }
}
