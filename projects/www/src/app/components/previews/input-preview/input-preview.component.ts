import { Component } from '@angular/core';
import {availableIcons, PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-input-preview',
  standalone: false,
  template: `
    <dui-input
      [label]="label"
      [placeholder]="placeholder"
      [required]="required"
      [disabled]="disabled"
      [readonly]="readonly"
      [icon]="icon"
    />
  `,
  styles: ``
})
export class InputPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Label',
    },
    {
      name: 'placeholder',
      type: 'input',
      default: 'Enter your text here',
    },
    {
      name: 'required',
      type: 'checkbox',
      default: false,
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
      name: 'icon',
      type: 'combobox',
      default: null,
      items: availableIcons()
    }
  ];

  label: any;
  placeholder: any;
  required: any;
  disabled: any;
  readonly: any;
  icon: any;

  get codeSnippet(): string {
    return `<dui-input`
      + `\n  label="${this.label}"`
      + `\n  placeholder="${this.placeholder}"`
      + (this.required ? `\n  required` : '')
      + (this.disabled ? `\n  disabled` : '')
      + (this.readonly ? `\n  readonly` : '')
      + (this.icon ? `\n  icon="${this.icon}"` : '')
      + `\n/>`;
  }

}
