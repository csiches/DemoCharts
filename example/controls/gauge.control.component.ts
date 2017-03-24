import { Component, Input } from '@angular/core';

//import { NameListService } from '../shared/name-list/name-list.service';

/**
* This class represents the lazy loaded HomeComponent.
*/
@Component({
    //moduleId: module.id,
    selector: 'control.gauge',
    template: 
    `
    <h2>  Gaugh Chart</h2>
    <div id="gauge_chart" [chartData]="gauge_ChartData" [chartOptions]= "gauge_ChartOptions" chartType="Gauge" GoogleChart>
    </div>           
    `
    //templateUrl: 'home.component.html',
    //styleUrls: ['home.component.css'],
})
export class GaugeControlComponent 
{
    @Input()

    /**
     * ShowGauge
     */
    public ShowGauge() {
        
    }
    

}