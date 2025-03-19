import { Component } from '@angular/core';
import {availableIcons, PreviewComponent, PreviewWithTsSnippet} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";
import {ToastService} from "dorvak-ui";

@Component({
  selector: 'app-toast-preview',
  standalone: false,
  template: `
    <dui-button (click)="createToast()">Show Toast</dui-button>
  `,
  styles: ``
})
export class ToastPreviewComponent implements PreviewComponent, PreviewWithTsSnippet {

  fields: FormField[] = [
    {
      name: 'title',
      type: 'input',
      default: 'Hello',
    },
    {
      name: 'message',
      type: 'textarea',
      default: 'This is a toast',
    },
    {
      name: 'variant',
      type: 'select',
      default: 'success',
      items: [
        {label: 'Destructive', value: 'destructive'},
        {label: 'Info', value: 'info'},
        {label: 'Primary', value: 'primary'},
        {label: 'Secondary', value: 'secondary'},
        {label: 'Success', value: 'success'},
        {label: 'Warning', value: 'warning'}
      ]
    },
    {
      name: 'icon',
      type: 'combobox',
      default: 'Check',
      items: availableIcons()
    }
  ];

  constructor(private toastService: ToastService) {
  }

  title: any;
  message: any;
  variant: any;
  icon: any;

  get codeSnippet(): string {
    return `<dui-toast/>`
      +  `\n<dui-button (click)="createToast()">Show Toast</dui-button>`;
  }

  get tsSnippet(): string {
    return `import { ToastService } from "dorvak-ui";`
      +  `\n`
      +  `\nconstructor(private toastService: ToastService) {}`
      +  `\n`
      +  `\ncreateToast() {`
      +  `\n  this.toastService.addToast({`
      +  `\n    message: "${this.message}",`
      +  `\n    title: "${this.title}",`
      +  `\n    variant: "${this.variant}",`
      +  `\n    icon: "${this.icon}"`
      +  `\n  });`
      +  `\n}`;
  }

  createToast() {
    this.toastService.addToast({
      title: this.title,
      message: this.message,
      variant: this.variant,
      icon: this.icon
    })
  }

}
