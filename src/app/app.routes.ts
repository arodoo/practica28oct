import { ControlContainer } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './componentes/citas/citas.component';
import { ControlesComponent } from './componentes/controles/controles.component';
import { EditCitaComponent } from './componentes/edits/edit-cita/edit-cita.component';
import { EditControlComponent } from './componentes/edits/edit-control/edit-control.component';
import { EditTratamientoComponent } from './componentes/edits/edit-tratamiento/edit-tratamiento.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';

const app_routes : Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'tratamientos', component: TratamientosComponent},
    {path: 'controles', component: ControlesComponent},
    {path: 'citas', component: CitasComponent},
    {path: 'edit-cita', component: EditCitaComponent},
    {path: 'edit-tratamiento', component: EditTratamientoComponent},
    {path: 'edit-control', component: EditControlComponent},
    {path : '***', pathMatch : 'full', redirectTo : 'consultas'}
]

export const app_routing = RouterModule.forRoot(app_routes);