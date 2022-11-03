import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { app_routing } from './app.routes';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TratamientosComponent } from './componentes/list/tratamientos/tratamientos.component';
import { ControlesComponent } from './componentes/list/controles/controles.component';
import { EditCitaComponent } from './componentes/edits/edit-cita/edit-cita.component';
import { EditTratamientoComponent } from './componentes/edits/edit-tratamiento/edit-tratamiento.component';
import { CitasComponent } from './componentes/list/citas/citas.component';
import { EditControlComponent } from './componentes/edits/edit-control/edit-control.component';
import { CitaService } from './servicios/cita/cita.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TratamientosComponent,
    ControlesComponent,
    EditCitaComponent,
    EditTratamientoComponent,
    CitasComponent,
    EditControlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
