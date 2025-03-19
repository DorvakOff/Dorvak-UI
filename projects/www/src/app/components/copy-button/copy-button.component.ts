import {Component, OnInit} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-copy-button',
  standalone: false,
  template: `
    <dui-button
      size="sm"
      variant="outline"
      (click)="onClick()"
    >
      {{ copied ? 'Copied!' : 'Copy' }}
    </dui-button>
  `
})
export class CopyButtonComponent implements OnInit {

  copied: boolean = false;
  copyMessageDelay: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.copyMessageDelay.pipe(
      debounceTime(2000),
    ).subscribe(() => {
      this.copied = false;
    });
  }

  onClick() {
    this.copied = true;
    this.copyMessageDelay.next();
  }

}
