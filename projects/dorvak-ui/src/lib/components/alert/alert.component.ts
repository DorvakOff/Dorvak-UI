import {Component, Input, OnInit} from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import colorUtils from "../../utils/color-utils";
import {LucideAngularModule} from "lucide-angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'dui-alert',
  standalone: true,
  template: `
    <div class="alert" [style]="componentStyle">
      <i-lucide *ngIf="icon" [name]="icon" [size]="28"/>
      <div class="alert-content">
        <span slot="title">
            <ng-content select="[slot='title']"/>
        </span>
        <ng-content/>
      </div>
    </div>
  `,
  imports: [
    LucideAngularModule,
    NgIf
  ],
  styles: [`
    .alert {
      padding: 15px;
      margin: 10px;
      border-radius: var(--radius);
      border: 2px solid hsl(var(--alert-color));
      color: hsl(var(--alert-color));
      min-width: 300px;
      max-width: 500px;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i-lucide {
        height: 28px;
      }

      .alert-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        [slot='title'] {
          font-weight: 500;
        }
      }
    }
  `]
})
export class AlertComponent implements OnInit {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

  componentStyle: any;

  ngOnInit() {
    this.componentStyle = {
      '--alert-color': colorUtils.getVariantCssValue(this.variant),
    }
  }
}
