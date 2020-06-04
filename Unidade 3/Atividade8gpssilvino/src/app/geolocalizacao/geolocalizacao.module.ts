import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacaoPageRoutingModule } from './geolocalizacao-routing.module';

import { GeolocalizacaoPage } from './geolocalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeolocalizacaoPage]
})
export class GeolocalizacaoPageModule {}
