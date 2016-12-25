System.register(['@angular/core', "../models/mathassignment"], function(exports_1, context_1) {
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
    var core_1, mathassignment_1;
    var MathassignmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mathassignment_1_1) {
                mathassignment_1 = mathassignment_1_1;
            }],
        execute: function() {
            MathassignmentComponent = (function () {
                // resultElement: ElementJax;
                // @ViewChild('result') result: ElementRef;
                function MathassignmentComponent() {
                    this.view_ready = false;
                }
                // answer:Answer;
                MathassignmentComponent.prototype.setcolor = function (input) {
                    console.log('input', input);
                    if (input) {
                        return "list-group-item list-group-item-success";
                    }
                    else {
                        return "list-group-item list-group-item-danger";
                    }
                };
                MathassignmentComponent.prototype.continue = function () {
                    MathJax.Hub.Typeset();
                };
                MathassignmentComponent.prototype.ngOnInit = function () {
                    setTimeout(function () {
                        console.log('finished loading');
                        MathJax.Hub.Typeset();
                        // run jQuery stuff here
                    }, 0);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', mathassignment_1.MathAssignment)
                ], MathassignmentComponent.prototype, "mathassignment", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MathassignmentComponent.prototype, "mode", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MathassignmentComponent.prototype, "pos", void 0);
                MathassignmentComponent = __decorate([
                    core_1.Component({
                        selector: 'app-assignment',
                        template: "\n    <div *ngIf=\"mode==0\" class=\"container\">\n            <h4>Problemset {{pos}}</h4>\n            <h4>{{mathassignment['problem']}}</h4>\n            <ul class=\"list-group\">\n            <li class=\"list-group-item\"><input type=\"checkbox\" [(ngModel)]=\"mathassignment.ua1\">{{mathassignment['sol1']}}</li>\n            <li class=\"list-group-item\"><input type=\"checkbox\" [(ngModel)]=\"mathassignment.ua2\">{{mathassignment['sol2']}} </li>\n            <li class=\"list-group-item\"><input type=\"checkbox\" [(ngModel)]=\"mathassignment.ua3\">{{mathassignment['sol3']}}</li>\n            <li class=\"list-group-item\"><input type=\"checkbox\" [(ngModel)]=\"mathassignment.ua4\">{{mathassignment['sol4']}}</li>\n            </ul>\n    </div>\n\n    <div *ngIf=\"mode==1\" class=\"container\">\n            <h4>Problemset {{pos}}</h4>\n            <h4>{{mathassignment['problem']}}</h4>\n            <ul class=\"list-group\">\n            <li *ngIf=\"mathassignment['a1']==true\" class=\"list-group-item list-group-item-success\">{{mathassignment['sol1']}}</li>\n            <li *ngIf=\"mathassignment['a1']==false||undefined\" class=\"list-group-item list-group-item-danger\">{{mathassignment['sol1']}}</li>\n            <li *ngIf=\"mathassignment['a2']==true\" class=\"list-group-item list-group-item-success\">{{mathassignment['sol2']}}</li>\n            <li *ngIf=\"mathassignment['a2']==false||undefined\" class=\"list-group-item list-group-item-danger\">{{mathassignment['sol2']}}</li>\n            <li *ngIf=\"mathassignment['a3']==true\" class=\"list-group-item list-group-item-success\">{{mathassignment['sol3']}}</li>\n            <li *ngIf=\"mathassignment['a3']==false||undefined\" class=\"list-group-item list-group-item-danger\">{{mathassignment['sol3']}}</li>\n            <li *ngIf=\"mathassignment['a4']==true\" class=\"list-group-item list-group-item-success\">{{mathassignment['sol4']}}</li>\n            <li *ngIf=\"mathassignment['a4']==false||undefined\" class=\"list-group-item list-group-item-danger\">{{mathassignment['sol4']}}</li>\n            </ul>\n    </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MathassignmentComponent);
                return MathassignmentComponent;
            }());
            exports_1("MathassignmentComponent", MathassignmentComponent);
        }
    }
});

//# sourceMappingURL=mathassignment.component.js.map
