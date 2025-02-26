import {Component, HostListener, Input} from '@angular/core';
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-tooltip',
  imports: [],
  template: `
      <div class="relative">
          @if (!_hiding) {
              <span [class]="cn('w-max absolute z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95',
        !_show && 'animate-out fade-out-0 zoom-out-95',
        side === 'bottom' && 'slide-in-from-top-2 top-[calc(100%+2px)]',
        side === 'left' && 'slide-in-from-right-2 right-[calc(100%+4px)]',
        side === 'right' && 'slide-in-from-left-2 left-[calc(100%+4px)]',
        side === 'top' && 'slide-in-from-bottom-2 bottom-[calc(100%+2px)]'
        )"
            >
              {{ text }}
            </span>
          }
          <ng-content/>
      </div>
  `,
  styles: ``
})
export class TooltipComponent {

  @Input() text: string = '';
  @Input() side: 'top' | 'bottom' | 'left' | 'right' = 'top';

  protected _show: boolean = false;
  protected _hiding: boolean = true;

  protected readonly cn = cn;

  @HostListener('mouseenter')
  show() {
    this._show = true;
    this._hiding = false;
  }

  @HostListener('mouseleave')
  hide() {
    this._show = false;

    setTimeout(() => this._hiding = true, 100);
  }

}
