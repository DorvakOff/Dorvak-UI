import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'dui-alert-modal',
  imports: [
    ButtonComponent,
    ModalComponent
  ],
  template: `
    <dui-modal [closeable]="false" #modal>
      <span slot="title">{{title}}</span>
      <span slot="content" class="text-sm text-muted-foreground">{{message}}</span>

      <dui-button variant="outline" slot="footer" (click)="onCancel()">{{cancelText}}</dui-button>
      <dui-button slot="footer" (click)="onConfirm()">{{confirmText}}</dui-button>
    </dui-modal>
  `,
  styles: ``
})
export class AlertModalComponent implements AfterViewInit {

  @Input() title: string = 'Are you sure?';
  @Input() message: string = 'You are about to delete this item, are you sure?';
  @Input() confirmText: string = 'Continue';
  @Input() cancelText: string = 'Cancel';

  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  _closed: boolean = true;

  @ViewChild(ModalComponent) modal!: ModalComponent;

  ngAfterViewInit() {
    this.modal.onClose.subscribe(() => {
      if (!this._closed) {
        this.cancel.emit();
      }
    });
  }

  open() {
    this._closed = false;
    this.modal.open();
  }

  close() {
    this._closed = true;
    this.modal.close();
  }

  onConfirm() {
    this.confirm.emit();
    this.close();
  }

  onCancel() {
    this.cancel.emit();
    this.close();
  }
}
