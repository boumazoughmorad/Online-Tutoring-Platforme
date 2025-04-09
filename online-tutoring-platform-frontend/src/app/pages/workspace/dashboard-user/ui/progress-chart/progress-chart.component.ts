import { Component, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-progress-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.css']
})
export class ProgressChartComponent implements OnChanges, AfterViewInit {
  @Input() data: any;
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;
  
  chart: any;
  private initialized = false;

  ngAfterViewInit() {
    this.initialized = true;
    this.renderChart();
  }

  ngOnChanges() {
    if (this.initialized) {
      this.renderChart();
    }
  }

  renderChart() {
    if (!this.data || !this.chartCanvas?.nativeElement) return;
    
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: this.data.datasets.map((dataset: any) => ({
          ...dataset,
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.7
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: ${context.raw}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        }
      }
    });
  }
}