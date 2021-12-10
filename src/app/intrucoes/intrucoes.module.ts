import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrucoesPageRoutingModule } from './intrucoes-routing.module';

import { IntrucoesPage } from './intrucoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrucoesPageRoutingModule
  ],
  declarations: [IntrucoesPage]
})
export class IntrucoesPageModule {}
