import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemarioPage } from './temario.page';

const routes: Routes = [
  {
    path: '',
    component: TemarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemarioPageRoutingModule {}
