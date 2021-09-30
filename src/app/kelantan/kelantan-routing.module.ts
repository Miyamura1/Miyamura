import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelantanPage } from './kelantan.page';

const routes: Routes = [
  {
    path: '',
    component: KelantanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelantanPageRoutingModule {}
