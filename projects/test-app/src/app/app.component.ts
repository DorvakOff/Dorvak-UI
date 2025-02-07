import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  testAlert(args?: any) {
    alert(`Test alert: ${args}`);
  }
}
