System.register(['@angular/core', '@angular/platform-browser', "./app.component", "./todo/components/task-list.component", "./about/components/about.component", "./todo/components/task.component", "./todo/components/equation.component", "./todo/components/mathassignment.component", "./todo/components/listofassignments.component", "./todo/components/newassignment.component", "./todo/components/mathtest.component", "./todo/components/highscore.component", "./todo/components/formvalidation.component", "./todo/services/math.service", '@angular/http', './app.routing', '@angular/forms', "./todo/components/addassignment.component", "./todo/components/survey.component", "./todo/components/plotfunction.component", "./todo/components/treegraph.component", "./todo/components/histogram.component"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, task_list_component_1, about_component_1, task_component_1, equation_component_1, mathassignment_component_1, listofassignments_component_1, newassignment_component_1, mathtest_component_1, highscore_component_1, formvalidation_component_1, math_service_1, http_1, app_routing_1, forms_1, addassignment_component_1, survey_component_1, plotfunction_component_1, treegraph_component_1, histogram_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (task_component_1_1) {
                task_component_1 = task_component_1_1;
            },
            function (equation_component_1_1) {
                equation_component_1 = equation_component_1_1;
            },
            function (mathassignment_component_1_1) {
                mathassignment_component_1 = mathassignment_component_1_1;
            },
            function (listofassignments_component_1_1) {
                listofassignments_component_1 = listofassignments_component_1_1;
            },
            function (newassignment_component_1_1) {
                newassignment_component_1 = newassignment_component_1_1;
            },
            function (mathtest_component_1_1) {
                mathtest_component_1 = mathtest_component_1_1;
            },
            function (highscore_component_1_1) {
                highscore_component_1 = highscore_component_1_1;
            },
            function (formvalidation_component_1_1) {
                formvalidation_component_1 = formvalidation_component_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (addassignment_component_1_1) {
                addassignment_component_1 = addassignment_component_1_1;
            },
            function (survey_component_1_1) {
                survey_component_1 = survey_component_1_1;
            },
            function (plotfunction_component_1_1) {
                plotfunction_component_1 = plotfunction_component_1_1;
            },
            function (treegraph_component_1_1) {
                treegraph_component_1 = treegraph_component_1_1;
            },
            function (histogram_component_1_1) {
                histogram_component_1 = histogram_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            http_1.HttpModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            task_component_1.TaskComponent,
                            task_list_component_1.TaskListComponent,
                            task_component_1.TaskComponent,
                            equation_component_1.EquationComponent,
                            mathassignment_component_1.MathassignmentComponent,
                            mathtest_component_1.MathtestComponent,
                            newassignment_component_1.AssignmentComponent,
                            formvalidation_component_1.FormValidationComponent,
                            listofassignments_component_1.ListofassignmentsComponent,
                            highscore_component_1.HighScoreComponent,
                            addassignment_component_1.AddassignmentComponent,
                            about_component_1.AboutComponent,
                            survey_component_1.SurveyComponent,
                            plotfunction_component_1.PlotfunctionComponent,
                            treegraph_component_1.TreegraphComponent,
                            histogram_component_1.HistogramComponent
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders,
                            math_service_1.MathService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
