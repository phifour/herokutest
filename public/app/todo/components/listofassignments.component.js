System.register(['@angular/core', '@angular/router', "../models/mathassignment", "../models/option", "../models/bsprice", "../models/montecarlo", '../services/math.service'], function(exports_1, context_1) {
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
    var core_1, router_1, mathassignment_1, option_1, bsprice_1, montecarlo_1, math_service_1;
    var ListofassignmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mathassignment_1_1) {
                mathassignment_1 = mathassignment_1_1;
            },
            function (option_1_1) {
                option_1 = option_1_1;
            },
            function (bsprice_1_1) {
                bsprice_1 = bsprice_1_1;
            },
            function (montecarlo_1_1) {
                montecarlo_1 = montecarlo_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            }],
        execute: function() {
            ListofassignmentsComponent = (function () {
                function ListofassignmentsComponent(router, mathservice) {
                    this.router = router;
                    this.mathservice = mathservice;
                    this.data = [];
                }
                // answer:Answer;
                ListofassignmentsComponent.prototype.ngOnInit = function () {
                    this.Nsteps = 200;
                    this.option = new option_1.Option('European Call', 0.3, 0.1, 100, 110);
                    this.satt = [2, 5, 7];
                    this.result = { price: 100 };
                    this.bsprice = new bsprice_1.BSPrice(this.option);
                    //this.option['volatility'] = 0.3;
                    // this.answer = new Answer();
                    // d3.select("body").transition()
                    // .style("background-color", "black");
                    //this.data = [{date:'1-May-12',close:58.13}, {date:'30-Apr-12',close:53.98}];
                    //<app-treegraph [graph]="graph"></app-treegraph>
                    // this.genseries();
                };
                ListofassignmentsComponent.prototype.rerun = function () {
                    // this.genseries();this.option.K
                    this.mc = new montecarlo_1.MonteCarlo(this.option);
                    this.data = this.mc.geoBrownian_series(1, 50);
                    console.log('data', this.data);
                    this.result = this.mc.priceOption(1, 50, this.Nsteps, abc);
                    console.log('Price European Call ', this.bsprice.EuropeanCall(100, 105, 0.1, 0.3, 1));
                    function abc(x) {
                        if (x > 100) {
                            return x - 100;
                        }
                        else {
                            return 0;
                        }
                    }
                    this.satt = this.mc.MonteCarlo(1, 50, this.Nsteps, abc);
                    //  console.log(satt);
                    // console.log(this.data);
                    // console.log('functions and constants');
                    // console.log(math.round(math.e, 3));           // 2.718
                    // console.log('rn',this.gaussian(0,1)());           // 2.718
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', mathassignment_1.MathAssignment)
                ], ListofassignmentsComponent.prototype, "mathassignment", void 0);
                ListofassignmentsComponent = __decorate([
                    core_1.Component({
                        selector: 'app-assignmentlist',
                        template: "\n  <div class=\"container\">\n\n  <div class=\"form-group row\">\n    <label for=\"optiontype\" class=\"col-xs-2 col-form-label\">Option Type</label>\n      <div class=\"col-xs-10\">\n      <select aria-label=\"Search by type\" class=\"form-control\" [(ngModel)]=\"option.type\" id=\"optiontype\">\n                  <option>European Call</option>\n                  <option>European Put</option>\n                  <option>American Call</option>\n                  <option>American Put</option>\n      </select>\n      </div>\n  </div>\n\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Volatility</label>\n  <div class=\"col-xs-10\">\n  <input class=\"form-control\" type=\"number\" name=\"myDecimal\"  [(ngModel)]=\"option.volatility\"  placeholder=\"Decimal\" step=\"0.01\" />\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Annual interest rate</label>\n  <div class=\"col-xs-10\">\n  <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"option.r\" placeholder=\"Decimal\" step=\"0.01\" />\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Initial stock price</label>\n  <div class=\"col-xs-10\">\n  <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"option.S0\" placeholder=\"Decimal\" step=\"0.01\" />\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Option Strike</label>\n  <div class=\"col-xs-10\">\n  <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"option.K\" placeholder=\"Decimal\" step=\"0.01\" />\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-number-input\" class=\"col-xs-2 col-form-label\">Days to maturity</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"number\" value=\"180\" id=\"example-number-input\">\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-number-input\" class=\"col-xs-2 col-form-label\">Number of Monte Carlo simulations</label>\n  <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"Nsteps\" id=\"example-number-input\">\n  </div>\n</div>\n\n\n<div class=\"well\">\n<h5>Results of Estimation</h5>\n\n<table class=\"table table-inverse\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Estimated Option price</th>\n      <th>Number of simulations</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>{{result.price}}</td>\n      <td>{{result.Nsteps}}</td>\n      <td>@mdo</td>\n    </tr>\n  \n  </tbody>\n</table>\n\n</div>\n\n    <button type=\"button\" (click)=\"rerun()\" class=\"btn btn-primary btn-block\">Price Option</button>\n\n    <div class=\"container\">\n      <app-plotfunction [(values)]=\"data\"></app-plotfunction>\n    </div>\n\n  <app-histogram [(title)]=\"option.type\" [(values)]=\"satt\"></app-histogram>\n  \n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, math_service_1.MathService])
                ], ListofassignmentsComponent);
                return ListofassignmentsComponent;
            }());
            exports_1("ListofassignmentsComponent", ListofassignmentsComponent);
        }
    }
});
// <div class="form-group row">
//   <label for="example-search-input" class="col-xs-2 col-form-label">Search</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="search" value="How do I shoot web" id="example-search-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-email-input" class="col-xs-2 col-form-label">Email</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-url-input" class="col-xs-2 col-form-label">URL</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="url" value="https://getbootstrap.com" id="example-url-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-tel-input" class="col-xs-2 col-form-label">Telephone</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-password-input" class="col-xs-2 col-form-label">Password</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="password" value="hunter2" id="example-password-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-datetime-local-input" class="col-xs-2 col-form-label">Date and time</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-date-input" class="col-xs-2 col-form-label">Date</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-month-input" class="col-xs-2 col-form-label">Month</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="month" value="2011-08" id="example-month-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-week-input" class="col-xs-2 col-form-label">Week</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="week" value="2011-W33" id="example-week-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-time-input" class="col-xs-2 col-form-label">Time</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="time" value="13:45:00" id="example-time-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-color-input" class="col-xs-2 col-form-label">Color</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="color" value="#563d7c" id="example-color-input">
//   </div>
// </div>
// <div class="form-group row">
//   <label for="example-text-input" class="col-xs-2 col-form-label">Text</label>
//   <div class="col-xs-10">
//     <input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
//   </div>
// </div> 

//# sourceMappingURL=listofassignments.component.js.map
