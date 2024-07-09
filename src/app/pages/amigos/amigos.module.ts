import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AmigosRoutingModule } from './amigos-routing.module';
import { AmigosComponent } from './amigos.component';
import { AmigosService } from './amigos.service';


@NgModule({
  declarations: [
    AmigosComponent
  ],
  imports: [
    CommonModule,
    AmigosRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AmigosService],
  exports: [AmigosComponent]

})
export class AmigosModule { }
