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
import {CalendarComponent} from "./components/calendar/calendar.component";
import {DatePickerComponent} from "./components/date-picker/date-picker.component";
import {TabComponent} from "./components/tabs/tab/tab.component";
import {TabsComponent} from "./components/tabs/tabs/tabs.component";
import {TooltipComponent} from "./components/tooltip/tooltip.component";
import {DropdownMenuComponent} from "./components/dropdown/dropdown-menu/dropdown-menu.component";
import {DropdownItemComponent} from "./components/dropdown/dropdown-item/dropdown-item.component";
import {LucideAngularModule, icons} from "lucide-angular";
import {TableComponent} from "./components/table/table/table.component";
import {RadioItemComponent} from "./components/radio/radio-item/radio-item.component";
import {AccordionComponent} from "./components/accordion/accordion/accordion.component";
import {AccordionItemComponent} from "./components/accordion/accordion-item/accordion-item.component";
import {ToastComponent} from "./components/toast/toast.component";
import {RadioGroupComponent} from "./components/radio/radio-group/radio-group.component";
import {LineChartComponent} from "./components/chart/line-chart/line-chart.component";

const components = [
  AccordionComponent,
  AccordionItemComponent,
  AlertComponent,
  AlertModalComponent,
  AvatarComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CalendarComponent,
  CardComponent,
  CheckboxComponent,
  ComboboxComponent,
  DatePickerComponent,
  DropdownItemComponent,
  DropdownMenuComponent,
  InputComponent,
  InputOtpComponent,
  LineChartComponent,
  LinkComponent,
  ModalComponent,
  PaginationComponent,
  RadioGroupComponent,
  RadioItemComponent,
  SelectComponent,
  SeparatorComponent,
  SwitchComponent,
  TableComponent,
  TabComponent,
  TabsComponent,
  TextareaComponent,
  ToastComponent,
  TooltipComponent
];

@NgModule({
  imports: [
    ...components,
    LucideAngularModule.pick(icons)
  ],
  exports: [
    ...components
  ],
  providers: [
  ]
})
export class DorvakUiModule { }
