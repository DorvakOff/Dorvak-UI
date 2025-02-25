import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';
import {ButtonComponent} from "./components/button/button.component";
import {LinkComponent} from "./components/link/link.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {AvatarComponent} from "./components/avatar/avatar.component";
import {SeparatorComponent} from "./components/separator/separator.component";
import {InputComponent} from "./components/input/input.component";
import {CardComponent} from "./components/card/card.component";
import {InputOtpComponent} from "./components/input-otp/input-otp.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {ModalComponent} from "./components/modal/modal.component";
import {ComboboxComponent} from "./components/combobox/combobox.component";
import {SelectComponent} from "./components/select/select.component";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {AlertModalComponent} from "./components/alert-modal/alert-modal.component";
import {SwitchComponent} from "./components/switch/switch.component";
import {CheckboxComponent} from "./components/checkbox/checkbox.component";

const components = [
  AlertComponent,
  AlertModalComponent,
  AvatarComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ComboboxComponent,
  InputComponent,
  InputOtpComponent,
  LinkComponent,
  ModalComponent,
  PaginationComponent,
  SelectComponent,
  SeparatorComponent,
  SwitchComponent,
  TextareaComponent
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
