System.register(["@angular/core", "../models/mathassignment", '../services/math.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, core_2, mathassignment_1, math_service_1, router_1;
    var MathtestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mathassignment_1_1) {
                mathassignment_1 = mathassignment_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MathtestComponent = (function () {
                function MathtestComponent(route, router, mathservice) {
                    this.route = route;
                    this.router = router;
                    this.mathservice = mathservice;
                    this.ii = 0;
                }
                MathtestComponent.prototype.loadTest = function () {
                    console.log('Loading Test');
                };
                MathtestComponent.prototype.wa = function (input) {
                    return input;
                };
                MathtestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myscore = [];
                    this.totalscore = 0;
                    this.problemsetscore = [];
                    this.testcomplete = false;
                    this.route.params
                        .map(function (params) { return params['id']; })
                        .subscribe(function (id) {
                        _this.id = id;
                    });
                    this.getfirebase('https://flickering-inferno-6917.firebaseio.com/assignment/' + this.id + '.json');
                    this.mathassignments = [];
                    // new MathAssignment('assignment1', 15, '$a+b$=', 'a', 'b', 'c', 'd', true, false, false, false),
                    // new MathAssignment('assignment2', 25, '$a^2+b^2=$', 'a', 'b', 'c', 'this is the end', true, false, false, false)
                };
                MathtestComponent.prototype.getfirebase = function (url) {
                    var _this = this;
                    this.mathservice.getfirebasedata(url)
                        .subscribe(function (data) {
                        console.log('XSXSD', data);
                        var assignment = data['mathassignment'];
                        _this.nameofassignment = data['name'];
                        assignment.forEach(function (x, index) {
                            console.log('item', x); // 9, 2, 5
                            console.log(index); // 0, 1, 2
                            _this.mathassignments.push(new mathassignment_1.MathAssignment("name", 15, x['problem'], x['sol1'], x['sol2'], x['sol3'], x['sol4'], x['a1'], x['a2'], x['a3'], x['a4']));
                        });
                        console.log('THIS Math Assignment', _this.mathassignments);
                    });
                };
                MathtestComponent.prototype.submittest = function () {
                    var myscore = 0;
                    var scores = [];
                    this.mathassignments.forEach(function (arrayElem) {
                        myscore = myscore + arrayElem.getscore();
                        scores.push(arrayElem.getscore());
                        // console.log('Your score2', arrayElem.getscore());
                    });
                    this.totalscore = myscore;
                    this.testcomplete = true;
                    this.problemsetscore = scores;
                    //this.router.navigate(['/listofassignments']);
                };
                MathtestComponent.prototype.continue = function () {
                    //var x = { username: this.username, score: myscore };
                    //this.mathservice.sendData(x)
                    //    .subscribe(data => { console.log('DATA', data); });
                    this.router.navigate(['/listofassignments']);
                };
                MathtestComponent.prototype.survey = function () {
                    this.router.navigate(['/survey']);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MathtestComponent.prototype, "test", void 0);
                MathtestComponent = __decorate([
                    core_1.Component({
                        selector: 'app-mathtest',
                        template: "\n    <div *ngIf=\"!testcomplete\" class=\"container\">\n        <div class=\"center\">\n            <h2>{{nameofassignment}}</h2>\n        </div>\n    <div *ngFor=\"let x of mathassignments; let i = index; trackBy:trackByIndex\">\n        <div class=\"well\">\n            <app-assignment [(mathassignment)]=\"mathassignments[i]\" [pos]=\"i\" [mode]=\"0\"></app-assignment>\n        </div>\n    </div>\n    \n    <button type=\"button\" (click)=\"submittest()\" class=\"btn btn-primary btn-block\">Submit assignment</button>\n\n    </div>\n\n    <div *ngIf=\"testcomplete\" class=\"container\">\n    <h1>Your total Score: {{totalscore}}</h1>\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n        <th>Problemset</th>\n        <th>Score</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let y of problemsetscore;let i = index;\">\n        <td> problemset {{i}} </td>\n        <td> {{y}} </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <h2>Your Feedback helps us to improve the quality of Mathtrainer</h2>\n    <button type=\"button\" (click)=\"survey()\" class=\"btn btn-primary btn-block\">Continue to survey</button>\n    <button type=\"button\" (click)=\"continue()\" class=\"btn btn-primary btn-block\">Continue without survey</button>\n    </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, math_service_1.MathService])
                ], MathtestComponent);
                return MathtestComponent;
            }());
            exports_1("MathtestComponent", MathtestComponent);
        }
    }
});

//# sourceMappingURL=mathtest.component.js.map
