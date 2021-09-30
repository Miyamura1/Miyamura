import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyAppsPageRoutingModule } from './survey-apps-routing.module';

import { SurveyAppsPage } from './survey-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyAppsPageRoutingModule
  ],
  declarations: [SurveyAppsPage]
})
export class SurveyAppsPageModule {}
