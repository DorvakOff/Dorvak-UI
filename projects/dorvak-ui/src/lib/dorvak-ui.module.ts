import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AlertComponent,
    BadgeComponent
  ],
  exports: [
    BadgeComponent,
    AlertComponent
  ]
})
export class DorvakUiModule { }
