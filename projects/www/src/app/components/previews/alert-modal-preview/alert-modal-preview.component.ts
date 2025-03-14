import { Component } from '@angular/core';
import {PreviewComponent} from "../../../models/preview-component";
import { FormField } from '../../../models/form-field';

@Component({
  selector: 'app-alert-modal-preview',
  standalone: false,
  template: `
    <dui-button (click)="modal.open()">Show Alert Modal</dui-button>
    <dui-alert-modal #modal [title]="title" [message]="message" [confirmText]="confirmText" [cancelText]="cancelText"/>
  `,
  styles: ``
})
export class AlertModalPreviewComponent implements PreviewComponent {

  fields: FormField[] = [
    {
      name: 'title',
      type: 'input',
      default: 'Are you sure?',
    },
    {
      name: 'message',
      type: 'input',
      default: 'You are about to delete this item, are you sure?',
    },
    {
      name: 'confirmText',
      label: 'Confirm Button Text',
      type: 'input',
      default: 'Continue',
    },
    {
      name: 'cancelText',
      label: 'Cancel Button Text',
      type: 'input',
      default: 'Cancel',
    }
  ]

  title: any;
  message: any;
  confirmText: any;
  cancelText: any;

  get codeSnippet(): string {
    return `<dui-button (click)="modal.open()">Show Alert Modal</dui-button>`
      + `\n<dui-alert-modal #modal`
      + `\n  title="${this.title}"`
      + `\n  message="${this.message}"`
      + `\n  confirmText="${this.confirmText}"`
      + `\n  cancelText="${this.cancelText}"`
      + `\n/>`
  }
}
