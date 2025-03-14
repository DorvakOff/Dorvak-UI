import {booleanAttribute, Component, ElementRef, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dui-tab',
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (selected) {
     <ng-content/>
    }
  `
})
export class TabComponent {

  private _title = '';

  @Input()
  set title(value: string) {
    this._title = value;
    this.elementRef.nativeElement.title = '';
  }

  get title(): string {
    return this._title;
  }

  @Input({ transform: booleanAttribute }) selected = false;
  @Input({ transform: booleanAttribute }) disabled = false;

  constructor(private elementRef: ElementRef) {
  }

}
