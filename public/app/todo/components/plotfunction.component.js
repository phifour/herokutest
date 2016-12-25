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
    var PlotfunctionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlotfunctionComponent = (function () {
                function PlotfunctionComponent() {
                }
                PlotfunctionComponent.prototype.ngOnChanges = function (changes) {
                    var log = [];
                    this.update();
                    console.log('changes', changes);
                    // for (let propName in changes) {
                    //     console.log('changes',changes);
                    // // let changedProp = changes[propName];
                    // // let from = JSON.stringify(changedProp.previousValue);
                    // // let to =   JSON.stringify(changedProp.currentValue);
                    // // log.push( `${propName} changed from ${from} to ${to}`);
                    // }
                };
                PlotfunctionComponent.prototype.update = function () {
                    d3.select("#plotscreen").selectAll("*").remove();
                    var data = this.values;
                    var margin = { top: 30, right: 20, bottom: 30, left: 50 }, width = 600 - margin.left - margin.right, height = 270 - margin.top - margin.bottom;
                    // Parse the date / time
                    var parseDate = d3.time.format("%d-%b-%y").parse;
                    var ymin = d3.min(data, function (d) { return d.close; });
                    var ymax = d3.max(data, function (d) { return d.close; });
                    //x.domain([0, d3.max(data, function (d) { return d.date; })]);
                    //y.domain([0, d3.max(data, function (d) { return d.close; })]);
                    console.log('values', this.values);
                    // Set the ranges
                    var x = d3.time.scale().domain(d3.extent(data, function (d) { return d.date; }))
                        .range([0, width]);
                    var y = d3.scale.linear()
                        .domain([ymin, ymax])
                        .range([height, 0]);
                    // Define the axes
                    var xAxis = d3.svg.axis().scale(x)
                        .orient("bottom").ticks(5);
                    var yAxis = d3.svg.axis().scale(y)
                        .orient("left").ticks(5);
                    // Define the line
                    var valueline = d3.svg.line()
                        .x(function (d) { return x(d.date); })
                        .y(function (d) { return y(d.close); });
                    // Adds the svg canvas
                    var svg = d3.select("#plotscreen")
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    // Add the valueline path.
                    svg.append("path")
                        .attr("class", "line")
                        .attr("d", valueline(data));
                    // Add the X Axis
                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);
                    // Add the Y Axis
                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis);
                };
                PlotfunctionComponent.prototype.initgraph = function () {
                    var margin = { top: 30, right: 20, bottom: 30, left: 50 }, width = 600 - margin.left - margin.right, height = 270 - margin.top - margin.bottom;
                    // Parse the date / time
                    var parseDate = d3.time.format("%d-%b-%y").parse;
                    // Set the ranges
                    var x = d3.time.scale().range([0, width]);
                    var y = d3.scale.linear().range([height, 0]);
                    // Define the axes
                    var xAxis = d3.svg.axis().scale(x)
                        .orient("bottom").ticks(5);
                    var yAxis = d3.svg.axis().scale(y)
                        .orient("left").ticks(5);
                    // Define the line
                    var valueline = d3.svg.line()
                        .x(function (d) { return x(d.date); })
                        .y(function (d) { return y(d.close); });
                    // Adds the svg canvas
                    var svg = d3.select("#plotscreen")
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                };
                PlotfunctionComponent.prototype.ngOnInit = function () {
                    //this.initgraph();
                    this.update();
                    // var data = [{date:'1-May-12',close:58.13}, {date:'30-Apr-12',close:53.98}];
                    //        });
                    // Get the data
                    // d3.csv("../../dependencies/data.csv", function (error, data) {
                    //     data.forEach(function (d) {
                    //         d.date = parseDate(d.date);
                    //         d.close = +d.close;
                    //     });
                    //     // Scale the range of the data
                    //     x.domain(d3.extent(data, function (d) { return d.date; }));
                    //     y.domain([0, d3.max(data, function (d) { return d.close; })]);
                    //     // Add the valueline path.
                    //     svg.append("path")
                    //         .attr("class", "line")
                    //         .attr("d", valueline(data));
                    //     // Add the X Axis
                    //     svg.append("g")
                    //         .attr("class", "x axis")
                    //         .attr("transform", "translate(0," + height + ")")
                    //         .call(xAxis);
                    //     // Add the Y Axis
                    //     svg.append("g")
                    //         .attr("class", "y axis")
                    //         .call(yAxis);
                    // });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlotfunctionComponent.prototype, "values", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PlotfunctionComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PlotfunctionComponent.prototype, "usedates", void 0);
                PlotfunctionComponent = __decorate([
                    core_1.Component({
                        selector: 'app-plotfunction',
                        template: "\n    <h5>{{title}}</h5>\n    <div *ngIf=\"values.length > 0\" id=\"plotscreen\"></div>\n    <div *ngIf=\"values.length < 1\">\n        <h5>No data to plot</h5>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlotfunctionComponent);
                return PlotfunctionComponent;
            }());
            exports_1("PlotfunctionComponent", PlotfunctionComponent);
        }
    }
});

//# sourceMappingURL=plotfunction.component.js.map
