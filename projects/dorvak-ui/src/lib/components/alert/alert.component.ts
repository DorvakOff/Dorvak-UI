import {Component, Input } from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'dui-alert',
  standalone: true,
  imports: [
    LucideAngularModule,
    NgClass,
    NgIf
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

}
