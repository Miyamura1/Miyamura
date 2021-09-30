import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerengganuPageRoutingModule } from './terengganu-routing.module';

import { TerengganuPage } from './terengganu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerengganuPageRoutingModule
  ],
  declarations: [TerengganuPage]
})
export class TerengganuPageModule {}
