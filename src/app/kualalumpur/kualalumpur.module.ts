import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KualalumpurPageRoutingModule } from './kualalumpur-routing.module';

import { KualalumpurPage } from './kualalumpur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KualalumpurPageRoutingModule
  ],
  declarations: [KualalumpurPage]
})
export class KualalumpurPageModule {}
