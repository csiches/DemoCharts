import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {GaugeChartComponent} from './app.component.gauge';
import {GoogleChart} from '../directives/angular2-google-chart.directive';
@NgModule({
    declarations: [AppComponent,GoogleChart,GaugeChartComponent],
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
