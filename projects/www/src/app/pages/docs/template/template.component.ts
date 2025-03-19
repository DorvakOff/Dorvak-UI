import { Component } from '@angular/core';
import {componentList} from "../../../component-list";
import {cn} from "dorvak-ui";

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styles: ``
})
export class TemplateComponent {

  sidebarOpen = document.documentElement.clientWidth > 768;

  sidebarContent: {name: string, id: string, children: {name: string, id: string}[]}[] = [
    {
      name: 'Getting Started',
      id: 'getting-started',
      children: [
        {name: 'Installation', id: 'installation'},
      ]
    },
    {
      name: 'Components',
      id: 'components',
      children: componentList.map((item) => ({
        name: item.name,
        id: item.id,
      }))
    }
  ]

  protected readonly items = componentList;
  protected readonly cn = cn;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
