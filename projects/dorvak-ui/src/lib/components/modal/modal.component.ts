import {Component, Renderer2} from '@angular/core';
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

        <dui-button class="absolute top-2 right-2" (click)="close()" size="icon" icon="x" variant="ghost"></dui-button>

        <div slot="footer" class="flex justify-end w-full gap-2">
          <ng-content select="[slot=footer]"/>
        </div>
      </dui-card>
    </div>
  `,
  styles: ``
})
export class ModalComponent {

  isOpen = false;
  protected dismissing = false;

  constructor(private renderer: Renderer2) {
  }

  open() {
    this.isOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  close() {
    this.isOpen = false;
    this.dismissing = true;

    this.renderer.removeClass(document.body, 'overflow-hidden');
    setTimeout(() => {
      this.dismissing = false;
    }, 300);
  }
}
