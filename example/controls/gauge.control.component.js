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
    var GaugeControlComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { NameListService } from '../shared/name-list/name-list.service';
            /**
            * This class represents the lazy loaded HomeComponent.
            */
            GaugeControlComponent = (function () {
                function GaugeControlComponent() {
                }
                GaugeControlComponent.prototype.ShowGauge = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], GaugeControlComponent.prototype, "ShowGauge", null);
                GaugeControlComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'control.gauge',
                        template: "\n    <h2>  Gaugh Chart</h2>\n    <div id=\"gauge_chart\" [chartData]=\"gauge_ChartData\" [chartOptions]= \"gauge_ChartOptions\" chartType=\"Gauge\" GoogleChart>\n    </div>           \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], GaugeControlComponent);
                return GaugeControlComponent;
            }());
            exports_1("GaugeControlComponent", GaugeControlComponent);
        }
    }
});
//# sourceMappingURL=gauge.control.component.js.map