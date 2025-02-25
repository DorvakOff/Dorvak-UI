import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {cn, uniqueId} from "../../utils/utils";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-checkbox',
  imports: [
    FormsModule,
    LucideAngularModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    }
  ],
  template: `
    <div class="flex items-center gap-1 w-fit" [class.flex-row-reverse]="labelPosition === 'right'">
      <label [class]="cn('text-sm font-medium leading-none select-none', disabled && 'cursor-not-allowed opacity-70')"
             [for]="id">
        {{ label }}
      </label>
      <div
        [class]="cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', disabled && 'cursor-not-allowed opacity-50', checked && 'bg-primary text-primary-foreground')"
        (click)="toggle()" (keydown.space)="toggle(); $event.preventDefault()" (keydown.enter)="toggle()"
        [tabindex]="disabled ? -1 : 0"
      >
        <input type="checkbox" [(ngModel)]="checked" [disabled]="disabled" [name]="name" [attr.id]="id" class="hidden">
        @if (checked) {
          <div class="flex items-center justify-center text-current">
            <i-lucide name="check" class="w-4 h-4"/>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() name: string = '';
  @Input({transform: booleanAttribute}) disabled: boolean = false;

  private _checked: boolean = false;
  readonly id: string = uniqueId('dui-switch');
  protected _touched: boolean = false;
  private onTouched = () => {
  };

  get checked(): boolean {
    return this._checked;
  }

  @Input({transform: booleanAttribute})
  set checked(value: boolean) {
    this.markAsTouched();
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

  markAsTouched() {
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
