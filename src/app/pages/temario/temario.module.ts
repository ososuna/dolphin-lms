import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemarioPageRoutingModule } from './temario-routing.module';

import { TemarioPage } from './temario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemarioPageRoutingModule
  ],
  declarations: [TemarioPage]
})
export class TemarioPageModule {}
