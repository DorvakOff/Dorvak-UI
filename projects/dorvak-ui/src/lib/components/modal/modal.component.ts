import {
  booleanAttribute,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input, Output,
  Renderer2,
  ViewChild, ViewEncapsulation,
} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {ButtonComponent} from "../button/button.component";
import {cn} from "../../utils/utils";
import {TrapFocusDirective} from "../../directives/trap-focus.directive";

@Component({
  selector: 'dui-modal',
  encapsulation: ViewEncapsulation.None,
  imports: [
    CardComponent,
    ButtonComponent,
    TrapFocusDirective
  ],
  template: `
    <div [class]="cn('fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-colors', !isOpen && !dismissing && 'hidden', dismissing && 'bg-black/0')">
      <dui-card duiTrapFocus role="dialog" aria-modal="true" class="relative w-full md:w-1/2 duration-300" [class.animate-in]="isOpen" [class.fade-in-0]="isOpen" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing">
        @if (closeable) {
            <dui-button class="absolute top-2 right-2" (click)="close()" size="icon" icon="x" variant="ghost"></dui-button>
        }

        <ng-content select="[slot=title]" slot="title"/>
        <ng-content select="[slot=subtitle]" slot="subtitle"/>
        <ng-content/>

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

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild(CardComponent, { read: ElementRef }) modal!: ElementRef<HTMLElement>;

  protected isOpen = false;
  protected dismissing = false;

  constructor(private renderer: Renderer2) {}

  public open() {
    this.renderer.addClass(document.body, 'overflow-hidden');
    this.dismissing = false;
    setTimeout(() => {
      this.isOpen = true;
      setTimeout(() => {
        let focusableEls = this.modal.nativeElement.querySelectorAll("a[href], button, textarea, input[type='text'], input[type='radio'], input[type='checkbox'], select");
        let firstFocusableEl = focusableEls[0];

        if (firstFocusableEl) {
          (firstFocusableEl as HTMLElement).focus();
        }
      }, 300);
    });
  }

  public close() {
    this.isOpen = false;
    this.dismissing = true;

    this.onClose.emit();

    setTimeout(() => {
      this.dismissing = false;
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }, 300);
  }

  @HostListener('document:click', ['$event'])
  private clickOutside(event: MouseEvent) {
    if (!this.closeable || !this.isOpen) {
      return;
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
    if (this.isOpen && this.closeable) {
      this.close();
    }
  }

  protected readonly cn = cn;
}
