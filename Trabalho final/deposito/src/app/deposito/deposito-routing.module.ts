import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoPage } from './deposito.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoPage
  },
  {
    path: 'Edit',
    loadChildren: () => import('./deposito-edit/deposito-edit.module').then( m => m.DepositoEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoPageRoutingModule {}
