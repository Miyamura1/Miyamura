import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KelantanPageRoutingModule } from './kelantan-routing.module';

import { KelantanPage } from './kelantan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KelantanPageRoutingModule
  ],
  declarations: [KelantanPage]
})
export class KelantanPageModule {}
