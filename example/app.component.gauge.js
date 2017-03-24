System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GaugeChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GaugeChartComponent = (function () {
                function GaugeChartComponent() {
                    this.gauge_ChartData = [];
                    this.gauge_ChartOptions = {
                        width: 400, height: 120,
                        redFrom: 90, redTo: 100,
                        yellowFrom: 75, yellowTo: 90,
                        minorTicks: 5
                    };
                }
                GaugeChartComponent.prototype.ngOnInit = function () {
                    this.fillGaugechart();
                };
                GaugeChartComponent.prototype.fillGaugechart = function () {
                    this.gauge_ChartData =
                        [
                            ['Label', 'Value'],
                            ['CPU', 1500],
                            ['Memory', 80],
                            ['Usage', 30]
                        ];
                };
                GaugeChartComponent = __decorate([
                    core_1.Component({
                        selector: 'gauge-chart',
                        template: "\n    <h2>  Gaugh Chart</h2>\n    <div id=\"gauge_chart\" [chartData]=\"gauge_ChartData\" [chartOptions]= \"gauge_ChartOptions\" chartType=\"Gauge\" GoogleChart>\n    </div>    \n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], GaugeChartComponent);
                return GaugeChartComponent;
            }());
            exports_1("GaugeChartComponent", GaugeChartComponent);
        }
    }
});
//# sourceMappingURL=app.component.gauge.js.map