System.register(["@angular/core", '../services/math.service'], function(exports_1, context_1) {
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
    var core_1, math_service_1;
    var HighScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (math_service_1_1) {
                math_service_1 = math_service_1_1;
            }],
        execute: function() {
            HighScoreComponent = (function () {
                function HighScoreComponent(mathservice) {
                    this.mathservice = mathservice;
                    this.highscores = [];
                }
                HighScoreComponent.prototype.getfirebase = function (url) {
                    var _this = this;
                    this.mathservice.getfirebasedata(url)
                        .subscribe(function (data) {
                        // console.log('DATA', data);
                        for (var property in data) {
                            // var obj = data[property];
                            if (data.hasOwnProperty(property)) {
                                _this.highscores.push(data[property]);
                            }
                        }
                        console.log('highscores', _this.highscores);
                        // this.highscores = data;
                    });
                };
                HighScoreComponent.prototype.ngOnInit = function () {
                    this.getfirebase('https://flickering-inferno-6917.firebaseio.com/highscore.json');
                };
                HighScoreComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"container\">\n            <h2>Highscores</h2>\n            <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                <th>Name</th>\n                <th>Score</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let x of highscores; let i = index; trackBy:trackByIndex\">\n                <td> {{x.score}} </td>\n                <td>{{x.username}}</td>\n                </tr>\n            </tbody>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [math_service_1.MathService])
                ], HighScoreComponent);
                return HighScoreComponent;
            }());
            exports_1("HighScoreComponent", HighScoreComponent);
        }
    }
});

//# sourceMappingURL=highscore.component.js.map
