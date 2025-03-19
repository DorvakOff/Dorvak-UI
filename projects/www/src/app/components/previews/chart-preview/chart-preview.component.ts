import {Component, OnInit} from '@angular/core';
import {PreviewComponent, PreviewWithTsSnippet} from "../../../models/preview-component";
import {FormField} from "../../../models/form-field";
import {ChartConfig, ChartData} from "dorvak-ui";

@Component({
  selector: 'app-chart-preview',
  standalone: false,
  template: `
    <div class="flex flex-row gap-2 w-full h-full justify-center items-center">
      <dui-line-chart [config]="config" [data]="randomData" class="w-1/3"/>
      <dui-button (click)="generateRandomData()">Generate Random Data</dui-button>
    </div>
  `,
  host: {
    class: "h-full w-full"
  },
  styles: ``
})
export class ChartPreviewComponent implements PreviewComponent, PreviewWithTsSnippet, OnInit {

  fields: FormField[] = [];

  config: ChartConfig = {
    xAxis: {
      label: 'X Axis Title',
    },
    yAxis: {
      label: 'Y Axis Title',
    },
    legend: "Legend Title",
  }

  get codeSnippet(): string {
    return `<dui-line-chart [config]="config" [data]="data"/>`
  }

  get tsSnippet(): string {
    return `import {ChartConfig, ChartData} from "dorvak-ui";`
      + `\n\n`
      + `const config: ChartConfig = {`
      + `\n  xAxis: {`
      + `\n    label: 'X Axis Title',`
      + `\n  },`
      + `\n  yAxis: {`
      + `\n    label: 'Y Axis Title',`
      + `\n  }`
      + `\n  legend: "Legend Title",`
      + `\n}`
      + `\n\n`
      + `const data: ChartData[] = [`
      + `\n  { x: 1, y: 2, label: 'Label 1' },`
      + `\n  { x: 2, y: 3, label: 'Label 2' },`
      + `\n  { x: 3, y: 4, label: 'Label 3' },`
      + `\n]`
      + `\n`
  }

  randomData: ChartData[] = []

  ngOnInit() {
    this.generateRandomData();
  }

  generateRandomData() {
    this.randomData = Array.from(({length: 10}), (_, i) => ({
      x: i,
      y: Math.floor(Math.random() * 100),
      label: `Label ${i}`,
    }));
  }

}
