import { Component } from '@angular/core';
import {availableIcons, PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-dropdown-preview',
  standalone: false,
  template: `
    <dui-dropdown-menu [disabled]="disabled" [icon]="icon" [label]="label">
      <dui-dropdown-item [disabled]="item1Disabled">
        {{ item1Text }}
      </dui-dropdown-item>
      <dui-dropdown-item [disabled]="item2Disabled">
        {{ item2Text }}
      </dui-dropdown-item>
    </dui-dropdown-menu>
  `,
  styles: ``
})
export class DropdownPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Dropdown'
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'icon',
      type: 'combobox',
      items: availableIcons(),
      default: 'ChevronDown'
    },
    {
      name: 'item1Disabled',
      label: 'Item 1 Disabled',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'item1Text',
      label: 'Item 1 Text',
      type: 'input',
      default: 'Item 1',
    },
    {
      name: 'item2Disabled',
      label: 'Item 2 Disabled',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'item2Text',
      label: 'Item 2 Text',
      type: 'input',
      default: 'Item 2',
    }
  ];

  label: any;
  disabled: any;
  icon: any;
  item1Disabled: any;
  item1Text: any;
  item2Disabled: any;
  item2Text: any;

  get codeSnippet(): string {
    return `<dui-dropdown-menu`
      + ` label="${this.label}"`
      + (this.disabled ? ` disabled` : ``)
      + (this.icon !== 'ChevronDown' ? ` icon="${this.icon}"` : ``)
    + `>`
    + `\n  <dui-dropdown-item`
      + (this.item1Disabled ? ` disabled` : ``)
    + `>`
    + `\n    ${this.item1Text}`
    + `\n  </dui-dropdown-item>`
    + `\n  <dui-dropdown-item`
      + (this.item2Disabled ? ` disabled` : ``)
    + `>`
    + `\n    ${this.item2Text}`
    + `\n  </dui-dropdown-item>`
    + `\n</dui-dropdown-menu>`;
  }
}
