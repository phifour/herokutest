System.register(["@angular/router", "./todo/components/task-list.component", "./todo/components/listofassignments.component", "./todo/components/highscore.component", "./todo/components/mathtest.component", "./todo/components/addassignment.component", "./todo/components/survey.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, task_list_component_1, listofassignments_component_1, highscore_component_1, mathtest_component_1, addassignment_component_1, survey_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (listofassignments_component_1_1) {
                listofassignments_component_1 = listofassignments_component_1_1;
            },
            function (highscore_component_1_1) {
                highscore_component_1 = highscore_component_1_1;
            },
            function (mathtest_component_1_1) {
                mathtest_component_1 = mathtest_component_1_1;
            },
            function (addassignment_component_1_1) {
                addassignment_component_1 = addassignment_component_1_1;
            },
            function (survey_component_1_1) {
                survey_component_1 = survey_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', redirectTo: 'listofassignments', pathMatch: 'full' },
                { path: 'tasks', component: task_list_component_1.TaskListComponent, data: { title: 'TaskList' } },
                { path: 'listofassignments', component: listofassignments_component_1.ListofassignmentsComponent, data: { title: 'List of Assignments' } },
                { path: 'about', component: highscore_component_1.HighScoreComponent, data: { title: 'Top Scores' } },
                { path: 'add', component: addassignment_component_1.AddassignmentComponent, data: { title: 'Add Assignment' } },
                { path: 'survey', component: survey_component_1.SurveyComponent, data: { title: 'Survey' } },
                { path: 'assignment/:id', component: mathtest_component_1.MathtestComponent, data: { title: 'Your Assignment' } }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});

//# sourceMappingURL=app.routing.js.map
