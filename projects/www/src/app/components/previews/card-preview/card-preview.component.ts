import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";

@Component({
  selector: 'app-card-preview',
  standalone: false,
  template: `
    <dui-card class="block w-md">
      <span slot="title">{{ title }}</span>
      <span slot="subtitle">{{ subtitle }}</span>
      <div>
        {{ content }}
      </div>

      <div slot="footer">
        {{ footer }}
      </div>
    </dui-card>
  `,
  styles: ``
})
export class CardPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'title',
      type: 'input',
      default: 'Card Title'
    },
    {
      name: 'subtitle',
      type: 'input',
      default: 'Card Subtitle'
    },
    {
      name: 'content',
      type: 'textarea',
      default: 'Card Content'
    },
    {
      name: 'footer',
      type: 'input',
      default: 'Card Footer'
    }
  ];

  title: any;
  subtitle: any;
  content: any;
  footer: any

  get codeSnippet(): string {
    return `<dui-card>`
      + `\n  <span slot="title">${this.title}</span>`
      + `\n  <span slot="subtitle">${this.subtitle}</span>`
      + `\n  <div>`
      + `\n    ${this.content}`
      + `\n  </div>`
      + `\n  <div slot="footer">`
      + `\n    ${this.footer}`
      + `\n  </div>`
      + `\n</dui-card>`;
  }

}
