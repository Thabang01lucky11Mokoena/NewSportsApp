import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IceHockeyPage } from './ice-hockey';

@NgModule({
  declarations: [
    IceHockeyPage,
  ],
  imports: [
    IonicPageModule.forChild(IceHockeyPage),
  ],
})
export class IceHockeyPageModule {}
