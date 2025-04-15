import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  readonly #rootContainer: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#rootContainer = this.document.createElement('div');
    this.#rootContainer.className = 'relative h-screen w-screen overflow-hidden';
    this.document.body.appendChild(this.#rootContainer);
  }

  moveToRoot(element: HTMLElement): void {
    this.#rootContainer.appendChild(element);
  }

  restorePosition(element: HTMLElement, parent: HTMLElement, nextSibling: Node | null): void {
    if (nextSibling) {
      parent.insertBefore(element, nextSibling);
    } else {
      parent.appendChild(element);
    }
  }
}
