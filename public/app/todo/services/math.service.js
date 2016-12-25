System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var MathService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            MathService = (function () {
                function MathService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                MathService.prototype.getTime = function () {
                    return this.http.get('http://date.jsontest.com')
                        .map(function (response) { return response.json(); });
                };
                MathService.prototype.sendData = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    //return this.http.post('https://mathtrainer-3d393.firebaseio.com/highscore.json', body, {
                    return this.http.post('https://flickering-inferno-6917.firebaseio.com/highscore.json', body, {
                        headers: headers
                    })
                        .map(function (data) { return data.json(); })
                        .catch(this.handleError);
                };
                MathService.prototype.uploadassignment = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    //return this.http.post('https://mathtrainer-3d393.firebaseio.com/highscore.json', body, {
                    return this.http.post('https://flickering-inferno-6917.firebaseio.com/assignment.json', body, {
                        headers: headers
                    })
                        .map(function (data) { return data.json(); })
                        .catch(this.handleError);
                };
                MathService.prototype.testfoursquare = function () {
                    var url = "https://api.foursquare.com/v2/venues/search?v=20130815&&";
                    var query = "&query=sushi";
                    var near = "&near=Vienna,AT";
                    var client_id = '&client_id=DATGSLTPSJN2AUSVTGOK12NIGHPOTDD4Z1SEZ0XLPN0DOPBU';
                    var client_secret = '&client_secret=1YQUJF4STX2FTU4HMDDA5IFZEJSNSJB35RBTGP3SKKR0M4RL';
                    var requrl = url + query + near + client_id + client_secret;
                    return this.http.get(requrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MathService.prototype.getfirebasedata = function (url) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this.http
                        .get(url, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MathService.prototype.getPhotoURL = function (id) {
                    var photourl = 'https://api.foursquare.com/v2/venues/' + id + '/photos?&&';
                    var client_id = 'client_id=DATGSLTPSJN2AUSVTGOK12NIGHPOTDD4Z1SEZ0XLPN0DOPBU';
                    var client_secret = '&client_secret=1YQUJF4STX2FTU4HMDDA5IFZEJSNSJB35RBTGP3SKKR0M4RL';
                    var limit = '&limit=1';
                    var v = '&v=20130815';
                    var requrl = photourl + client_id + client_secret + limit + v;
                    console.log(requrl);
                    return requrl;
                };
                MathService.prototype.getImageIDs = function (ids) {
                    var obs;
                    obs = [];
                    for (var i = 0; i < ids.length; i++) {
                        obs.push(this.http.get(this.getPhotoURL(ids[i])).map(function (res) { return res.json(); }));
                    }
                    console.log('obs', obs);
                    return Rx_1.Observable.forkJoin(obs);
                };
                MathService.prototype.addtoFirebase = function () {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    var hero = { test: 12345 };
                    return this.http
                        .post("https://flickering-inferno-6917.firebaseio.com/equation/test.json", JSON.stringify(hero), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                MathService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                MathService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MathService);
                return MathService;
            }());
            exports_1("MathService", MathService);
        }
    }
});

//# sourceMappingURL=math.service.js.map
