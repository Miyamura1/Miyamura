import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerakPage } from './perak.page';

const routes: Routes = [
  {
    path: '',
    component: PerakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerakPageRoutingModule {}
