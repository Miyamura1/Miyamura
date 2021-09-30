import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerakPageRoutingModule } from './perak-routing.module';

import { PerakPage } from './perak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerakPageRoutingModule
  ],
  declarations: [PerakPage]
})
export class PerakPageModule {}
