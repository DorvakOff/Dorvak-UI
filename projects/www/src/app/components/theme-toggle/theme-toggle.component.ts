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

  get currentTheme() {
    let theme = localStorage.getItem('theme') ?? matchMedia("(prefers-color-scheme: dark)");

    if (theme === 'dark') {
      return 'dark';
    }
    return 'light';
  }

  get icon() {
    return this.currentTheme === 'dark' ? 'sun' : 'moon';
  }

}
