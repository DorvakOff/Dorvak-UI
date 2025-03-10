import {booleanAttribute, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'dui-radio',
  imports: [
    LucideAngularModule
  ],
  template: `
    <div class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      <button class="flex items-center justify-center h-full w-full" (click)="input.click(); $event.stopPropagation()">
        <input #input type="radio" class="hidden" [attr.name]="name" [attr.value]="value" [disabled]="disabled" (change)="checked = !checked" [checked]="checked"/>
        @if (checked) {
          <i-lucide name="circle" class="h-2.5 w-2.5 fill-current text-current" />
        }
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent {

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() name: string = '';
  @Input() value: string = '';
  @Input({transform: booleanAttribute}) disabled: boolean = false;

  @Input()
  set checked(value: boolean) {
    this._checked = value;
    this.checkedChange.emit(value);
  }

  get checked(): boolean {
    return this._checked;
  }

  private _checked: boolean = false;
}
