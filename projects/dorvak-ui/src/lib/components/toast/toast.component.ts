import {Component, ViewEncapsulation} from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'dui-toast',
  imports: [
    AlertComponent
  ],
  template: `
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-4 overflow-hidden transition-all duration-300 w-3/4 md:w-[500px]">
      @for (alert of toastService.alerts; track alert.id) {
        <div class="dui-toast bg-background transition-all duration-300 toast-animation w-full" [class.dismissing]="alert.dismissing">
          <dui-alert [icon]="alert.icon" [variant]="alert.variant">
            <span slot="title">{{ alert.title }}</span>
            <span>{{ alert.message }}</span>
          </dui-alert>
        </div>
      }
    </div>
  `,
  styles: `
    @keyframes slideInUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }

      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    .dui-toast {
      &.toast-animation {
        animation: slideInUp 0.3s ease-in-out;

        &.dismissing {
          animation: slideOutRight 0.3s ease-in-out;
        }
      }
    }
  `,
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {
  constructor(protected toastService: ToastService) {}
}
