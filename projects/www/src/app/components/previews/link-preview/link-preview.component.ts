import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-link-preview',
  standalone: false,
  template: `
    <dui-link [href]="href" [target]="target">{{ content }}</dui-link>
  `,
  styles: ``
})
export class LinkPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'content',
      type: 'input',
      default: 'Source code',
    },
    {
      name: 'href',
      type: 'input',
      default: 'https://github.com/DorvakOff/Dorvak-UI'
    },
    {
      name: 'target',
      type: 'select',
      default: '_blank',
      items: [
        {value: '_blank', label: 'New tab'},
        {value: '_self', label: 'Same tab'},
      ]
    }
  ]

  content: any;
  href: any;
  target: any;

  get codeSnippet(): string {
    return `<dui-link`
      + `\n  href="${this.href}"`
      + `\n  target="${this.target}"`
      + `\n>`
      + `\n  ${this.content}`
      + `\n</dui-link>`;
  }
}
