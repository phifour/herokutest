System.register(["@angular/core", "../models/mathassignment", '../services/math.service', '@angular/router', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, mathassignment_1, math_service_1, router_1, forms_1;
    var AddassignmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mathassignment_1_1) {
                mathassignment_1 = mathassignment_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AddassignmentComponent = (function () {
                function AddassignmentComponent(route, router, mathservice, fb) {
                    var _this = this;
                    this.route = route;
                    this.router = router;
                    this.mathservice = mathservice;
                    this.fb = fb;
                    this.valid = false;
                    this.complexForm = fb.group({
                        'name': [null, forms_1.Validators.required],
                        'creator': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
                        'difficulty': [null, forms_1.Validators.required]
                    });
                    this.complexForm.valueChanges.subscribe(function (form) {
                        console.log('form changed to2:', form);
                        _this.name = form.name;
                        _this.difficulty = form.difficulty;
                        _this.creator = form.creator;
                        console.log('complexForm.valid', _this.complexForm.valid);
                        if (_this.complexForm.valid === true && _this.mathassignments.length > 1) {
                            _this.valid = true;
                        }
                        else {
                            _this.valid = false;
                        }
                        console.log('parameters', _this.valid, _this.mathassignments.length);
                    });
                }
                AddassignmentComponent.prototype.check = function (b, n) {
                    if (b === true && n > 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                AddassignmentComponent.prototype.loadTest = function () {
                    console.log('Loading Test');
                };
                // ngOnChanges(changes: {[ propName: string]: SimpleChange}) {
                // 	console.log('Change detected:', changes[person].currentValue);
                // }
                AddassignmentComponent.prototype.removeassignment = function (element) {
                    var index = this.mathassignments.indexOf(element, 0);
                    if (index > -1) {
                        this.mathassignments.splice(index, 1);
                    }
                };
                AddassignmentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myscore = [];
                    this.problemsetscore = [];
                    this.totalscore = 0;
                    this.testcomplete = false;
                    this.mathassignment = new mathassignment_1.MathAssignment('assignment1', 15, '$a^2+b^2=c^2$', 'possible answer 1', 'possible answer 2', 'possible answer 3', 'possible answer 4', true, false, false, false);
                    this.route.params
                        .map(function (params) { return params['id']; })
                        .subscribe(function (id) {
                        _this.id = id;
                    });
                    this.mathassignments = [];
                };
                AddassignmentComponent.prototype.ngOnChanges = function () {
                    console.log('OnChanges called !?!?!?');
                    //throw new Error('ngOnChanges called; should not be when ngDoCheck is defined!');
                };
                AddassignmentComponent.prototype.ngDoCheck = function () {
                    console.log('ngDoCheck');
                };
                AddassignmentComponent.prototype.submittest = function () {
                    console.log('This Assignment', this.mathassignments);
                    console.log('ma', this.mathassignment);
                    var copy = this.deepCopy(this.mathassignment);
                    copy.points = Number(copy.points); // 1234
                    this.mathassignments.push(copy);
                    MathJax.Hub.Typeset();
                };
                AddassignmentComponent.prototype.deepCopy = function (oldObj) {
                    var newObj = oldObj;
                    if (oldObj && typeof oldObj === "object") {
                        newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
                        for (var i in oldObj) {
                            if (oldObj.hasOwnProperty(i)) {
                                newObj[i] = this.deepCopy(oldObj[i]);
                            }
                        }
                    }
                    return newObj;
                };
                AddassignmentComponent.prototype.uploadassignment = function () {
                    this.mathservice.uploadassignment({ name: this.name,
                        creator: this.creator,
                        difficulty: this.difficulty,
                        mathassignment: this.mathassignments
                    })
                        .subscribe(function (data) { console.log('DATA', data); });
                    this.router.navigate(['/listofassignments']);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AddassignmentComponent.prototype, "test", void 0);
                AddassignmentComponent = __decorate([
                    core_1.Component({
                        selector: 'app-addassignment',
                        template: "\n    <div class=\"container\">\n    <h3>Create your own assignment</h3>\n\n    <form [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['name'].valid && complexForm.controls['name'].touched}\">\n        <label>Name of assignment:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Basic Algebra\" [formControl]=\"complexForm.controls['name']\">\n        <div *ngIf=\"complexForm.controls['name'].hasError('required') && complexForm.controls['name'].touched\" class=\"alert alert-danger\">You must include a assignment name.</div>\n      </div>\n\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['creator'].valid && complexForm.controls['creator'].touched}\">\n        <label>Your Name:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Prof. X\" [formControl]=\"complexForm.controls['creator']\">\n        <div *ngIf=\"complexForm.controls['creator'].hasError('required') && complexForm.controls['creator'].touched\" class=\"alert alert-danger\">You must include your name.</div>\n        <div *ngIf=\"complexForm.controls['creator'].hasError('minlength') && complexForm.controls['creator'].touched\" class=\"alert alert-danger\">Your name must be at least 5 characters long.</div>\n        <div *ngIf=\"complexForm.controls['creator'].hasError('maxlength') && complexForm.controls['creator'].touched\" class=\"alert alert-danger\">Your name cannot exceed 10 characters.</div>\n    </div>\n\n      <div class=\"form-group\">\n        <label>Difficulty</label>\n        <div class=\"alert alert-danger\" *ngIf=\"!complexForm.controls['difficulty'].valid && complexForm.controls['difficulty'].touched\">You must select a difficulty.</div>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"difficulty\" value=\"Easy\" [formControl]=\"complexForm.controls['difficulty']\">\n          Easy\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"difficulty\" value=\"Hard\" [formControl]=\"complexForm.controls['difficulty']\">\n          Hard\n        </label>\n      </div>\n    </form>\n\n    <new-assignment [(mathassignment)]=\"mathassignment\"></new-assignment>\n\n    <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"submittest()\">Add problemset</button>\n    </div>\n    \n    <div *ngFor=\"let x of mathassignments; let i = index; trackBy:trackByIndex\">\n            <div class=\"well\">\n            <app-assignment [(mathassignment)]=\"mathassignments[i]\" [pos]=\"i\" [mode]=\"1\"></app-assignment>\n            <button type=\"button\" (click)=\"removeassignment(mathassignments[i])\" class=\"btn btn-primary btn-block\">Remove problemset</button>\n            </div>\n    </div>\n\n\n    <div *ngIf=\"mathassignments.length<1\" class=\"alert alert-danger\">You need to add at least one problemset.</div>\n\n    <button type=\"button\" (click)=\"uploadassignment()\" class=\"btn btn-primary btn-block\" [disabled]=\"check(complexForm.valid,mathassignments.length)\">Upload to Mathtrainer</button>\n\n    </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, math_service_1.MathService, forms_1.FormBuilder])
                ], AddassignmentComponent);
                return AddassignmentComponent;
            }());
            exports_1("AddassignmentComponent", AddassignmentComponent);
        }
    }
});

//# sourceMappingURL=addassignment.component.js.map
