import { Component } from '@angular/core';
import {FormField} from "../../../models/form-field";
import {icons} from "lucide-angular";
import {PreviewComponent} from "../../../models/preview-component";

@Component({
  selector: 'app-alert',
  standalone: false,
  template: `
    <dui-alert [icon]="icon" [variant]="variant">
      <span slot="title">{{title}}</span>
      <span slot="description">{{description}}</span>
    </dui-alert>
  `
})
export class AlertPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'title',
      type: 'input',
      default: 'Alert Title',
    },
    {
      name: 'description',
      type: 'textarea',
      default: 'Alert Description',
    },
    {
      name: 'icon',
      type: 'combobox',
      default: 'Info',
      items: Object.keys(icons).map(icon => {
        return {
          label: icon,
          value: icon
        }
      })
    },
    {
      name: 'variant',
      type: 'select',
      default: 'primary',
      items: [
        {label: 'Destructive', value: 'destructive'},
        {label: 'Info', value: 'info'},
        {label: 'Primary', value: 'primary'},
        {label: 'Secondary', value: 'secondary'},
        {label: 'Success', value: 'success'},
        {label: 'Warning', value: 'warning'}
      ]
    }
  ];


  title: any;
  description: any;
  variant: any;
  icon: any;

  get codeSnippet() {
    return `<dui-alert icon="${this.icon}" variant="${this.variant}">`
      + `\n  <span slot="title">${this.title}</span>`
      + `\n  <span slot="description">${this.description}</span>`
      + `\n</dui-alert>`;
  }

}
