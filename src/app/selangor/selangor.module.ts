import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelangorPageRoutingModule } from './selangor-routing.module';

import { SelangorPage } from './selangor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelangorPageRoutingModule
  ],
  declarations: [SelangorPage]
})
export class SelangorPageModule {}
