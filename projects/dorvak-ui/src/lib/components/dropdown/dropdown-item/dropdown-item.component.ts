import {booleanAttribute, Component, Host, Input, ViewEncapsulation} from '@angular/core';
import {DropdownMenuComponent} from "../dropdown-menu/dropdown-menu.component";

@Component({
  selector: 'dui-dropdown-item',
  encapsulation: ViewEncapsulation.None,
  template: `
    <button class="w-full select-none enabled:hover:cursor-pointer flex enabled:hover:bg-accent enabled:hover:text-accent-foreground disabled:text-muted-foreground focus-within:bg-accent focus-within:text-accent-foreground rounded-sm px-2 py-1 outline-none font-normal text-base"
          (click)="closeOnClick ? dropdownMenu.closeMenu() : null" [disabled]="disabled">
      <ng-content/>
    </button>
  `
})
export class DropdownItemComponent {

  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) closeOnClick: boolean = true;

  constructor(@Host() protected dropdownMenu: DropdownMenuComponent) {}

  protected readonly close = close;
}
