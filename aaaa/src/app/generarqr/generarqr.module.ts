import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarqrPageRoutingModule } from './generarqr-routing.module';

import { GenerarqrPage } from './generarqr.page';


//https://www.npmjs.com/package/angularx-qrcode/v/16.0.2
//npm install angularx-qrcode --save
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarqrPageRoutingModule
  ],
  declarations: [GenerarqrPage]
})
export class GenerarqrPageModule {}
