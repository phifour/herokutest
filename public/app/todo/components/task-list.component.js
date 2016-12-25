System.register(["@angular/core", "../services/task-service", '../services/math.service'], function(exports_1, context_1) {
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
    var core_1, task_service_1, math_service_1;
    var TaskListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            }],
        execute: function() {
            TaskListComponent = (function () {
                function TaskListComponent(_taskService, mathservice) {
                    this._taskService = _taskService;
                    this.mathservice = mathservice;
                    this.tasks = _taskService.getTasks();
                    this.calculateTodoCount();
                    this.eqn = ["E=mc^2", "\\Delta \\phi = -4 \\pi \\rho", "-\\Delta"];
                    this.data = [];
                    this.hello = "This is a \\beta - problem";
                    this.getfirebase();
                }
                TaskListComponent.prototype.ngOnInit = function () {
                    console.log("Todo XXXX initialized with " + this.tasks.length + " tasks.", this.data);
                };
                TaskListComponent.prototype.calculateTodoCount = function () {
                    this.todoCount = this.tasks.filter(function (t) { return !t.done; }).length;
                };
                TaskListComponent.prototype.select = function (task) {
                    this.selectedTask = task;
                };
                TaskListComponent.prototype.getfirebase = function () {
                    var _this = this;
                    this.mathservice.getfirebasedata("https://flickering-inferno-6917.firebaseio.com/assignments.json")
                        .subscribe(function (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property)) {
                                _this.data.push(data[property].problems[0].eqn);
                            }
                        }
                        console.log('data', _this.data);
                    });
                };
                TaskListComponent = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        templateUrl: './app/todo/components/task-list.html',
                        styleUrls: ['./app/todo/components/task-list.css'],
                        providers: [task_service_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService, math_service_1.MathService])
                ], TaskListComponent);
                return TaskListComponent;
            }());
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});

//# sourceMappingURL=task-list.component.js.map
