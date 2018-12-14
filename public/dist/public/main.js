(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    outline: 1px solid black;\n    padding: 50px;\n}\n\n#delete {\n    color:white;\n    background-color: red;\n}\n\ntd {\n    outline: 1px solid black;\n    padding: 10px;\n}\n\ntd button {\n    margin-right: 10px;\n}\n\n.write {\n    color: white;\n    background-color: #859e9c;\n}\n\np {\n    color: purple;\n}\n\n.read {\n    color: white;\n    background-color: #98ad69;\n}\n\n.container h3 {\n    margin-top: 0px !important;\n    margin-right: 20% !important;\n}\n\n.container h3, .container button {\n    display: inline-block;\n    vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0NBQzdCOztBQUdEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4jZGVsZXRlIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbnRkIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53cml0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTllOWM7XG59XG5cblxucCB7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnJlYWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThhZDY5O1xufVxuXG4uY29udGFpbmVyIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGgzLCAuY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59Il19 */"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <h3>Submit a movie and your review</h3>\n  <form>\n    <ng-flash-message></ng-flash-message>\n    <p *ngIf = '!title.valid'>Title is not long enough</p>\n    Movie Title: <input [(ngModel)] = 'newMovie.title' type=\"text\" name='title' required minlength=\"3\" #title = 'ngModel'>\n    <br>\n    <p *ngIf = '!name.valid'>Name is not long enough</p>\n    Your name: <input [(ngModel)] = 'newMovie.name' type=\"text\" name='name' required minlength=\"3\" #name = 'ngModel'>\n    <br>\n    <br>\n    <p *ngIf = '!stars.valid'>This field is required</p>\n\n    Stars: <select [(ngModel)] =  'newMovie.stars' name = 'stars' required #stars = 'ngModel'>\n      <option value = '1'>1</option>\n      <option value = '2'>2</option>\n      <option value = '3'>3</option>\n      <option value = '4'>4</option>\n      <option value = '5'>5</option>\n    </select>\n    <br>\n    <br>\n    <p *ngIf = '!review.valid'>Review is not long enough</p>\n\n    Your review: <textarea [(ngModel)] = 'newMovie.review' rows=\"10\" cols=\"20\" name = 'review' required minlength=\"3\" #review = 'ngModel'>\n      \n    </textarea>\n    <br>\n    <br>\n\n    <button (click) = 'cancel()'>Cancel</button><input (click) = 'onSubmit()' type='submit' value = 'Submit' [disabled] = \"!review.valid || !name.valid || !stars.valid || !title.valid\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");






