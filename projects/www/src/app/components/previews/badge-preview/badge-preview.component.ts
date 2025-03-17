import {Component} from '@angular/core';
import {availableIcons, PreviewComponent} from "../../../models/preview-component";
import {FormField} from '../../../models/form-field';
import {icons} from "lucide-angular";

@Component({
  selector: 'app-badge-preview',
  standalone: false,
  template: `
    <dui-badge [iconPosition]="iconPosition" [icon]="icon" [variant]="variant">
      {{ content }}
    </dui-badge>
  `,
  styles: ``
})
export class BadgePreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'iconPosition',
      type: 'select',
      default: 'left',
      items: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'}
      ],
      label: 'Icon Position'
    },
    {
      name: 'icon',
      type: 'combobox',
      default: 'Info',
      items: availableIcons()
    },
    {
      name: 'variant',
      type: 'select',
      default: 'primary',
      items: [
        {label: 'Default', value: 'default'},
        {label: 'Destructive', value: 'destructive'},
        {label: 'Info', value: 'info'},
        {label: 'Primary', value: 'primary'},
        {label: 'Secondary', value: 'secondary'},
        {label: 'Success', value: 'success'},
        {label: 'Warning', value: 'warning'}
      ]
    },
    {
      name: 'content',
      type: 'input',
      default: 'Badge Content',
    }
  ];

  iconPosition: any;
  icon: any;
  variant: any;
  content: any;

  get codeSnippet(): string {
    return `<dui-badge`
      + `\n  iconPosition="${this.iconPosition}"`
      + `\n  icon="${this.icon}"`
      + `\n  variant="${this.variant}"`
      + `\n>`
      + `\n  ${this.content}`
      + `\n</dui-badge>`;
  }

}
