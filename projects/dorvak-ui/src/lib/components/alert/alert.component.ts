import {Component, Input } from '@angular/core';
import {Variant} from "../../models/variant";
import {LucideIconNode} from "lucide-angular/icons/types";
import {LucideAngularModule} from "lucide-angular";
import {NgClass} from "@angular/common";

@Component({
  selector: 'dui-alert',
  standalone: true,
  imports: [
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() variant: Variant = 'primary';
  @Input() icon: string | readonly LucideIconNode[] | undefined;

}
