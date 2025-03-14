import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'dui-avatar',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <div class="rounded-full h-10 w-10 shrink-0 overflow-hidden flex relative border border-border">
      @if (!this._imageError) {
        <img [ngSrc]="src" [alt]="alt" priority (error)="handleImageError()" draggable="false" class="aspect-square w-full h-full" fill/>
      } @else if (fallback) {
        <span
          class="flex h-full w-full items-center justify-center rounded-full bg-muted select-none">{{ fallback }}</span>
      }
    </div>

  `
})
export class AvatarComponent {

  private _src: string = '';

  @Input({ required: true }) set src(value: string) {
    this._imageError = false;
    this._src = value;
  }

  get src(): string {
    return this._src;
  }

  @Input() alt: string = 'avatar';
  @Input() fallback: string = '';

  protected _imageError: boolean = false;

  protected handleImageError() {
    this._imageError = true;
  }

}
