import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';
import {ButtonComponent} from "./components/button/button.component";
import {LinkComponent} from "./components/link/link.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {AvatarComponent} from "./components/avatar/avatar.component";
import {SeparatorComponent} from "./components/separator/separator.component";
import {InputComponent} from "./components/input/input.component";
import {LabelComponent} from "./components/label/label.component";
import {CardComponent} from "./components/card/card.component";
import {InputOtpComponent} from "./components/input-otp/input-otp.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {ModalComponent} from "./components/modal/modal.component";

const components = [
  AlertComponent,
  AvatarComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CardComponent,
  InputComponent,
  InputOtpComponent,
  LabelComponent,
  LinkComponent,
  ModalComponent,
  PaginationComponent,
  SeparatorComponent
];

@NgModule({
  imports: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class DorvakUiModule { }
