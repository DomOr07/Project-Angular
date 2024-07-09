import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { ConsultarComponent } from './consultar/consultar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AmigosComponent } from './pages/amigos/amigos.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { GuardadoComponent } from './pages/guardado/guardado.component';

const ruta: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'amigos', component: AmigosComponent},
  { path: 'grupos', component: GruposComponent},
  { path: 'guardado', component: GuardadoComponent},
  { path: '**', redirectTo: '/login'}
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(ruta),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
