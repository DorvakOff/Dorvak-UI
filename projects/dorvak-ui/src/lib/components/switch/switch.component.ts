import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-switch',
  imports: [
    FormsModule
  ],
  template: `
    <div [class]="cn('peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-input', checked && 'bg-primary', disabled && 'cursor-not-allowed opacity-50')"  (click)="toggle()" (keydown.space)="toggle()" (keydown.enter)="toggle()"
         [tabindex]="disabled ? -1 : 0">
      <input type="checkbox" [(ngModel)]="checked" [disabled]="disabled" [name]="name" [attr.id]="id" class="hidden">
      <span [class]="cn('block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0', checked && 'translate-x-4')"></span>
    </div>
  `,
  styles: ``
})
export class SwitchComponent {

  @Input() id: string | null = null;
  @Input() name: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  private _checked: boolean = false;

  get checked(): boolean {
    return this._checked;
  }

  @Input({ transform: booleanAttribute })
  set checked(value: boolean) {
    this._checked = value;
    this.checkedChange.emit(value);
  }

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
  }

  protected readonly cn = cn;
}
