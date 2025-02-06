import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';
import {ButtonComponent} from "./components/button/button.component";

@NgModule({
  declarations: [

  ],
  imports: [
    BadgeComponent,
    AlertComponent,
    ButtonComponent
  ],
  exports: [
    BadgeComponent,
    AlertComponent,
    ButtonComponent
  ]
})
export class DorvakUiModule { }
