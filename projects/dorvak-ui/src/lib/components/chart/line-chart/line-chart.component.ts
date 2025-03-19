import {Component, Input, ViewEncapsulation} from '@angular/core';

export type ChartConfig = {
  width?: number;
  height?: number;
  padding?: number;
  showArea?: boolean;
  grid?: {
    show?: boolean;
    xDivisions?: number;
    yDivisions?: number;
  };
  xAxis?: {
    label?: string;
  },
  yAxis?: {
    label?: string;
  };
  legend?: string
}

export type ChartData = {
  x: number;
  y: number;
  label?: string;
}

const defaultConfig: ChartConfig = {
  width: 1600,
  height: 900,
  padding: 30,
  showArea: true,
  grid: {
    show: true,
    xDivisions: 9,
    yDivisions: 5
  },
}

@Component({
  selector: 'dui-line-chart',
  imports: [],
  template: `
    <div class="aspect-video h-full w-full">
      <svg class="w-full h-full" [attr.viewBox]="'0 0 ' + config.width! + ' ' + config.height!">
        @if (config.legend; as legend) {
          <text class="fill-muted-foreground text-xl" [attr.x]="config.width! / 2" [attr.y]="config.padding! / 2" text-anchor="middle">
            {{ legend }}
          </text>
        }

        <!-- Axes -->
        <!-- X Axis -->
        @if (config.xAxis?.label; as label) {
          <text class="fill-muted-foreground" [attr.x]="config.width! / 2" [attr.y]="config.height! - config.padding! / 3" text-anchor="middle">
            {{ label }}
          </text>
        }
        <line class="stroke-primary" [attr.x1]="config.padding!" [attr.x2]="config.padding!" y1="0" [attr.y2]="config.height! - config.padding!" />

        <!-- Y Axis -->
        @if (config.yAxis?.label; as label) {
          <text class="fill-muted-foreground" transform="rotate(-90, 0, 0)" [attr.x]="-config.height! / 2" [attr.y]="config.padding! - config.padding! / 2" text-anchor="middle">
            {{ label }}
          </text>
        }
        <line class="stroke-primary" [attr.x1]="config.padding!" [attr.x2]="config.width!" [attr.y1]="config.height! - config.padding!" [attr.y2]="config.height! - config.padding!" />

        <!-- Grid -->
        @if (config.grid?.show) {
          <g>
            <!-- Horizontal grid lines -->
            @for (i of getYGridIndices(); track i) {
              <line
                class="stroke-muted-foreground/20"
                [attr.x1]="config.padding!"
                [attr.x2]="config.width!"
                [attr.y1]="getYGridPosition(i)"
                [attr.y2]="getYGridPosition(i)"
                stroke-dasharray="4 4"
              />
              <!-- Y value label -->
              <text
                class="fill-muted-foreground text-xs"
                [attr.x]="config.padding! - 5"
                [attr.y]="getYGridPosition(i) + 4"
                text-anchor="end">
                {{ formatValue(getYValueAtGridPosition(i)) }}
              </text>
            }

            <!-- Vertical grid lines -->
            @for (i of getXGridIndices(); track i) {
              <line
                class="stroke-muted-foreground/20"
                [attr.x1]="getXGridPosition(i)"
                [attr.y1]="0"
                [attr.x2]="getXGridPosition(i)"
                [attr.y2]="config.height! - config.padding!"
                stroke-dasharray="4 4"
              />
              <!-- X value label -->
              <text
                class="fill-muted-foreground text-xs"
                [attr.x]="getXGridPosition(i)"
                [attr.y]="config.height! - (config.padding! - 15)"
                text-anchor="middle">
                {{ formatValue(getXValueAtGridPosition(i)) }}
              </text>
            }
          </g>
        }

        @if (config.showArea) {
          <!-- Area fill under line -->
          <path class="fill-primary/20" [attr.d]="getAreaPath()" />
        }

        <!-- Path connecting points -->
        <path class="stroke-primary" [attr.d]="getPath()" fill="none" stroke-width="2" />


        <!-- Points -->
        @for (value of data; track $index) {
          <g class="group cursor-pointer">
            <!-- Guide lines on hover -->
            <g class="hidden group-hover:block">
              <line class="stroke-transparent group-hover:stroke-primary transition-colors duration-300 ease-in-out" [attr.x1]="getScaledX(value.x)" [attr.y1]="getScaledY(value.y)" [attr.x2]="getScaledX(value.x)" [attr.y2]="config.height! - config.padding!" />
              <text class="fill-transparent group-hover:fill-primary transition-colors duration-300 ease-in-out text-xs" [attr.x]="getScaledX(value.x)" [attr.y]="config.height! - config.padding! + 20" text-anchor="middle">
                {{ value.x }}
              </text>
              <line class="stroke-transparent group-hover:stroke-primary transition-colors duration-300 ease-in-out" [attr.x1]="config.padding!" [attr.y1]="getScaledY(value.y)" [attr.x2]="getScaledX(value.x)" [attr.y2]="getScaledY(value.y)" />
              <text class="fill-transparent group-hover:fill-primary transition-colors duration-300 ease-in-out text-xs" [attr.x]="config.padding! - 20" [attr.y]="getScaledY(value.y)" text-anchor="end">
                {{ value.y }}
              </text>
            </g>

            <!-- Circle -->
            <circle [attr.cx]="getScaledX(value.x)" [attr.cy]="getScaledY(value.y)" r="5" class="fill-primary"/>
          </g>
        }
      </svg>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent {

  private _config: ChartConfig = defaultConfig;

  @Input()
  set config(value: ChartConfig) {
    this._config = {...defaultConfig, ...value};
  }

  get config(): ChartConfig {
    return this._config;
  }

  @Input() data: ChartData[] = [];


  get maxX() {
    if (this.data.length === 0) return 0;
    return Math.max(...this.data.map(value => value.x));
  }

  get maxY() {
    if (this.data.length === 0) return 0;
    return Math.max(...this.data.map(value => value.y));
  }

  getScaledX(x: number): number {
    const availableWidth = this.config.width! - (this.config.padding! * 2);
    const xRange = this.maxX;
    return this.config.padding! + (x / xRange) * availableWidth;
  }

  getScaledY(y: number): number {
    const availableHeight = this.config.height! - (this.config.padding! * 2);
    const yRange = this.maxY;
    return this.config.height! - (this.config.padding! + (y / yRange) * availableHeight);
  }

  getPath(): string {
    if (this.data.length === 0) return '';
    return [{x: 0, y: 0}, ...this.data].map((value, index) => {
      const x = this.getScaledX(value.x);
      const y = this.getScaledY(value.y);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }

  getAreaPath(): string {
    if (this.data.length === 0) return '';

    // Start with the line path
    const linePath = this.getPath();

    // Add points to close the path down to x-axis and back
    const lastValue = this.data[this.data.length - 1];
    const firstValue = this.data[0];
    const lastX = this.getScaledX(lastValue.x);
    const firstX = this.getScaledX(firstValue.x);
    const xAxisY = this.config.height! - this.config.padding!;

    return `${linePath} L ${lastX} ${xAxisY} L ${firstX} ${xAxisY} Z`;
  }

  getXGridIndices(): number[] {
    const divisions = this.config.grid?.xDivisions || 0;
    return Array.from({ length: divisions + 1 }, (_, i) => i);
  }

  getYGridIndices(): number[] {
    const divisions = this.config.grid?.yDivisions || 0;
    return Array.from({ length: divisions + 1 }, (_, i) => i);
  }

  getXGridPosition(index: number): number {
    const divisions = this.config.grid?.xDivisions || 1;
    const availableWidth = this.config.width! - (this.config.padding! * 2);
    return this.config.padding! + (index / divisions) * availableWidth;
  }

  getYGridPosition(index: number): number {
    const divisions = this.config.grid?.yDivisions || 1;
    const availableHeight = this.config.height! - (this.config.padding! * 2);
    const step = availableHeight / divisions;
    return this.config.height! - (this.config.padding! + index * step);
  }

  getXValueAtGridPosition(index: number): number {
    const divisions = this.config.grid?.xDivisions || 1;
    return (index / divisions) * this.maxX;
  }

  getYValueAtGridPosition(index: number): number {
    const divisions = this.config.grid?.yDivisions || 1;
    return (index / divisions) * this.maxY;
  }

  // Format number to avoid too many decimal places
  formatValue(value: number): string {
    return value % 1 === 0 ? value.toString() : value.toFixed(1);
  }

}
