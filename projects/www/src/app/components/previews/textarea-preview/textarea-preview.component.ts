import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-textarea-preview',
  standalone: false,
  template: `
    <dui-textarea
      [label]="label"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [readonly]="readonly"
      [required]="required"
      [rows]="rows"
      [cols]="cols"
    />
  `,
  styles: ``
})
export class TextareaPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Enter your bio',
    },
    {
      name: 'placeholder',
      type: 'input',
      default: 'Tell us about yourself',
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'readonly',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'required',
      type: 'checkbox',
      default: false,
    },
    {
      name: 'rows',
      type: 'input',
      default: 3,
    },
    {
      name: 'cols',
      type: 'input',
      default: 30,
    },
  ]

  label: any;
  placeholder: any;
  disabled: any;
  readonly: any;
  required: any;
  rows: any;
  cols: any;

  get codeSnippet(): string {
    return `<dui-textarea`
      + `\n  label="${this.label}"`
      + `\n  placeholder="${this.placeholder}"`
      + (this.disabled ? `\n  disabled` : '')
      + (this.readonly ? `\n  readonly` : '')
      + (this.required ? `\n  required` : '')
      + `\n  rows="${this.rows}"`
      + `\n  cols="${this.cols}"`
      + `\n/>`
  }

}
