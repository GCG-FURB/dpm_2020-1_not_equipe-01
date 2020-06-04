import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasFormPageRoutingModule } from './pessoas-form-routing.module';

import { PessoasFormPage } from './pessoas-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasFormPageRoutingModule
  ],
  declarations: [PessoasFormPage]
})
export class PessoasFormPageModule {}
