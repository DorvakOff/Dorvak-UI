import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-radio-preview',
  standalone: false,
  template: `
    <dui-radio-group [disabled]="disabled" [label]="label">
      <dui-radio-item value="1" label="Option 1"/>
      <dui-radio-item value="2" label="Option 2"/>
      <dui-radio-item value="3" label="Option 3"/>
    </dui-radio-group>
  `,
  styles: ``
})
export class RadioPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Radio Group'
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false
    }
  ]

  label: any;
  disabled: any;

  get codeSnippet(): string {
    return `<dui-radio-group label="${this.label}" ${this.disabled ? 'disabled' : ''}>`
      + `\n  <dui-radio-item value="1" label="Option 1"/>`
      + `\n  <dui-radio-item value="2" label="Option 2"/>`
      + `\n  <dui-radio-item value="3" label="Option 3"/>`
      + `\n</dui-radio-group>`
  }

}
