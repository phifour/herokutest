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
    var TreegraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TreegraphComponent = (function () {
                function TreegraphComponent() {
                }
                // answer:Answer;
                TreegraphComponent.prototype.ngOnInit = function () {
                    var treeData = this.graph;
                    var width = 1360, height = 500;
                    var tree = d3.layout.tree().size([height, width - 360]);
                    var diagonal = d3.svg.diagonal()
                        .projection(function (d) { return [d.y, d.x]; });
                    var svg = d3.select("#screen").append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(40,0)");
                    //      svg.selectAll("*").remove();
                    var nodes = tree.nodes(treeData), links = tree.links(nodes);
                    var link = svg.selectAll("path.link")
                        .data(links)
                        .enter().append("path")
                        .attr("class", "link")
                        .attr("d", diagonal);
                    var node = svg.selectAll("g.node")
                        .data(nodes)
                        .enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; }); //d.x
                    node.append("circle")
                        .attr("r", 4.5);
                    node.append("text")
                        .attr("dx", function (d) { return d.children ? -8 : 8; })
                        .attr("dy", 3)
                        .attr("text-anchor", function (d) { return d.children ? "end" : "start"; })
                        .text(function (d) { return d.name; });
                    var maxLength = 10;
                    var separation = 20;
                    var textX = 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TreegraphComponent.prototype, "graph", void 0);
                TreegraphComponent = __decorate([
                    core_1.Component({
                        selector: 'app-treegraph',
                        template: "\n  <h5>Tree Grapgh</h5>\n  <div id=\"screen\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreegraphComponent);
                return TreegraphComponent;
            }());
            exports_1("TreegraphComponent", TreegraphComponent);
        }
    }
});

//# sourceMappingURL=treegraph.component.js.map
