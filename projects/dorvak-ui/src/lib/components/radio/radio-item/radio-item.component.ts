import {booleanAttribute, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {uniqueId} from "../../../utils/utils";

@Component({
  selector: 'dui-radio-item',
  imports: [
    LucideAngularModule
  ],
  template: `
    <div class="flex flex-row gap-2 items-center w-fit select-none" [class.flex-row-reverse]="labelPosition === 'right'" [class.text-muted-foreground]="disabled">
      <div class="aspect-square h-4 w-4 rounded-full border border-current ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" [class.text-primary]="!disabled">
        <button class="flex items-center justify-center h-full w-full" (click)="input.click(); $event.stopPropagation()">
          <input [id]="id" #input type="radio" class="hidden" [attr.name]="name" [attr.value]="value" [disabled]="disabled" (change)="checked = !checked" [checked]="checked"/>
          @if (checked) {
            <div class="h-2 w-2 bg-current rounded-full"></div>
          }
        </button>
      </div>
      @if (label) {
        <label [for]="id">{{ label }}</label>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class RadioItemComponent {

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() id: string = uniqueId("dui-radio")
  @Input() label: string = '';
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
