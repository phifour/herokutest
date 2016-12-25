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
    var AssignmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mathassignment_1_1) {
                mathassignment_1 = mathassignment_1_1;
            }],
        execute: function() {
            AssignmentComponent = (function () {
                function AssignmentComponent() {
                }
                AssignmentComponent.prototype.ngOnInit = function () {
                    // this.answer = new Answer();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', mathassignment_1.MathAssignment)
                ], AssignmentComponent.prototype, "mathassignment", void 0);
                AssignmentComponent = __decorate([
                    core_1.Component({
                        selector: 'new-assignment',
                        template: "\n      <div class=\"container\">\n        <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n        Problemset (LaTeX):             \n        <span class=\"input-group-addon beautiful\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mathassignment.problem\">\n        </span>\n        <label for=\"frmtype\">Points</label>\n            <select aria-label=\"Search by type\" class=\"form-control\" [(ngModel)]=\"mathassignment.points\" id=\"frmtype\">\n                <option>15</option>\n                <option>30</option>\n                <option>60</option>\n            </select>\n        </div>\n\n            <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n            <span class=\"input-group-addon beautiful\">\n                Correct <input type=\"checkbox\" [(ngModel)]=\"mathassignment.a1\">\n            </span>\n            <span class=\"input-group-addon beautiful\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mathassignment.sol1\">\n            </span>     \n            </li>\n            <li class=\"list-group-item\">\n            <span class=\"input-group-addon beautiful\">\n                Correct <input type=\"checkbox\" [(ngModel)]=\"mathassignment.a2\">\n            </span>\n            <span class=\"input-group-addon beautiful\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mathassignment.sol2\">\n            </span>     \n            </li>\n            <li class=\"list-group-item\">\n            <span class=\"input-group-addon beautiful\">\n                Correct <input type=\"checkbox\" [(ngModel)]=\"mathassignment.a3\">\n            </span>\n            <span class=\"input-group-addon beautiful\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mathassignment.sol3\">\n            </span>     \n            </li>\n            <li class=\"list-group-item\">\n            <span class=\"input-group-addon beautiful\">\n                Correct <input type=\"checkbox\" [(ngModel)]=\"mathassignment.a4\">\n            </span>\n            <span class=\"input-group-addon beautiful\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mathassignment.sol4\">\n            </span>     \n            </li>\n            </ul>\n\n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AssignmentComponent);
                return AssignmentComponent;
            }());
            exports_1("AssignmentComponent", AssignmentComponent);
        }
    }
});

//# sourceMappingURL=newassignment.component.js.map
