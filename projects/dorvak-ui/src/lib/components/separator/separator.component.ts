import {booleanAttribute, Component, Input } from '@angular/core';
import {cn} from "../../utils/utils";

@Component({
  selector: 'dui-separator',
  imports: [],
  template: `
    <div [class]="cn('bg-border shrink-0', vertical ? 'w-0.5 h-full mx-2' : 'w-full h-0.5 my-2')"></div>
  `
})
export class SeparatorComponent {

  @Input({ transform: booleanAttribute }) vertical: boolean = false;

  protected readonly cn = cn;
}
