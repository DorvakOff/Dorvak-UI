import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[duiTrapFocus]'
})
export class TrapFocusDirective implements AfterViewInit {
  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.trapFocus(this.el.nativeElement);
  }

  trapFocus(element: HTMLElement) {
    element.addEventListener('keydown', function(e) {
      const getActiveElement = () => {
        if (document.activeElement?.shadowRoot) { return document.activeElement.shadowRoot.activeElement; }
        else { return document.activeElement; }
      };

      const isTabPressed = e.keyCode === 9; // isTabPressed
      if (!isTabPressed) return;

      const focusableEls1 = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"],' +
        'input[type="radio"], input[type="checkbox"], select'
      );
      const focusableEls = Array.from(focusableEls1).filter( (el: any) => !el.disabled);
      const firstFocusableEl: any = focusableEls[0];
      const lastFocusableEl: any = focusableEls[focusableEls.length - 1];

      if ( e.shiftKey ) /* shift + tab */ {
        if (getActiveElement() === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (getActiveElement() === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
}
