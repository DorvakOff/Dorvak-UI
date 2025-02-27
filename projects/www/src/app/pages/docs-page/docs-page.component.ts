import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {SlugifyPipe} from "../../pipes/slugify.pipe";
import {BreadcrumbItem} from "../../../../../dorvak-ui/src/lib/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-docs-page',
  standalone: false,
  templateUrl: './docs-page.component.html',
  styles: ``
})
export class DocsPageComponent {

  groups = [
    {
      name: 'Getting Started',
      items: [
        'Installation',
      ]
    },
    {
      name: 'Components',
      id: 'components',
      items: [
        'Alert',
        'Alert Modal',
        'Avatar',
        'Badge',
        'Breadcrumb',
        'Button',
        'Calendar',
        'Card',
        'Checkbox',
        'Combobox',
        'Date Picker',
        'Dropdown Menu',
        'Input',
        'Input OTP',
        'Link',
        'Modal',
        'Pagination',
        'Select',
        'Separator',
        'Switch',
        'Tabs',
        'Textarea',
        'Tooltip'
      ]
    }
  ]

  activeGroup: {name: string, items: string[]} = this.groups[0];
  activeItem: string = this.activeGroup.items[0];

  constructor(private cdr: ChangeDetectorRef) {
  }

  @Input()
  set group(value: string) {
    let slugify = new SlugifyPipe();
    this.activeGroup = this.groups.find(group => slugify.transform(group.name) === value) || this.groups[0];
    this.activeItem = this.activeGroup.items[0];
  }

  @Input()
  set item(value: string) {
    let slugify = new SlugifyPipe();
    this.activeItem = this.activeGroup.items.find(item => slugify.transform(item) === value) || this.activeGroup.items[0];
    this.cdr.detectChanges();
  }

  get content() {
    return `/assets/docs/${this.activeGroup.name.toLowerCase().replace(/ /g, '-')}/${this.activeItem.toLowerCase().replace(/ /g, '-')}.md`;
  }

  get breadcrumbs(): BreadcrumbItem[] {
    return [
      {label: 'Docs', url: '/docs'},
      {label: this.activeGroup.name, url: `/docs/${new SlugifyPipe().transform(this.activeGroup.name)}`},
      {label: this.activeItem, url: `/docs/${new SlugifyPipe().transform(this.activeGroup.name)}/${new SlugifyPipe().transform(this.activeItem)}`}
    ];
  }
}
