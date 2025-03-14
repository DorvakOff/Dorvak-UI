import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AlertPreviewComponent} from "../../components/previews/alert/alert-preview.component";
import {AlertModalPreviewComponent} from "../../components/previews/alert-modal-preview/alert-modal-preview.component";
import {AvatarPreviewComponent} from "../../components/previews/avatar-preview/avatar-preview.component";
import {AccordionPreviewComponent} from "../../components/previews/accordion-preview/accordion-preview.component";

@Component({
  selector: 'app-docs-page',
  standalone: false,
  templateUrl: './docs-page.component.html',
  styles: ``
})
export class DocsPageComponent {

  items: {
    name: string;
    previewComponent: any;
    id: string;
    since: string;
  }[] = [
    {
      name: "Accordion",
      previewComponent: AccordionPreviewComponent,
      id: 'accordion',
      since: 'v1.0.0'
    },
    {
      name: "Alert",
      previewComponent: AlertPreviewComponent,
      id: 'alert',
      since: 'v1.0.0',
    },
    {
      name: "Alert Modal",
      previewComponent: AlertModalPreviewComponent,
      id: 'alert-modal',
      since: 'v1.0.0'
    },
    {
      name: "Avatar",
      previewComponent: AvatarPreviewComponent,
      id: 'avatar',
      since: 'v1.0.0'
    }
  ]

  activeItem = this.items[0];
  activeTab: string | undefined

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
}
