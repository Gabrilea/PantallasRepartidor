import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraTransportePageRoutingModule } from './registra-transporte-routing.module';

import { RegistraTransportePage } from './registra-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraTransportePageRoutingModule
  ],
  declarations: [RegistraTransportePage]
})
export class RegistraTransportePageModule {}
