import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {cn} from "../../utils/utils";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'dui-calendar',
  encapsulation: ViewEncapsulation.None,
  imports: [
    ButtonComponent,
    TitleCasePipe
  ],
  template: `
    <div class="p-4 gap-2 rounded-xl border bg-card text-card-foreground shadow flex flex-col min-w-[300px]">
      <div class="flex justify-between items-center">
        <dui-button variant="ghost" size="icon" icon="chevron-left" (click)="currentDate.setMonth(currentDate.getMonth() - 1)" [disabled]="isPrevDisabled()" #button/>
        <span class="font-bold capitalize">{{ monthName }} {{ currentDate.getFullYear() }}</span>
        <dui-button variant="ghost" size="icon" icon="chevron-right" (click)="currentDate.setMonth(currentDate.getMonth() + 1)" [disabled]="isNextDisabled()"/>
      </div>
      <div class="grid grid-cols-7 gap-2">
        @for (day of days; track day) {
          <div class="text-sm text-center text-muted-foreground">{{ day | titlecase }}</div>
        }
        @for (day of daysToDisplay; track $index) {
          <button
            [class]="cn('p-2 h-10 w-10 text-sm text-center rounded-md enabled:hover:bg-accent enabled:hover:text-accent-foreground disabled:cursor-not-allowed disabled:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-all outline-none',
              isToday(day.date) && 'bg-accent text-accent-foreground',
              day.date.getMonth() !== currentDate.getMonth() && 'text-muted-foreground',
              day.date.getTime() === value.getTime() && 'bg-primary text-primary-foreground enabled:hover:bg-primary enabled:hover:text-primary-foreground'
            )"
            [disabled]="(min && day.date < min) || (max && day.date > max)"
            (click)="value = day.date"
          >
            {{ day.day }}
          </button>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class CalendarComponent implements OnInit {

  protected days: string[] = Array.from({length: 7}, (_, i) => new Date(0, 0, i).toLocaleString('default', { weekday: 'short' }));
  private _value = new Date();

  @Input() min: Date | undefined;
  @Input() max: Date | undefined;

  @ViewChild('button') button!: ButtonComponent;

  @Input()
  set value(date: Date) {
    this._value = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    this.valueChange.emit(date);
  }

  get value() {
    return this._value;
  }

  @Output()
  private valueChange: EventEmitter<Date> = new EventEmitter<Date>();

  protected currentDate = new Date();

  ngOnInit() {
    this.currentDate = this.value;
  }

  get monthName() {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  get daysToDisplay() {
    let year = this.currentDate.getFullYear();
    let month = this.currentDate.getMonth();

    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    let days: { day: number; date: Date}[] = [];

    // Add the days of the previous month
    for (let i = monthlastdate - dayone + 1; i <= monthlastdate; i++) {
      days.push({ day: i, date: new Date(year, month - 1, i)});
    }

    // Add the days of the current month
    for (let i = 1; i <= lastdate; i++) {
      days.push({ day: i, date: new Date(year, month, i)});
    }

    // Add the days of the next month
    for (let i = 1; i <= 6 - dayend; i++) {
      days.push({ day: i, date: new Date(year, month + 1, i)});
    }

    return days;
  }

  protected isPrevDisabled() {
    return this.min && this.currentDate.getFullYear() === this.min.getFullYear() && this.currentDate.getMonth() <= this.min.getMonth();
  }

  protected isNextDisabled() {
    return this.max && this.currentDate.getFullYear() === this.max.getFullYear() && this.currentDate.getMonth() >= this.max.getMonth();
  }

  protected isToday(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() === today.getTime();
  }

  protected readonly cn = cn;
}
