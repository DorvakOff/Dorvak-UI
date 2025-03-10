import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[duiCellHost]'
})
export class CellHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
