import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-checkbox-preview',
  standalone: false,
  template: `
    <dui-checkbox [label]="label" [labelPosition]="labelPosition" [disabled]="disabled" [checked]="checked"/>
  `,
  styles: ``
})
export class CheckboxPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Accept terms and conditions',
    },
    {
      name: 'labelPosition',
      type: 'select',
      default: 'right',
      items: [
        {value: 'left', label: 'Left'},
        {value: 'right', label: 'Right'},
      ]
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false
    },
    {
      name: 'checked',
      type: 'checkbox',
      default: false
    }
  ];

  label: any;
  labelPosition: any;
  disabled: any;
  checked: any;

  get codeSnippet(): string {
    return `<dui-checkbox`
      + `\n  label="${this.label}"`
      + `\n  labelPosition="${this.labelPosition}"`
      + (this.disabled ? `\n  disabled` : '')
      + (this.checked ? `\n  checked` : '')
    + `\n/>`;
  }
}
