import {Component, Input} from '@angular/core';
import {LinkComponent} from "../link/link.component";
import {LucideAngularModule} from "lucide-angular";

export interface BreadcrumbItem {
  label: string;
  url?: string;
  external?: boolean;
}

@Component({
  selector: 'dui-breadcrumb',
  imports: [
    LucideAngularModule
  ],
  template: `
    <nav aria-label="breadcrumb">
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
        @for (item of items; track item.url; let last = $last) {
          <li class="flex items-center">
            @if (!last) {
              <a [href]="item.url!" [target]="item.external ? '_blank' : '_self'" class="transition-colors hover:text-foreground">{{ item.label }}</a>
            } @else {
              <span class="font-normal text-foreground">{{ item.label }}</span>
            }
          </li>
          @if (!last) {
            <li>
              <i-lucide name="chevron-right" class="[&>svg]:w-3.5 [&>svg]:h-3.5"/>
            </li>
          }
        }
      </ol>
    </nav>
  `,
  styles: ``
})
export class BreadcrumbComponent {

  @Input() items: BreadcrumbItem[] = [];

}
