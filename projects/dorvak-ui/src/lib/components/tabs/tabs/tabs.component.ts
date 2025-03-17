import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {cn} from "../../../utils/utils";

@Component({
  selector: 'dui-tabs',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex flex-col w-full overflow-y-auto">
      <div
        class="flex flex-row gap-1 border-b-4 border-b-muted w-full"
        [class.justify-start]="align === 'left'"
        [class.justify-center]="align === 'center'"
        [class.justify-end]="align === 'right'"
      >
        @for (tab of tabs; track $index) {
          <button (click)="selectTab(tab)"
                  [class]="cn('relative px-4 py-2 cursor-pointer rounded-t-md disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground font-semibold', 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background outline-none transition-all', 'after:content-[\\' \\'] after:h-1 after:w-full after:absolute after:-bottom-1 after:left-0 after:right-0 after:rounded-full enabled:hover:after:bg-primary', tab.selected && 'after:bg-primary')"
                  [disabled]="tab.disabled"
          >
            {{ tab.title }}
          </button>
        }
      </div>
    </div>
    <div
      class="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <ng-content/>
    </div>
  `
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Input() align: 'left' | 'center' | 'right' = 'left';

  @Input()
  set selected(selected: string | undefined) {
    this.selectedTabTitle = selected;
  }

  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  private selectedTabTitle: string | undefined = undefined;

  protected selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
    this.tabChange.emit(tab.title);
  }

  ngAfterContentInit()  {
    const selectedTab = this.tabs.find(tab => tab.title.toLowerCase() === this.selectedTabTitle?.toLowerCase()) ?? this.tabs.first;
    this.selectTab(selectedTab);
  }

  protected readonly cn = cn;
}
