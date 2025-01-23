import {Component, Input, OnInit} from '@angular/core';
import colorUtils from "../../utils/color-utils";
import {LucideAngularModule} from "lucide-angular";
import {LucideIconNode} from "lucide-angular/icons/types";
import {Variant} from "../../models/variant";
import {NgIf} from "@angular/common";

@Component({
  selector: 'dui-badge',
  standalone: true,
  template: `
    <div class="badge" [style]="componentStyle">
      <span class="badge-content">
        <i-lucide *ngIf="icon" [name]="icon" [size]="16"/>
        <ng-content/>
      </span>
    </div>
  `,
  styles: [`
    .badge {
      background-color: hsl(var(--badge-background-color));
      color: hsl(var(--badge-color));
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      margin: 0.25rem;
      transition: background-color 0.2s;
      width: fit-content;

      &:hover {
        background-color: var(--badge-background-color-hover);
      }

      .badge-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        i-lucide {
          height: 16px;
        }
      }
    }
  `],
  imports: [
    LucideAngularModule,
    NgIf
  ],
})
export class BadgeComponent implements OnInit {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

  componentStyle: any;

  ngOnInit() {
    this.componentStyle = {
      '--badge-background-color': colorUtils.getVariantCssValue(this.variant),
      '--badge-background-color-hover': colorUtils.lightenHSL(`--color-${this.variant}`, 10),
      '--badge-color': colorUtils.getVariantCssValue(`${this.variant}-foreground`)
    }
  }
}
