import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {LucideIconNode} from "lucide-angular/icons/types";
import {Variant} from "../../models/variant";
import {NgClass} from "@angular/common";

@Component({
  selector: 'dui-badge',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  template: `
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors duration-300" [ngClass]="{
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
      'bg-secondary text-secondary-foreground hover:bg-secondary/90': variant === 'secondary',
      'bg-success text-success-foreground hover:bg-success/90': variant === 'success',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
      'bg-warning text-warning-foreground hover:bg-warning/90': variant === 'warning',
      'bg-info text-info-foreground hover:bg-info/90': variant === 'info'
    }">
      @if (icon) {
          <i-lucide class="w-4 h-4" [name]="icon" [size]="16"/>
      }
      <ng-content/>
    </span>
  `
})
export class BadgeComponent {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

}
