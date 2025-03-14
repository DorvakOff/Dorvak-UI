import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  title = 'www';

  links = [
    { text: 'Home', url: '/' },
    { text: 'Components', url: '/docs/components' }
  ]

  open(url: string): void {
    window.open(url, '_blank');
  }
}
