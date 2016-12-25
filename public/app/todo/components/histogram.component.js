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
    var HistogramComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HistogramComponent = (function () {
                function HistogramComponent() {
                }
                HistogramComponent.prototype.ngOnChanges = function (changes) {
                    var log = [];
                    this.update();
                    this.initgraph();
                    console.log('changes in histogram', changes);
                    // for (let propName in changes) {
                    //     console.log('changes',changes);
                    // // let changedProp = changes[propName];
                    // // let from = JSON.stringify(changedProp.previousValue);
                    // // let to =   JSON.stringify(changedProp.currentValue);
                    // // log.push( `${propName} changed from ${from} to ${to}`);
                    // }
                };
                HistogramComponent.prototype.update = function () {
                    d3.select("#histogram").selectAll("*").remove();
                };
                HistogramComponent.prototype.initgraph = function () {
                    var color = "steelblue";
                    // Generate a 1000 data points using normal distribution with mean=20, deviation=5
                    //var values = d3.range(1000).map(d3.random.normal(20, 5));
                    // A formatter for counts.
                    var formatCount = d3.format(",.0f");
                    var w = 480;
                    var h = 250;
                    var margin = { top: 20, right: 30, bottom: 30, left: 30 };
                    var width = w - margin.left - margin.right;
                    var height = h - margin.top - margin.bottom;
                    var max = d3.max(this.values);
                    var min = d3.min(this.values);
                    var x = d3.scale.linear()
                        .domain([min, max])
                        .range([0, width]);
                    // Generate a histogram using twenty uniformly-spaced bins.
                    var data = d3.layout.histogram()
                        .bins(x.ticks(20))(this.values);
                    var yMax = d3.max(data, function (d) { return d.length; });
                    var yMin = d3.min(data, function (d) { return d.length; });
                    var colorScale = d3.scale.linear()
                        .domain([yMin, yMax])
                        .range([d3.rgb(color).brighter(), d3.rgb(color).darker()]);
                    var y = d3.scale.linear()
                        .domain([0, yMax])
                        .range([height, 0]);
                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");
                    var svg = d3.select("#histogram").append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    var bar = svg.selectAll(".bar")
                        .data(data)
                        .enter().append("g")
                        .attr("class", "bar")
                        .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });
                    bar.append("rect")
                        .attr("x", 1)
                        .attr("width", (x(data[0].dx) - x(0)) - 1)
                        .attr("height", function (d) { return height - y(d.y); })
                        .attr("fill", function (d) { return colorScale(d.y); });
                    bar.append("text")
                        .attr("dy", ".75em")
                        .attr("y", -12)
                        .attr("x", (x(data[0].dx) - x(0)) / 2)
                        .attr("text-anchor", "middle")
                        .text(function (d) { return formatCount(d.y); });
                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);
                };
                HistogramComponent.prototype.ngOnInit = function () {
                    this.initgraph();
                    //this.title = "Hello World!";
                    //this.update();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HistogramComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HistogramComponent.prototype, "values", void 0);
                HistogramComponent = __decorate([
                    core_1.Component({
                        selector: 'app-histogram',
                        template: "\n    <h5> {{title}} </h5>\n    <div *ngIf=\"values.length > 0\" id=\"histogram\"></div>\n    <div *ngIf=\"values.length < 1\">\n        <h5>No data for histogram</h5>\n    </div>\n  ",
                        styles: ["\n        body {\n        font: 10px sans-serif;\n        }\n\n        .bar rect {\n        shape-rendering: crispEdges;\n        }\n\n        .bar text {\n        fill: #999999;\n        }\n\n        .axis path, .axis line {\n        fill: none;\n        stroke: #000;\n        shape-rendering: crispEdges;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HistogramComponent);
                return HistogramComponent;
            }());
            exports_1("HistogramComponent", HistogramComponent);
        }
    }
});

//# sourceMappingURL=histogram.component.js.map
