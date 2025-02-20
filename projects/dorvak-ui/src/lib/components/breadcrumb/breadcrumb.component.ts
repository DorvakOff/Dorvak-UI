import {Component, Input} from '@angular/core';
import {LinkComponent} from "../link/link.component";

export interface BreadcrumbItem {
  label: string;
  url?: string;
  external?: boolean;
}

@Component({
  selector: 'dui-breadcrumb',
  imports: [
    LinkComponent
  ],
  template: `
    <nav aria-label="breadcrumb">
      <ol class="flex flex-row items-center">
        @for (item of items; track item.url; let last = $last) {
          <li class="flex items-center">
            @if (!last) {
              <dui-link [href]="item.url!" [target]="item.external ? '_blank' : '_self'">{{ item.label }}</dui-link>
              <span class="select-none mx-1 text-gray-400">/</span>
            } @else {
              <span class="text-primary-500">{{ item.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: ``
})
export class BreadcrumbComponent {

  @Input() items: BreadcrumbItem[] = [];

}
