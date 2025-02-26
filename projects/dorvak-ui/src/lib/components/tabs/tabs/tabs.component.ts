import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {cn} from "../../../utils/utils";

@Component({
  selector: 'dui-tabs',
  imports: [],
  template: `
    <div class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground w-full">
      @for (tab of tabs; track $index) {
        <button (click)="selectTab(tab)"
                [class]="cn('select-none inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full', tab.selected && 'bg-background text-foreground shadow')"
                [disabled]="tab.disabled"
        >
          <span>{{ tab.title }}</span>
        </button>
      }
    </div>
    <div
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <ng-content/>
    </div>
  `,
  styles: ``
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  selectedTab: TabComponent | null = null;

  selectTab(tab: TabComponent) {
    this.selectedTab = tab;
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
  }

  ngAfterContentInit() {
    this.selectedTab = this.tabs.first;
    if (this.selectedTab) {
      this.selectedTab.selected = true;
    }
  }

  protected readonly cn = cn;
}
