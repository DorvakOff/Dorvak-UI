import {Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {LucideAngularModule} from "lucide-angular";
import {cn} from "../../../utils/utils";
import {Subject, throttleTime} from "rxjs";

@Component({
  selector: 'dui-dropdown-menu',
  encapsulation: ViewEncapsulation.None,
  imports: [
    ButtonComponent,
    LucideAngularModule
  ],
  template: `
    <div class="relative">
      <dui-button (click)="toggleMenu(); $event.stopPropagation()" [disabled]="disabled" icon="chevron-down" [buttonClass]="buttonClass" #button>
        {{ label }}
      </dui-button>
      <div [class]="cn(
                'absolute w-full top-11 bg-popover text-popover-foreground border border-gray-300 rounded-md shadow-md p-2 duration-300 z-10',
                showOnTop && 'bottom-11 top-auto'
              )"
           [class.hidden]="!visible && !dismissing"
           [class.animate-in]="visible" [class.fade-in-0]="visible" [class.animate-out]="dismissing" [class.fade-out-0]="dismissing"
           #menu>
          <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``
})
export class DropdownMenuComponent {

  @Input({ required: true }) label!: string;
  @Input() disabled: boolean = false;
  @Input() buttonClass: string = '';

  @ViewChild('button') button!: ButtonComponent;
  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>;

  protected showOnTop: boolean = false;
  protected visible: boolean = false;
  protected dismissing: boolean = false
  private scrollThrottle: Subject<boolean> = new Subject<boolean>();

  toggleMenu() {
    this.visible ? this.closeMenu() : this.openMenu();
  }

  constructor() {
    this.scrollThrottle.pipe(
      throttleTime(100)
    ).subscribe(showOnTop => this.showOnTop = showOnTop);
  }

  @HostListener('document:click', ['$event'])
  private onClick(event: MouseEvent) {
    if (this.visible && !this.menu.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  @HostListener('document:scroll')
  @HostListener('window:resize')
  recalculatePosition() {
    if (this.visible) {
      // if the combobox is not visible on the screen, show it on top of the input
      this.scrollThrottle.next(window.innerHeight - this.button.button.nativeElement.getBoundingClientRect().bottom < this.menu.nativeElement.clientHeight
        + 50);
    }
  }

  @HostListener('keydown.escape', ['$event'])
  private onEscape($event: KeyboardEvent) {
    if (this.visible) {
      this.closeMenu();
      $event.stopPropagation();
    }
  }

  openMenu() {
    this.visible = true;
    this.dismissing = false;
    this.showOnTop = false;
    setTimeout(() => this.recalculatePosition());
  }

  closeMenu() {
    this.dismissing = true;

    setTimeout(() => {
      this.visible = false;
      this.dismissing = false
    }, 200);
  }

  protected readonly cn = cn;
}
