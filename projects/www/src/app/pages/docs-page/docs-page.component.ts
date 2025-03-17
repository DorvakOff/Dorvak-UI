import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { componentList } from "../../component-list";
import {cn} from "dorvak-ui";

@Component({
  selector: 'app-docs-page',
  standalone: false,
  templateUrl: './docs-page.component.html'
})
export class DocsPageComponent {

  items = componentList;
  activeItem = this.items[0];
  activeTab: string | undefined
  sidebarOpen = document.documentElement.clientWidth > 768;

  constructor(private router: Router) {
  }

  @Input()
  set item(value: string) {
    this.activeItem = this.items.find((item) => item.id === value) || this.items[0];
  }

  @Input()
  set selectedTab(value: string) {
    this.activeTab = value;
  }

  get content() {
    return `/assets/docs/components/${this.activeItem.id}.md`;
  }

  onTabChange(tabName: string) {
    this.router.navigate(['docs', 'components', this.activeItem.id, tabName.toLowerCase()]);
  }

  onPrevious() {
    const currentIndex = this.items.findIndex(item => item.id === this.activeItem.id);
    if (currentIndex > 0) {
      this.activeItem = this.items[currentIndex - 1];
      this.router.navigate(['docs', 'components', this.activeItem.id]);
    }
  }

  onNext() {
    const currentIndex = this.items.findIndex(item => item.id === this.activeItem.id);
    if (currentIndex < this.items.length - 1) {
      let activeItem = this.items[currentIndex + 1];
      this.router.navigate(['docs', 'components', activeItem.id]);
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  protected readonly cn = cn;
}
