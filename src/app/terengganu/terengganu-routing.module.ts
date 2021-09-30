import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerengganuPage } from './terengganu.page';

const routes: Routes = [
  {
    path: '',
    component: TerengganuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerengganuPageRoutingModule {}
