import {Component} from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import {FormField} from '../../../models/form-field';

@Component({
  selector: 'app-avatar-preview',
  standalone: false,
  template: `
    <dui-avatar [src]="src" [alt]="alt" [fallback]="fallback"/>
  `,
  styles: ``
})
export class AvatarPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'src',
      type: 'input',
      default: 'https://github.com/DorvakOff.png',
    },
    {
      name: 'alt',
      type: 'input',
      default: 'Avatar',
    },
    {
      name: 'fallback',
      type: 'input',
      default: 'D',
    }
  ]

  src: any;
  alt: any;
  fallback: any;

  get codeSnippet(): string {
    return `<dui-avatar`
      + `\n  src="${this.src}"`
      + `\n  alt="${this.alt}"`
      + `\n  fallback="${this.fallback}"`
      + `\n/>`;
  }

}
