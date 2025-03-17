import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";
import {ComboboxItem} from "dorvak-ui";

@Component({
  selector: 'app-combobox-preview',
  standalone: false,
  template: `
    <dui-combobox
      [disabled]="disabled"
      [items]="items"
      [placeholder]="placeholder"
      [label]="label"
      [required]="required"
      [multi]="multi"
    />
  `,
  styles: ``
})
export class ComboboxPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'label',
      type: 'input',
      default: 'Select a country'
    },
    {
      name: 'placeholder',
      type: 'input',
      default: 'Select a country'
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false
    },
    {
      name: 'required',
      type: 'checkbox',
      default: false
    },
    {
      name: 'multi',
      type: 'checkbox',
      default: false
    }
  ]

  label: any;
  placeholder: any;
  disabled: any;
  required: any;
  multi: any;

  items: ComboboxItem[] = [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Italy', value: 'it' },
    { label: 'Spain', value: 'es' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'United States', value: 'us' }
  ];

  get codeSnippet(): string {
    return `<dui-combobox`
      + `\n  label="${this.label}"`
      + `\n  placeholder="${this.placeholder}"`
      + `\n  [items]="[${this.items.map(this.mapItems).join(', ')}]"`
      + (this.disabled ? `\n  disabled` : '')
      + (this.required ? `\n  required` : '')
      + (this.multi ? `\n  multi` : '')
      + `\n/>`;
  }

  private mapItems(item: ComboboxItem) {
    return `{ label: '${item.label}', value: '${item.value}' }`;
  }
}
