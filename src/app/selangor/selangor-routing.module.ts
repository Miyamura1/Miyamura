import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelangorPage } from './selangor.page';

const routes: Routes = [
  {
    path: '',
    component: SelangorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelangorPageRoutingModule {}
