import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexLegend, ApexFill } from 'ng-apexcharts';
import { OverviewChartComponent } from '../overview-chart/overview-chart.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // chart 1
  chartSeries: ApexAxisChartSeries = [
    {
      name: "Grils",
      data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43]
    },
    {
      name: "Boys",
      data: [13, 23, 20, 8, 13, 27,44, 55, 41, 67, 22, 43]
    }
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  };

  chartDataLabels: ApexDataLabels = {};

  chartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false
    }
  };

  chartResponsive: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ];

  chartXAxis: ApexXAxis = {
    type: "category",
    categories: [
      "01/2023",
      "02/2023",
      "03/2023",
      "04/2023",
      "05/2023",
      "06/2023",
      "07/2023",
      "08/2023",
      "09/2023",
      "10/2023",
      "11/2023",
      "12/2023"
    ]
  };

  chartLegend: ApexLegend = {
    position: "right",
    offsetY: 40
  };

  chartFill: ApexFill = {
    opacity: 1
  };



  constructor() {
  }

  ngOnInit(): void {
  }
}
