import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-separator',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div [class]="cn('bg-border shrink-0', vertical ? 'w-[1px] h-full mx-2' : 'w-full h-[1px] my-2')"></div>
  `
})
export class SeparatorComponent {

  @Input({ transform: booleanAttribute }) vertical: boolean = false;

  protected readonly cn = cn;
}
