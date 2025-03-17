import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-date-picker-preview',
  standalone: false,
  template: `
    <dui-date-picker
      [disabled]="disabled"
      [required]="required"
      [label]="label"
      [placeholder]="placeholder"
      [dateFormat]="dateFormat"
    />
  `,
  styles: ``
})
export class DatePickerPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      label: 'Label',
      type: 'input',
      default: 'Date'
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      type: 'input',
      default: 'Select a date'
    },
    {
      name: 'dateFormat',
      label: 'Date Format',
      type: 'input',
      default: 'dd/MM/yyyy'
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'checkbox',
      default: false
    },
    {
      name: 'required',
      label: 'Required',
      type: 'checkbox',
      default: false
    }
  ]

  disabled: any;
  required: any;
  label: any;
  placeholder: any;
  dateFormat: any;

  get codeSnippet(): string {
    return `<dui-date-picker`
      + `\n  label="${this.label}"`
      + `\n  placeholder="${this.placeholder}"`
      + `\n  dateFormat="${this.dateFormat}"`
      + (this.disabled ? `\n  disabled` : '')
      + (this.required ? `\n  required` : '')
      + `\n/>`
  }

}
