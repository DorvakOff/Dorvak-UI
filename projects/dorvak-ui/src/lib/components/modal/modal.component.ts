import {
  booleanAttribute,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input, Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'dui-modal',
  imports: [
    CardComponent,
    ButtonComponent
  ],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" [class.hidden]="!isOpen && !dismissing" [class.bg-opacity-0]="dismissing">
      <dui-card class="relative w-1/2 duration-300" [class.animate-in]="isOpen" [class.fade-in-0]="isOpen" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing">
        <ng-content select="[slot=title]" slot="title"/>
        <ng-content select="[slot=subtitle]" slot="subtitle"/>
        <ng-content select="[slot=content]" slot="content"/>

        @if (closeable) {
            <dui-button class="absolute top-2 right-2" (click)="close()" size="icon" icon="x" variant="ghost"></dui-button>
        }

        <div slot="footer" class="flex justify-end w-full gap-2">
          <ng-content select="[slot=footer]"/>
        </div>
      </dui-card>
    </div>
  `,
  styles: ``
})
export class ModalComponent {

  @Input({ transform: booleanAttribute }) closeable: boolean = true;
  @Input({ transform: booleanAttribute }) allowClickOutside = true;
  @Input() allowClose: Function | null = () => true;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild(CardComponent, { read: ElementRef }) modal!: ElementRef<HTMLElement>;

  isOpen = false;
  protected dismissing = false;

  constructor(private renderer: Renderer2) {
  }

  open() {
    this.renderer.addClass(document.body, 'overflow-hidden');
    setTimeout(() => {
      this.dismissing = false;
      this.isOpen = true;
    }, 100);
  }

  close() {
    this.isOpen = false;
    this.dismissing = true;

    this.renderer.removeClass(document.body, 'overflow-hidden');
    this.onClose.emit();

    setTimeout(() => {
      this.dismissing = false;
    }, 300);
  }

  @HostListener('document:click', ['$event'])
  private clickOutside(event: MouseEvent) {
    if (!this.closeable || !this.isOpen) {
      return;
    }

    if (this.allowClose && !this.allowClose()) {
      return
    }

    if (!this.allowClickOutside || !this.isOpen) {
      return;
    }

    if (this.modal.nativeElement.contains(event.target as Node)) {
      return;
    }

    this.close();
  }

  @HostListener('document:keydown.escape')
  private onEscape() {
    if (this.isOpen) {
      this.close();
    }
  }
}
