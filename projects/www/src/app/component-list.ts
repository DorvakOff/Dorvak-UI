import {AccordionPreviewComponent} from "./components/previews/accordion-preview/accordion-preview.component";
import {AlertPreviewComponent} from "./components/previews/alert/alert-preview.component";
import {AlertModalPreviewComponent} from "./components/previews/alert-modal-preview/alert-modal-preview.component";
import {AvatarPreviewComponent} from "./components/previews/avatar-preview/avatar-preview.component";
import {BadgePreviewComponent} from "./components/previews/badge-preview/badge-preview.component";
import {BreadcrumbPreviewComponent} from "./components/previews/breadcrumb-preview/breadcrumb-preview.component";
import {ButtonPreviewComponent} from "./components/previews/button-preview/button-preview.component";
import {CalendarPreviewComponent} from "./components/previews/calendar-preview/calendar-preview.component";
import {TooltipPreviewComponent} from "./components/previews/tooltip-preview/tooltip-preview.component";
import {TextareaPreviewComponent} from "./components/previews/textarea-preview/textarea-preview.component";
import {TabsPreviewComponent} from "./components/previews/tabs-preview/tabs-preview.component";
import {TablePreviewComponent} from "./components/previews/table-preview/table-preview.component";
import {SwitchPreviewComponent} from "./components/previews/switch-preview/switch-preview.component";
import {SeparatorPreviewComponent} from "./components/previews/separator-preview/separator-preview.component";
import {SelectPreviewComponent} from "./components/previews/select-preview/select-preview.component";
import {PaginationPreviewComponent} from "./components/previews/pagination-preview/pagination-preview.component";
import {ModalPreviewComponent} from "./components/previews/modal-preview/modal-preview.component";
import {LinkPreviewComponent} from "./components/previews/link-preview/link-preview.component";
import {InputOtpPreviewComponent} from "./components/previews/input-otp-preview/input-otp-preview.component";
import {InputPreviewComponent} from "./components/previews/input-preview/input-preview.component";
import {DropdownPreviewComponent} from "./components/previews/dropdown-preview/dropdown-preview.component";
import {DatePickerPreviewComponent} from "./components/previews/date-picker-preview/date-picker-preview.component";
import {ComboboxPreviewComponent} from "./components/previews/combobox-preview/combobox-preview.component";
import {CheckboxPreviewComponent} from "./components/previews/checkbox-preview/checkbox-preview.component";
import {CardPreviewComponent} from "./components/previews/card-preview/card-preview.component";
import {ToastPreviewComponent} from "./components/previews/toast-preview/toast-preview.component";
import {RadioPreviewComponent} from "./components/previews/radio-preview/radio-preview.component";

type ComponentList = {
  name: string;
  previewComponent: any;
  id: string;
  since: string;
  mobileFriendly: boolean;
}

export const componentList: ComponentList[] = [
  {
    name: "Accordion",
    previewComponent: AccordionPreviewComponent,
    id: 'accordion',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: "Alert",
    previewComponent: AlertPreviewComponent,
    id: 'alert',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: "Alert Modal",
    previewComponent: AlertModalPreviewComponent,
    id: 'alert-modal',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: "Avatar",
    previewComponent: AvatarPreviewComponent,
    id: 'avatar',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Badge',
    previewComponent: BadgePreviewComponent,
    id: 'badge',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Breadcrumb',
    previewComponent: BreadcrumbPreviewComponent,
    id: 'breadcrumb',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Button',
    previewComponent: ButtonPreviewComponent,
    id: 'button',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Calendar',
    previewComponent: CalendarPreviewComponent,
    id: 'calendar',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Card',
    previewComponent: CardPreviewComponent,
    id: 'card',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Checkbox',
    previewComponent: CheckboxPreviewComponent,
    id: 'checkbox',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Combobox',
    previewComponent: ComboboxPreviewComponent,
    id: 'combobox',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Date Picker',
    previewComponent: DatePickerPreviewComponent,
    id: 'date-picker',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Dropdown',
    previewComponent: DropdownPreviewComponent,
    id: 'dropdown',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Input',
    previewComponent: InputPreviewComponent,
    id: 'input',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Input OTP',
    previewComponent: InputOtpPreviewComponent,
    id: 'input-otp',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Link',
    previewComponent: LinkPreviewComponent,
    id: 'link',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Modal',
    previewComponent: ModalPreviewComponent,
    id: 'modal',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Pagination',
    previewComponent: PaginationPreviewComponent,
    id: 'pagination',
    since: 'v1.2.2',
    mobileFriendly: false,
  },
  {
    name: 'Radio',
    previewComponent: RadioPreviewComponent,
    id: 'radio',
    since: 'v1.2.6',
    mobileFriendly: true
  },
  {
    name: 'Select',
    previewComponent: SelectPreviewComponent,
    id: 'select',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Separator',
    previewComponent: SeparatorPreviewComponent,
    id: 'separator',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Switch',
    previewComponent: SwitchPreviewComponent,
    id: 'switch',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Table',
    previewComponent: TablePreviewComponent,
    id: 'table',
    since: 'v1.2.2',
    mobileFriendly: false
  },
  {
    name: 'Tabs',
    previewComponent: TabsPreviewComponent,
    id: 'tabs',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Textarea',
    previewComponent: TextareaPreviewComponent,
    id: 'textarea',
    since: 'v1.2.2',
    mobileFriendly: true
  },
  {
    name: 'Toast',
    previewComponent: ToastPreviewComponent,
    id: 'toast',
    since: 'v1.2.5',
    mobileFriendly: true
  },
  {
    name: 'Tooltip',
    previewComponent: TooltipPreviewComponent,
    id: 'tooltip',
    since: 'v1.2.2',
    mobileFriendly: true
  }
];
