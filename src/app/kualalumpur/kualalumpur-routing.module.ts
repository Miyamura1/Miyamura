import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KualalumpurPage } from './kualalumpur.page';

const routes: Routes = [
  {
    path: '',
    component: KualalumpurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KualalumpurPageRoutingModule {}
