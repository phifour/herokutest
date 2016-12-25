System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MonteCarlo;
    return {
        setters:[],
        execute: function() {
            MonteCarlo = (function () {
                function MonteCarlo(opt) {
                    this.o = opt;
                }
                MonteCarlo.prototype.gaussian = function (mean, stdev) {
                    var y2;
                    var use_last = false;
                    return function () {
                        var y1;
                        if (use_last) {
                            y1 = y2;
                            use_last = false;
                        }
                        else {
                            var x1, x2, w;
                            do {
                                x1 = 2.0 * Math.random() - 1.0;
                                x2 = 2.0 * Math.random() - 1.0;
                                w = x1 * x1 + x2 * x2;
                            } while (w >= 1.0);
                            w = Math.sqrt((-2.0 * Math.log(w)) / w);
                            y1 = x1 * w;
                            y2 = x2 * w;
                            use_last = true;
                        }
                        var retval = mean + stdev * y1;
                        if (retval > 0) {
                            return retval;
                        }
                        else {
                            return -retval;
                        }
                    };
                };
                MonteCarlo.prototype.geoBrownian = function (T, N) {
                    var h = T / N;
                    var sqrth = Math.sqrt(h);
                    var w = [];
                    var grn = this.gaussian(0, 1);
                    var sum = this.o.S0;
                    for (var i = 0; i < N; i++) {
                        var rn = grn();
                        var x = h * i * (this.o.r - 0.5 * this.o.volatility * this.o.volatility) + rn * this.o.volatility * sqrth;
                        sum = sum + x;
                    }
                    return sum;
                };
                MonteCarlo.prototype.geoBrownian_series = function (T, N) {
                    var h = T / N;
                    var sqrth = Math.sqrt(h);
                    var w = [];
                    var grn = this.gaussian(0, 1);
                    var sum = this.o.S0;
                    var series = [];
                    for (var i = 0; i < N; i++) {
                        series.push({ date: i, close: sum });
                        var rn = grn();
                        var x = h * i * (this.o.r - 0.5 * this.o.volatility * this.o.volatility) + rn * this.o.volatility * sqrth;
                        sum = sum + x;
                    }
                    return series;
                };
                MonteCarlo.prototype.max = function (input) {
                    if (input < 0) {
                        return 0;
                    }
                    else {
                        return input;
                    }
                };
                MonteCarlo.prototype.MonteCarlo = function (T, N, Nsteps, payoff) {
                    var profit = [];
                    for (var i = 0; i < Nsteps; i++) {
                        var S_at_T = this.geoBrownian(T, N);
                        profit.push(payoff(S_at_T));
                    }
                    return profit;
                };
                MonteCarlo.prototype.priceOption = function (T, N, Nsteps, payoff) {
                    var result = {
                        price: 0,
                        Nsteps: Nsteps
                    };
                    var profit = [];
                    for (var i = 0; i < Nsteps; i++) {
                        var S_at_T = this.geoBrownian(T, N);
                        profit.push(payoff(S_at_T));
                    }
                    var sum = 0;
                    profit.forEach(function (element) {
                        sum = sum + element;
                    });
                    result.price = Math.exp(-this.o.r * T) * (sum / profit.length);
                    result.Nsteps = Nsteps;
                    return result;
                };
                return MonteCarlo;
            }());
            exports_1("MonteCarlo", MonteCarlo);
        }
    }
});

//# sourceMappingURL=montecarlo.js.map
