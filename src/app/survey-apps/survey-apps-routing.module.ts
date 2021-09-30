import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyAppsPage } from './survey-apps.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyAppsPageRoutingModule {}
