import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrucoesPage } from './intrucoes.page';

const routes: Routes = [
  {
    path: '',
    component: IntrucoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrucoesPageRoutingModule {}
