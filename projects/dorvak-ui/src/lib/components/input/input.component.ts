import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {cn} from "../../utils/utils";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'dui-input',
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule
  ],
  template: `
    <div [class]="cn('flex h-9 w-72 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm focus-within:border-primary', disabled && 'cursor-not-allowed bg-muted text-muted-foreground')">
      <input
        class="border-none bg-transparent w-full focus-visible:outline-none disabled:cursor-not-allowed"
        [disabled]="disabled"
        [type]="type"
        [placeholder]="placeholder"
        [id]="id"
        [name]="name"
        [autocomplete]="autocomplete"
        [required]="required"
        [min]="min"
        [max]="max"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
      />
    </div>
  `
})
export class InputComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() autocomplete: string = 'off';
  @Input({ transform: numberAttribute }) min: number | undefined;
  @Input({ transform: numberAttribute }) max: number | undefined;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;

  private _value: string = '';

  @Input()
  set value(value: string) {
    this._value = value;
    this.valueChange.emit(value);
  }

  get value(): string {
    return this._value;
  }

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  protected readonly cn = cn;
}
