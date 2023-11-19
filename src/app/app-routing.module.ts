import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ServicioComponent } from '../assets/servicio/servicio.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { VerDetallesComponent } from './components/ver-detalles/ver-detalles.component';
import { HeaderComponent } from './adopta/components/header/header.component';
import { BodyComponent } from './adopta/components/body/body.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'adopta', component: AdoptaComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'donaciones', component: DonacionesComponent },

  { path: 'viewusers', component: ViewusersComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
  { path: 'verDetalles/:id', component: VerDetallesComponent },
  { path: 'adds' , component:HeaderComponent},
  { path: 'list' , component:BodyComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
