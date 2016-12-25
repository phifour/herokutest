System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, forms_1;
    var FormValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            FormValidationComponent = (function () {
                function FormValidationComponent(fb) {
                    this.complexForm = fb.group({
                        'firstName': [null, forms_1.Validators.required],
                        'lastName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
                        'degree': [null, forms_1.Validators.required],
                        'feedback': [null, forms_1.Validators.required]
                    });
                    console.log(this.complexForm);
                    this.complexForm.valueChanges.subscribe(function (form) {
                        console.log('form changed to2:', form);
                    });
                }
                FormValidationComponent.prototype.submitForm = function (value) {
                    console.log(value);
                };
                FormValidationComponent = __decorate([
                    core_1.Component({
                        selector: 'form-validation',
                        template: "\n  <div class=\"jumbotron\">\n    <h3>Tell us a littlebit about your background</h3>\n    <form [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['firstName'].valid && complexForm.controls['firstName'].touched}\">\n        <label>First Name:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"John\" [formControl]=\"complexForm.controls['firstName']\">\n        <div *ngIf=\"complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched\" class=\"alert alert-danger\">You must include a first name.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['lastName'].valid && complexForm.controls['lastName'].touched}\">\n        <label>Last Name</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Doe\" [formControl]=\"complexForm.controls['lastName']\">\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('required') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">You must include a last name.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('minlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name must be at least 5 characters long.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('maxlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name cannot exceed 10 characters.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Degree</label>\n        <div class=\"alert alert-danger\" *ngIf=\"!complexForm.controls['degree'].valid && complexForm.controls['degree'].touched\">You must select a degree.</div>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"degree\" value=\"highschool\" [formControl]=\"complexForm.controls['degree']\">\n          High school\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"degree\" value=\"university\" [formControl]=\"complexForm.controls['degree']\">\n          University\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>Activities</label>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"comment\">Your Feedback:</label>\n        <textarea class=\"form-control\" rows=\"5\" [formControl]=\"complexForm.controls['feedback']\"></textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], FormValidationComponent);
                return FormValidationComponent;
            }());
            exports_1("FormValidationComponent", FormValidationComponent);
        }
    }
});

//# sourceMappingURL=formvalidation.component.js.map
