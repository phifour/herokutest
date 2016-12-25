System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeSeries;
    return {
        setters:[],
        execute: function() {
            TimeSeries = (function () {
                function TimeSeries(name, points, problem, sol1, sol2, sol3, sol4, a1, a2, a3, a4) {
                    this.name = name;
                    this.points = points;
                    this.problem = problem;
                    this.sol1 = sol1;
                    this.sol2 = sol2;
                    this.sol3 = sol3;
                    this.sol4 = sol4;
                    this.a1 = a1;
                    this.a2 = a2;
                    this.a3 = a3;
                    this.a4 = a4;
                    this.ua1 = false;
                    this.ua2 = false;
                    this.ua3 = false;
                    this.ua4 = false;
                }
                return TimeSeries;
            }());
            exports_1("TimeSeries", TimeSeries);
        }
    }
});

//# sourceMappingURL=timeseries.js.map
