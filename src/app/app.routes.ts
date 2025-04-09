import { Routes } from '@angular/router';

import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfesionalComponent } from './pages/quienes-somos/profesional/profesional.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'quienes-somos/:nombre/:id', component: ProfesionalComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '**', component: NotFoundComponent },
];
