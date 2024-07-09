// http://10.35.3.175:8064/v1/es/haciendaCombo

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AmigosModule } from './pages/amigos/amigos.module';
import { PerfilModule } from './pages/perfil/perfil.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GifBackgroundComponent } from './gif-background/gif-background.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RickAndMortyService } from './rick-and-morty.service';
import { GruposComponent } from './pages/grupos/grupos.component';
import { GuardadoComponent } from './pages/guardado/guardado.component';

const route: Route[] = [{ path: '', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent }]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    InicioComponent,
    ConsultarComponent,
    NuevoComponent,
    GifBackgroundComponent,
    GruposComponent,
    GuardadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AmigosModule,
    PerfilModule,
    RouterModule.forRoot(route)
  ],
  providers: [RickAndMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
