import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  template: `
    <dui-button [icon]="icon" size="icon" buttonClass="h-9" (click)="toggleTheme()"/>
  `,
  styles: ``
})
export class ThemeToggleComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setAttribute(document.body, "data-theme", this.currentTheme);
  }

  toggleTheme() {
    let theme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    this.renderer.setAttribute(document.body, "data-theme", theme);
  }

  getDefaultTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  get currentTheme() {
    let theme = localStorage.getItem('theme') ?? this.getDefaultTheme();

    if (theme === 'dark') {
      return 'dark';
    }
    return 'light';
  }

  get icon() {
    return this.currentTheme === 'dark' ? 'sun' : 'moon';
  }

}
