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
    var EquationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EquationComponent = (function () {
                function EquationComponent() {
                }
                EquationComponent.prototype.ngOnInit = function () {
                    // console.log('seq',this.seq,this.inputValue);
                    // if (this.seq==1){
                    //   var seq = 1;
                    // }else{
                    //   var seq = 2
                    // },
                    MathJax.Hub.Typeset();
                    // var seq = this.seq;
                    // var self = this;
                    // MathJax.Hub.Queue(
                    //   ["Typeset", MathJax.Hub, "result"],
                    //   function () {
                    //   self.resultElement = MathJax.Hub.getAllJax("result")[seq];
                    //     self.updateResult();
                    //   }
                    // );
                };
                EquationComponent.prototype.updateResult = function () {
                    console.log('update');
                    //if (MathJax.Hub.getAllJax("result")[this.seq] != null) {
                    MathJax.Hub.Queue(["Text", this.resultElement, this.inputValue]);
                    //}
                };
                __decorate([
                    core_1.ViewChild('result'), 
                    __metadata('design:type', core_1.ElementRef)
                ], EquationComponent.prototype, "result", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EquationComponent.prototype, "inputValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], EquationComponent.prototype, "seq", void 0);
                EquationComponent = __decorate([
                    core_1.Component({
                        selector: 'app-equation',
                        template: "{{inputValue}}\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EquationComponent);
                return EquationComponent;
            }());
            exports_1("EquationComponent", EquationComponent);
        }
    }
});

//# sourceMappingURL=equation.component.js.map
