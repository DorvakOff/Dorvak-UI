import {booleanAttribute, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import { cva } from "class-variance-authority"
import {cn} from "../../utils/utils";

const buttonVariants = cva(
  "w-full shadow inline-flex justify-center text-nowrap items-center gap-2 rounded-md text-sm duration-300 select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-all outline-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground enabled:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80",
        success: "bg-success text-success-foreground enabled:hover:bg-success/80",
        destructive: "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/80",
        warning: "bg-warning text-warning-foreground enabled:hover:bg-warning/80",
        info: "bg-info text-info-foreground enabled:hover:bg-info/80",
        link: "border-none shadow-none bg-transparent text-current enabled:hover:text-primary/80",
        ghost: "bg-transparent text-current enabled:hover:bg-gray-200 border-none shadow-none disabled:bg-gray-300",
        outline: "border border-primary text-primary border-2 bg-background shadow-sm enabled:hover:bg-accent enabled:hover:text-accent-foreground",
      },
      size: {
        default: "!h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "primary"
    }
  }
)

@Component({
  selector: 'dui-button',
  encapsulation: ViewEncapsulation.None,
  imports: [
    LucideAngularModule
  ],
  template: `
    <button
      [disabled]="disabled || loading"
      [class]="cn(buttonVariants({ variant, size }), iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row', buttonClass)"
      [type]="submit ? 'submit' : 'button'"
      #button
    >
      @if (loading) {
        <i-lucide name="loader-circle" size="16" class="animate-spin"/>
        <span class="sr-only">Loading...</span>
      } @else {
        @if (icon) {
          <i-lucide [name]="icon" [size]="16"/>
        }
        @if (size !== 'icon' || !icon) {
          <ng-content/>
        }
      }
    </button>
  `,
})
export class ButtonComponent {

  buttonVariants = buttonVariants;

  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Input() variant: Variant | 'link' | 'ghost' | 'outline' = 'primary';
  @Input() icon: string | LucideIconNode[] | undefined;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) loading: boolean = false;
  @Input({ transform: booleanAttribute }) submit: boolean = false;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() buttonClass: string = '';

  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;

  focus() {
    this.button.nativeElement.focus();
  }

  protected readonly cn = cn;
}
