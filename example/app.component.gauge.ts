import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gauge-chart',
    template: 
    `
    <h2>  Gaugh Chart</h2>
    <div id="gauge_chart" [chartData]="gauge_ChartData" [chartOptions]= "gauge_ChartOptions" chartType="Gauge" GoogleChart>
    </div>    

    `
    
    

})
export class GaugeChartComponent implements OnInit {
    constructor() { }

    ngOnInit() { 

        this.fillGaugechart();

    }


    public fillGaugechart() 
    {
        
        this.gauge_ChartData = 
            [
                ['Label', 'Value'],
                ['CPU', 1500],
                ['Memory', 80],
                ['Usage', 30]
            ]
    }


    public gauge_ChartData = 
    [
        // ['Label', 'Value'],
        // ['CPU', 120],
        // ['Memory', 80],
        // ['Usage', 500]
    ];
    public gauge_ChartOptions = {
        width: 400, height: 120,

        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };


}