var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _router, _ngFlash, _home) {
        this._httpService = _httpService;
        this._router = _router;
        this._ngFlash = _ngFlash;
        this._home = _home;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.newMovie = { title: "", name: "", review: "", stars: "" };
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        var newMovie = this._httpService.addMovie(this.newMovie);
        newMovie.subscribe(function (data) {
            if (data.message == "Failure") {
                console.log(data);
                _this._ngFlash.showFlashMessage({
                    messages: [data.data.name, data.data.title, data.data.stars, data.data.review]
                });
            }
            else {
                _this._home.addClicked = false;
                _this._home.allMovies.push(data.data);
            }
        });
    };
    AddComponent.prototype.cancel = function () {
        this._home.addClicked = false;
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");






var routes = [
    { path: 'movies', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'movies/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'movies/:id/review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Squishy tomatoes</h1>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
        // allAuthors;
        this.title = 'public';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/movies']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    outline: 1px solid black;\n    padding: 50px;\n}\n\n#delete {\n    color:white;\n    background-color: red;\n}\n\ntd {\n    outline: 1px solid black;\n    padding: 10px;\n}\n\ntd button {\n    margin-right: 10px;\n}\n\n.write {\n    color: white;\n    background-color: #859e9c;\n}\n\n.read {\n    color: white;\n    background-color: #98ad69;\n}\n\n.container h3 {\n    margin-top: 0px !important;\n    margin-right: 20% !important;\n}\n\n.container h3, .container button {\n    display: inline-block;\n    vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4jZGVsZXRlIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbnRkIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53cml0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTllOWM7XG59XG5cbi5yZWFkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4YWQ2OTtcbn1cblxuLmNvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBoMywgLmNvbnRhaW5lciBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button (click) = 'delete()' id = 'delete'>Delete Movie</button>\n<div class = 'container'>\n    <h3>Reviews for {{currentMovie.title}}</h3>\n    Average Stars: {{currentMovie.averageStars}}\n    <table>\n        <thead>\n          <tr>\n            <td>Reviewer</td>\n            <td>Stars</td>\n            <td>Reviews</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = 'let review of currentMovie.reviews'>\n            <td>{{review.reviewer}}</td>\n            <td>{{review.stars}}</td>\n            <td>{{review.review}}<button (click) = 'deleteReview(review._id, currentMovie._id)'>Delete Review</button></td>\n          </tr>\n        </tbody>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var EditComponent = /** @class */ (function () {
    function EditComponent(_router, _route, _httpService, _ngFlash) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._ngFlash = _ngFlash;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.currentMovie = {};
        this._route.params.subscribe(function (params) {
            var author = _this._httpService.getMovieById(params['id']);
            author.subscribe(function (data) {
                console.log(data.data[0]);
                self.currentMovie = data.data[0];
            });
        });
    };
    EditComponent.prototype.delete = function () {
        // let observer = this._httpService.deleteMovie(this.currentMovie.id)
        console.log(this.currentMovie);
        var observer = this._httpService.deleteMovie(this.currentMovie._id);
        observer.subscribe(function (data) {
            console.log(data);
        });
        this._router.navigate(['movies']);
    };
    EditComponent.prototype.deleteReview = function (review_id, movie_id) {
        var _this = this;
        for (var i = 0; i < this.currentMovie.reviews.length; i++) {
            if (this.currentMovie.reviews[i]._id == review_id) {
                this.currentMovie.reviews.splice(i, 1);
            }
        }
        var observer = this._httpService.deleteReview(review_id, movie_id);
        observer.subscribe(function (data) {
            console.log(data);
            _this.currentMovie.averageStars = data.stars;
        });
        console.log('anyone?');
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    outline: 1px solid black;\n    padding: 50px;\n}\n\ntd {\n    outline: 1px solid black;\n    padding: 10px;\n}\n\ntd button {\n    margin-right: 10px;\n}\n\n.write {\n    color: white;\n    background-color: #859e9c;\n}\n\n.read {\n    color: white;\n    background-color: #98ad69;\n}\n\n.container h3 {\n    margin-top: 0px !important;\n    margin-right: 20% !important;\n}\n\n.container h3, .container button {\n    display: inline-block;\n    vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbnRkIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53cml0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTllOWM7XG59XG5cbi5yZWFkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4YWQ2OTtcbn1cblxuLmNvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBoMywgLmNvbnRhaW5lciBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n\n  <h3>Movie List</h3>\n  <button (click) = 'add()' class = 'write'>Add a new movie</button>\n  \n  \n  \n  <table>\n    <thead>\n      <tr>\n        <td>Movie Title</td>\n        <td>Available actions</td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = 'let movie of allMovies'>\n        <td>{{movie.title}}</td>\n        <td><button [routerLink] = \"['/movies/', movie._id]\"class = 'read' >Read Reviews     </button><button [routerLink] = \"['/movies',movie._id,'review']\" class = 'write'>Write Review</button></td>\n      </tr>\n    </tbody>\n  </table>\n  <app-add *ngIf = 'addClicked'></app-add>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.allMovies = [];
        this.getAllMovies();
        this.addClicked = false;
    };
    HomeComponent.prototype.getAllMovies = function () {
        var self = this;
        var all = this._httpService.getAllMovies();
        all.subscribe(function (data) {
            self.allMovies = data.data;
        });
    };
    // delete(id){
    //   var deletedAuthor = this._httpService.deleteAuthor(id)
    //   deletedAuthor.subscribe(data => {
    //   })
    //   for (var i = 0; i < this.allAuthors.length; i++){
    //     if (this.allAuthors[i]._id == id){
    //       this.allAuthors.splice(i, 1)
    //     }
    //   }
    // }
    HomeComponent.prototype.add = function () {
        this.addClicked = !this.addClicked;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllMovies = function () {
        return this._http.get('/allMovies');
    };
    HttpService.prototype.getMovieById = function (id) {
        return this._http.get('/movie/' + id);
    };
    HttpService.prototype.addReview = function (obj) {
        return this._http.post('/newReview', obj);
    };
    HttpService.prototype.deleteMovie = function (id) {
        return this._http.get('/delete/movie/' + id);
    };
    HttpService.prototype.deleteReview = function (review_id, movie_id) {
        return this._http.get('/delete/review/' + review_id + '/' + movie_id);
    };
    HttpService.prototype.addMovie = function (obj) {
        return this._http.post('/newMovie', obj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    outline: 1px solid black;\n    padding: 50px;\n}\n\n#delete {\n    color:white;\n    background-color: red;\n}\n\ntd {\n    outline: 1px solid black;\n    padding: 10px;\n}\n\ntd button {\n    margin-right: 10px;\n}\n\n.write {\n    color: white;\n    background-color: #859e9c;\n}\n\np {\n    color: purple;\n}\n\n.read {\n    color: white;\n    background-color: #98ad69;\n}\n\n.container h3 {\n    margin-top: 0px !important;\n    margin-right: 20% !important;\n}\n\n.container h3, .container button {\n    display: inline-block;\n    vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0NBQzdCOztBQUdEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4jZGVsZXRlIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbnRkIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi53cml0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTllOWM7XG59XG5cblxucCB7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnJlYWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThhZDY5O1xufVxuXG4uY29udGFpbmVyIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGgzLCAuY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59Il19 */"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n    <h3>Add a review for {{currentMovie.title}}</h3>\n    <form>\n      <br>\n      <ng-flash-message></ng-flash-message>\n      <p *ngIf = '!myName.valid'>Name is not long enough</p>\n      Your name: <input [(ngModel)] = 'newReview.name' type=\"text\" name='name' required minlength=\"3\" #myName = 'ngModel'>\n      <br>\n      <br>\n      <p *ngIf = '!myStars.valid'>This field is required</p>\n      Stars: <select [(ngModel)] = 'newReview.stars' name = 'stars' required #myStars = 'ngModel'>\n        <option value = '1'>1</option>\n        <option value = '2'>2</option>\n        <option value = '3'>3</option>\n        <option value = '4'>4</option>\n        <option value = '5'>5</option>\n      </select>\n      <br>\n      <br>\n      <p *ngIf = '!myReview.valid'>Review is not long enough</p>\n      Your review: <textarea [(ngModel)] = 'newReview.review' rows=\"10\" cols=\"20\" name = 'review' required minlength=\"3\" #myReview = 'ngModel'>\n        \n      </textarea>\n      <br>\n      <br>\n  \n      <button (click) = 'cancel()'>Cancel</button><input (click) = 'submit()' type='submit' value = 'Submit' [disabled] = '!myName.valid || !myReview.valid || !myStars.valid'>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(_router, _route, _httpService, _ngFlash) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this._ngFlash = _ngFlash;
        this.newReview = { id: '', name: '', stars: '', review: '' };
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.currentMovie = { title: "" };
        this._route.params.subscribe(function (params) {
            var movie = _this._httpService.getMovieById(params['id']);
            movie.subscribe(function (data) {
                console.log(data);
                self.currentMovie = data.data[0];
                self.newReview.id = data.data[0]._id;
                console.log(self.currentMovie);
            });
        });
    };
    ReviewComponent.prototype.cancel = function () {
        this._router.navigate(['movies']);
    };
    ReviewComponent.prototype.submit = function () {
        var _this = this;
        var observer = this._httpService.addReview(this.newReview);
        observer.subscribe(function (data) {
            if (data.message == "Failure") {
                console.log(data);
                _this._ngFlash.showFlashMessage({
                    messages: [data.data.name, data.data.title, data.data.stars, data.data.review]
                });
            }
            else {
                _this._router.navigate(['movies']);
            }
        });
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/MEAN/angular/authors/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map