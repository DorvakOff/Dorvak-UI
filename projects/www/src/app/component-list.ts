import {AccordionPreviewComponent} from "./components/previews/accordion-preview/accordion-preview.component";
import {AlertPreviewComponent} from "./components/previews/alert/alert-preview.component";
import {AlertModalPreviewComponent} from "./components/previews/alert-modal-preview/alert-modal-preview.component";
import {AvatarPreviewComponent} from "./components/previews/avatar-preview/avatar-preview.component";

type ComponentList = {
  name: string;
  previewComponent: any;
  id: string;
  since: string;
}

export const componentList: ComponentList[] = [
  {
    name: "Accordion",
    previewComponent: AccordionPreviewComponent,
    id: 'accordion',
    since: 'v1.0.0'
  },
  {
    name: "Alert",
    previewComponent: AlertPreviewComponent,
    id: 'alert',
    since: 'v1.0.0',
  },
  {
    name: "Alert Modal",
    previewComponent: AlertModalPreviewComponent,
    id: 'alert-modal',
    since: 'v1.0.0'
  },
  {
    name: "Avatar",
    previewComponent: AvatarPreviewComponent,
    id: 'avatar',
    since: 'v1.0.0'
  },
  {
    name: 'Badge',
    previewComponent: null,
    id: 'badge',
    since: 'v1.0.0'
  },
  {
    name: 'Breadcrumb',
    previewComponent: null,
    id: 'breadcrumb',
    since: 'v1.0.0'
  },
  {
    name: 'Button',
    previewComponent: null,
    id: 'button',
    since: 'v1.0.0'
  },
  {
    name: 'Calendar',
    previewComponent: null,
    id: 'calendar',
    since: 'v1.0.0'
  },
  {
    name: 'Card',
    previewComponent: null,
    id: 'card',
    since: 'v1.0.0'
  },
  {
    name: 'Checkbox',
    previewComponent: null,
    id: 'checkbox',
    since: 'v1.0.0'
  },
  {
    name: 'Combobox',
    previewComponent: null,
    id: 'combobox',
    since: 'v1.0.0'
  },
  {
    name: 'Date Picker',
    previewComponent: null,
    id: 'date-picker',
    since: 'v1.0.0'
  },
  {
    name: 'Dropdown',
    previewComponent: null,
    id: 'dropdown',
    since: 'v1.0.0'
  },
  {
    name: 'Input',
    previewComponent: null,
    id: 'input',
    since: 'v1.0.0'
  },
  {
    name: 'Input OTP',
    previewComponent: null,
    id: 'input-otp',
    since: 'v1.0.0'
  },
  {
    name: 'Link',
    previewComponent: null,
    id: 'link',
    since: 'v1.0.0'
  },
  {
    name: 'Modal',
    previewComponent: null,
    id: 'modal',
    since: 'v1.0.0'
  },
  {
    name: 'Pagination',
    previewComponent: null,
    id: 'pagination',
    since: 'v1.0.0'
  },
  {
    name: 'Radio',
    previewComponent: null,
    id: 'radio',
    since: 'v1.0.0'
  },
  {
    name: 'Select',
    previewComponent: null,
    id: 'select',
    since: 'v1.0.0'
  },
  {
    name: 'Separator',
    previewComponent: null,
    id: 'separator',
    since: 'v1.0.0'
  },
  {
    name: 'Switch',
    previewComponent: null,
    id: 'switch',
    since: 'v1.0.0'
  },
  {
    name: 'Table',
    previewComponent: null,
    id: 'table',
    since: 'v1.0.0'
  },
  {
    name: 'Tabs',
    previewComponent: null,
    id: 'tabs',
    since: 'v1.0.0'
  },
  {
    name: 'Textarea',
    previewComponent: null,
    id: 'textarea',
    since: 'v1.0.0'
  },
  {
    name: 'Tooltip',
    previewComponent: null,
    id: 'tooltip',
    since: 'v1.0.0'
  }
];
