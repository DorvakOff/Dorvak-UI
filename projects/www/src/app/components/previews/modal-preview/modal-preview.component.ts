import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-modal-preview',
  standalone: false,
  template: `
    <dui-button (click)="modal.open()">Show Modal</dui-button>
    <dui-modal #modal [closeable]="closeable" [allowClickOutside]="allowClickOutside">
      <span slot="title">{{ title }}</span>
      <span slot="subtitle">{{ subtitle }}</span>
      <div>
        {{ content }}
      </div>

      <div slot="footer">
        {{ footer }}
      </div>
    </dui-modal>
  `,
  styles: ``
})
export class ModalPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'title',
      type: 'input',
      default: 'This is a title',
    },
    {
      name: 'subtitle',
      type: 'input',
      default: 'This is a subtitle',
    },
    {
      name: 'content',
      type: 'input',
      default: 'This is the content of the modal',
    },
    {
      name: 'footer',
      type: 'input',
      default: 'This is the footer',
    },
    {
      name: 'closeable',
      type: 'checkbox',
      default: true,
    },
    {
      name: 'allowClickOutside',
      type: 'checkbox',
      default: true,
    }
  ];

  title: any;
  subtitle: any;
  content: any;
  footer: any;
  closeable: any;
  allowClickOutside: any;

  get codeSnippet(): string {
    return `<dui-button (click)="modal.open()">Show Modal</dui-button>`
      + `\n<dui-modal #modal`
      + (!this.closeable ? ' closeable="false"' : '')
      + (!this.allowClickOutside ? ' allowClickOutside="false"' : '')
      + `\n  <span slot="title">${this.title}</span>`
      + `\n  <span slot="subtitle">${this.subtitle}</span>`
      + `\n  <div>`
      + `\n    ${this.content}`
      + `\n  </div>`
      + `\n  <div slot="footer">`
      + `\n    ${this.footer}`
      + `\n  </div>`
      + `\n</dui-modal>`;
  }

}
