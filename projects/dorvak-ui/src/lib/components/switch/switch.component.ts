import {booleanAttribute, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {cn, uniqueId} from "../../utils/utils";

@Component({
  selector: 'dui-switch',
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true
    }
  ],
  template: `
    <div class="flex items-center justify-between gap-4 w-full" [class.flex-row-reverse]="labelPosition === 'right'">
      @if (label) {
        <label [class]="cn('font-medium leading-none select-none flex flex-col', disabled && 'cursor-not-allowed opacity-70', info.children.length && 'gap-2')"
               [for]="id">
          {{ label }}
          <small class="text-muted-foreground text-xs" #info>
            <ng-content/>
          </small>
        </label>
      }
      <div
        [class]="cn('peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-all outline-none bg-input', checked && 'bg-primary', disabled && 'cursor-not-allowed opacity-50')"
        (click)="toggle()" (keydown.space)="toggle(); $event.preventDefault()" (keydown.enter)="toggle()"
        [tabindex]="disabled ? -1 : 0">
        <input type="checkbox" [(ngModel)]="checked" [disabled]="disabled" [name]="name" [attr.id]="id" class="hidden">
        <span
          [class]="cn('block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0', checked && 'translate-x-4')"></span>
      </div>
    </div>
  `,
  styles: ``
})
export class SwitchComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() name: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  private _checked: boolean = false;
  readonly id: string = uniqueId('dui-switch');
  protected _touched: boolean = false;
  private onTouched = () => {
  };

  get checked(): boolean {
    return this._checked;
  }

  @Input({ transform: booleanAttribute })
  set checked(value: boolean) {
    this.markAsTouched();
    this._checked = value;
    this.checkedChange.emit(value);
  }

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
  }

  protected readonly cn = cn;

  private markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  writeValue(obj: any) {
    this.checked = obj;
    this._touched = false;
  }

  registerOnChange(fn: any) {
    this.checkedChange.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
