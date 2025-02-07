import {Component, Input} from '@angular/core';

@Component({
  selector: 'dui-link',
  imports: [],
  template: `
    <a [href]="href" [target]="target" class="text-primary hover:underline transition-colors duration-300 inline">
      <ng-content/>
    </a>
  `
})
export class LinkComponent {

  @Input() href: string = '';
  @Input() target: string = '_blank';

}
