import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NullPage } from './null';

@NgModule({
  declarations: [
    NullPage,
  ],
  imports: [
    IonicPageModule.forChild(NullPage),
  ],
})
export class NullPageModule {}
