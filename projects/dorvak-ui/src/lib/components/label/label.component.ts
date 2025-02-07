import {booleanAttribute, Component, Input} from '@angular/core';
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-label',
  imports: [],
  template: `
    <label [class]="cn('text-sm font-medium leading-none flex gap-1', disabled && 'cursor-not-allowed opacity-70')" [for]="for">
      <ng-content/>
      @if (required) {
        <span class="text-red-500">*</span>
      }
    </label>
  `
})
export class LabelComponent {

  @Input() for: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;

  protected readonly cn = cn;
}
