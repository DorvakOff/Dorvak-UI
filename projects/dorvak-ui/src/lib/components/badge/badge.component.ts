import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {LucideIconNode} from "lucide-angular/icons/types";
import {Variant} from "../../models/variant";
import {cva} from "class-variance-authority";
import {cn} from "../../utils/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors duration-300 ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "bg-success text-success-foreground hover:bg-success/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        warning: "bg-warning text-warning-foreground hover:bg-warning/80",
        info: "bg-info text-info-foreground hover:bg-info/80"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

@Component({
  selector: 'dui-badge',
  imports: [
    LucideAngularModule
  ],
  template: `
    <span [class]="cn(badgeVariants({ variant }), iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row')">
      @if (icon) {
          <i-lucide class="w-4 h-4" [name]="icon" [size]="16"/>
      }
      <ng-content/>
    </span>
  `
})
export class BadgeComponent {

  badgeVariants = badgeVariants;

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;
  @Input() iconPosition: 'left' | 'right' = 'left';

  protected readonly cn = cn;
}
