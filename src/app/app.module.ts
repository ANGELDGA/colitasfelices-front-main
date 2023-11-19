import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ServicioComponent } from '../assets/servicio/servicio.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RegistroComponent } from './registro/registro.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule, LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { VerDetallesComponent } from './components/ver-detalles/ver-detalles.component';
import { HeaderComponent } from './adopta/components/header/header.component';
import { BodyComponent } from './adopta/components/body/body.component';
import { BodydonaComponent } from './donaciones/components/bodydona/bodydona.component';
import { HeaderDoComponent } from './donaciones/components/header-do/header-do.component';
 


@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    LoginComponent,
    NosotrosComponent,
    DonacionesComponent,
    NoticiasComponent,
    ServicioComponent,
    AdoptaComponent,
    ContactanosComponent,
    RegistroComponent,


    AdduserComponent,
    UpdateuserComponent,
    ViewusersComponent,
    VerDetallesComponent,
    HeaderComponent,
    BodyComponent,
    BodydonaComponent,
    HeaderDoComponent,

  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Posición de las notificaciones
      timeOut: 5000,
      preventDuplicates: true,
      progressBar: true,
    }),

    TableModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
