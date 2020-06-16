import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoPage } from './deposito.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoPageRoutingModule {}
