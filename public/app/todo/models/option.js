System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Option;
    return {
        setters:[],
        execute: function() {
            Option = (function () {
                function Option(type, volatility, r, S0, K) {
                    this.type = type;
                    this.volatility = volatility;
                    this.r = r;
                    this.S0 = S0;
                    this.K = K;
                }
                return Option;
            }());
            exports_1("Option", Option);
        }
    }
});

//# sourceMappingURL=option.js.map
