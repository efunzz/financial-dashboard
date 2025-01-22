import { Component } from '@angular/core';
import {ChartModule} from 'primeng/chart'
@Component({
  selector: 'app-chart',
  imports: [ChartModule],
  template: `
  <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]"  />
  

  `,
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [
        {
          label: 'Sales',
          data: [50, 75, 60],
          backgroundColor: '#95CCA2',  // Blue
          borderColor: '#95CCA2',
          borderWidth: 2,
        },
        {
          label: 'Expenses',
          data: [40, 65, 50],
          backgroundColor: '#F0FCF0',  // Red
          borderColor: '#F0FCF0',
          borderWidth: 2,
        }
      ]
    };
    
    this.options = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,  // Enable stacking on the x-axis (horizontal bars)
        },
        y: {
          stacked: true,  // Enable stacking on the y-axis
        }
      },
      plugins: {
        legend: {
          position: 'top',  // Customize legend position
        },
      }
    };
  }
}