import {Component, Input, OnInit} from '@angular/core';
import colorUtils from "../../utils/color-utils";

@Component({
  selector: 'dui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';

  componentStyle: any;

  ngOnInit() {
    this.componentStyle = {
      '--badge-background-color': colorUtils.getVariantCssValue(this.variant),
      '--badge-background-color-hover': colorUtils.lightenHSL(`--color-${this.variant}`, 10),
      '--badge-color': colorUtils.getVariantCssValue(`${this.variant}-foreground`)
    }
  }
}
