import { Component } from '@angular/core';
import {availableIcons, PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-button-preview',
  standalone: false,
  template: `
    <dui-button
      [variant]="variant"
      [iconPosition]="iconPosition"
      [icon]="icon"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [submit]="submit"
    >
      {{ content }}
    </dui-button>
  `,
  styles: ``
})
export class ButtonPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'content',
      type: 'input',
      default: 'Button'
    },
    {
      name: 'variant',
      type: 'select',
      default: 'primary',
      items: [
        {label: 'Destructive', value: 'destructive'},
        {label: 'Ghost', value: 'ghost'},
        {label: 'Info', value: 'info'},
        {label: 'Link', value: 'link'},
        {label: 'Outline', value: 'outline'},
        {label: 'Primary', value: 'primary'},
        {label: 'Secondary', value: 'secondary'},
        {label: 'Success', value: 'success'},
        {label: 'Warning', value: 'warning'}
      ]
    },
    {
      name: 'iconPosition',
      label: 'Icon Position',
      type: 'select',
      default: 'left',
      items: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'}
      ]
    },
    {
      name: 'icon',
      type: 'combobox',
      default: 'Info',
      items: availableIcons()
    },
    {
      name: 'size',
      type: 'select',
      default: 'default',
      items: [
        {label: 'Default', value: 'default'},
        {label: 'Icon', value: 'icon'},
        {label: 'Large', value: 'lg'},
        {label: 'Small', value: 'sm'}
      ]
    },
    {
      name: 'disabled',
      type: 'checkbox',
      default: false
    },
    {
      name: 'loading',
      type: 'checkbox',
      default: false
    },
    {
      name: 'submit',
      type: 'checkbox',
      default: false
    }
  ];

  variant: any;
  iconPosition: any;
  icon: any;
  size: any;
  disabled: any;
  loading: any;
  submit: any;
  content: any;

  get codeSnippet(): string {
    return `<dui-button`
      + `\n  variant="${this.variant}"`
      + `\n  iconPosition="${this.iconPosition}"`
      + `\n  icon="${this.icon}"`
      + `\n  size="${this.size}"`
      + (this.disabled ? `\n  disabled` : ``)
      + (this.loading ? `\n  loading` : ``)
      + (this.submit ? `\n  submit` : ``)
      + `\n>`
      + `\n  ${this.content}`
      + `\n</dui-button>`;
  }

}
