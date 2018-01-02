webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_viewcart_viewcart_component__ = __webpack_require__("../../../../../src/app/components/viewcart/viewcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_profile_guard__ = __webpack_require__("../../../../../src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_checkout_guard__ = __webpack_require__("../../../../../src/app/guards/checkout.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_category_category_component__["a" /* CategoryComponent */] },
    { path: 'category', redirectTo: '/', pathMatch: 'full' },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_product_product_component__["a" /* ProductComponent */] },
    { path: 'viewcart', component: __WEBPACK_IMPORTED_MODULE_5__components_viewcart_viewcart_component__["a" /* ViewcartComponent */] },
    { path: 'product', redirectTo: '/', pathMatch: 'full' },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_6__components_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_checkout_guard__["a" /* CheckoutGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_profile_guard__["a" /* ProfileGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]] },
    // {path: 'signup/init', component: LoginComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gifts Boutiq';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export PizzaPartyAppModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_a_header_a_component__ = __webpack_require__("../../../../../src/app/components/header-a/header-a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_viewcart_viewcart_component__ = __webpack_require__("../../../../../src/app/components/viewcart/viewcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_profile_guard__ = __webpack_require__("../../../../../src/app/guards/profile.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_checkout_guard__ = __webpack_require__("../../../../../src/app/guards/checkout.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__excerpt_pipe__ = __webpack_require__("../../../../../src/app/excerpt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// UI Developement

// import {NoopAnimationsModule} from '@angular/platform-browser/animations';











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_header_a_header_a_component__["a" /* HeaderAComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_viewcart_viewcart_component__["a" /* ViewcartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_34__excerpt_pipe__["a" /* ExcerptPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // NoopAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["e" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_material_dialog__["b" /* MatDialogModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_14__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_23__guards_profile_guard__["a" /* ProfileGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_checkout_guard__["a" /* CheckoutGuard */], __WEBPACK_IMPORTED_MODULE_25__services_rating_service__["a" /* RatingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart{\n\tpadding: 10px;\n}\nspan{\n\tpadding: 5px;\n\tbackground-color: warn;\n\tborder-radius: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/viewcart\"><button mat-raised-button color=\"primary\">\n\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"\" d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86\" fill=\"#fff\"></path></svg> CART <span>{{this.cartService.products.length}}</span>\n</button></a>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theProduct{\n\twidth: 28%;\n\tmargin: 10px 2.5%;\n\tdisplay: inline-block;\n\tfloat: left;\n}\n.container{\n\tpadding: 0 50px;\n\twidth: 100%;\n\tmargin-left: 0;\n\tmargin-right: 0;\n\tbackground-color: rgb(248,248,248);\n\tmin-height: 100vh;\n}\n.container h2{\n\ttext-align: center;\n}\nmat-card-content{\n\tborder-top: 1px solid lightgrey;\n}\n.sprice{\n\tfont-size: 20px;\n\tcolor: black;\n\tfont-weight: bold;\n}\n.price{\n\tcolor: grey;\n\tfont-weight: bold;\n\ttext-decoration: line-through;\n}\n.discount{\n\tfont-weight: bold;\n\tcolor: green;\n}\n.pname{\n\tfont-size: 18px;\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 30px;\n\toverflow: auto;\n\tbox-shadow: none;\n\tscroll-behavior: smooth;\n}\n@media only screen and (max-width: 768px) {\n\t.theProduct{\n\t\twidth: 47.5%;\n\t\tmargin: 10px 1.25%;\n\t\tdisplay: inline-block;\n\t\tfloat: left;\n\t}\n\t.container{\n\t\twidth: 100%;\n\t\tpadding: 0 5px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"container\">\n\t<h2>{{category}}</h2>\n\t<div *ngFor=\"let pr of product;\">\n\t\t<a routerLink=\"/product/{{pr.name}}\" *ngIf=\"pr.name\">\n\t\t<mat-card class=\"theProduct\">\t\t\n\t\t\t<img mat-card-image src=\"https://raw.githubusercontent.com/vishal-pandey/giftsboutiq.com/master/src/assets/images/placeholder1.jpg\"><br>\n\t\t\t<mat-card-content>\n\t\t\t\t<span class=\"pname\">{{pr.name}}</span><br>\n\t\t\t\t<span class=\"sprice\">&#8377;{{pr.sprice}}</span> <span class=\"price\"> &#8377;{{pr.price}}</span><span class=\"discount\">\n\t\t\t\t\t{{(pr.price-pr.sprice)/pr.price*100}}% Off\n\t\t\t\t</span><br><br>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t\t</a>\n\t</div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(categoryService, route, location) {
        var _this = this;
        this.categoryService = categoryService;
        this.route = route;
        this.location = location;
        this.prlist = JSON.stringify(this.product);
        this.route.params.subscribe(function (params) {
            _this.category = params.id;
            _this.categoryService.getProducts(_this.category).subscribe(function (result) {
                _this.product = result;
            });
        });
    }
    CategoryComponent.prototype.getProductDetail = function (theProduct) {
        return this.categoryService.getProductDetail(theProduct);
    };
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n\tbackground-color: rgb(248,248,248);\n\twidth: 100%;\n\tpadding: 10px;\n\tmin-height: 100vh;\n}\n\n\n\n.product-image{\n\twidth: 100px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.products mat-card{\n\tmargin-bottom: 10px;\n}\n\n.product-image-container{\n\twidth: 30%;\n\ttext-align: center;\n\tdisplay: inline-block;\n\t/*border: 1px solid black;*/\n}\n.description-contianer{\n\twidth: 68%;\n\tposition: absolute;\n\ttop: 10px;\n\t/*text-align: center;*/\n\tdisplay: inline-block;\n\t/*border: 1px solid black;*/\n}\n.total mat-card{\n\twidth: 90%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.sprice{\n\tfont-size: 20px;\n\tcolor: black;\n\tfont-weight: bold;\n}\n.price{\n\tcolor: grey;\n\tfont-weight: bold;\n\ttext-decoration: line-through;\n}\n.discount{\n\tfont-weight: bold;\n\tcolor: green;\n}\nmat-form-field{\n\twidth: 100%;\n}\n\n\n\n\n\n\n\n\n\n\nh1{\n\ttext-align: center;\n}\n\n\n\n\n.address-form{\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tfloat: initial;\n}\n\n\n/*.total{\n\tpadding: 15px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 90%;\n\tbackground-color: rgb(240,240,240);\n\tmargin-bottom: 15px;\n\tborder-radius: 5px;\n\tborder: 1px solid lightgrey;\n}*/\n.qty{\n\tpadding: 10px;\n\tbackground-color: lightyellow;\n\tborder-radius: 5px;\n\tmargin: 5px;\n\tborder: 1px solid lightgrey;\n}\n\n\n\n\n\n\n.profile, .orders{\n\ttext-align: center;\n\tfloat: initial;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.profile-card{\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 80%;\n}\n.profile-content{\n\tbackground-color: rgb(238,238,238);\n\tmin-height: 100vh;\n}\n.profile-heading{\n\t\n}\n\n\n\n@media only screen and (max-width: 768px) {\n\t.container{\n\t\tpadding: 5px;\n\t}\n\t.product-image-container{\n\t\twidth: 100%;\n\t}\n\t.description-contianer{\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\t.total mat-card{\n\t\twidth: 100%;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"container\" *ngIf=\"this.products.length>0\">\n<br>\n<mat-tab-group *ngIf=\"!this.userService.isLoggedIn();\">\n\t<mat-tab label=\"Login / Sign Up\">\n\t\t<ng-template mat-tab-label>\n      Login / SignUp\n    </ng-template>\n    <br>\n\t\t<mat-card class=\"col-sm-6\">\n\t\t\t<mat-card-content>\n\t\t\t\t<form class=\"login-form text-center\" [formGroup]=\"lForm\" (submit)=\"mLogin(lForm.value)\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"mobile\" class=\"\" placeholder=\"Mobile\" required=\"true\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"password\" matInput formControlName=\"password\" placeholder=\"Password\" required=\"true\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<button mat-raised-button color=\"primary\" [disabled]=\"!lForm.valid\" >Login</button>\n\t\t\t\t</form>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t\t<mat-card class=\"col-sm-6\">\n\t\t\t<mat-card-content>\n\t\t\t\t<form class=\"signup-form text-center\" [formGroup]=\"sForm\" (submit)=\"mSignup(sForm.value)\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"name\"  placeholder=\"Name\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"mobile\"  placeholder=\"Mobile No\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"email\" matInput formControlName=\"email\"  placeholder=\"Email\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"password\" matInput formControlName=\"password\"  placeholder=\"New Password\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input type=\"password\" matInput formControlName=\"rpassword\"  placeholder=\"Re Inter New Password\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<button mat-raised-button [disabled]=\"!sForm.valid\">Sign Up</button>\n\t\t\t\t</form>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t\t<br>\n\t</mat-tab>\n\t<mat-tab label=\"Address\" [disabled]=\"!this.userService.isLoggedIn()\"></mat-tab>\n\t<mat-tab label=\"Order Summary\" disabled></mat-tab>\n</mat-tab-group>\n\n<mat-tab-group *ngIf=\"this.userService.isLoggedIn()\" [(selectedIndex)]=\"addindex\">\n\t<mat-tab>\n\t\t<ng-template mat-tab-label>\n      {{user.name}}\n    </ng-template>\n\t\t<br>\n\t\t<mat-card class=\"profile-card\">\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title><h4 class=\"profile-heading\">User Profile</h4></mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<mat-list>\n\t\t\t\t\t<mat-list-item><b>Name : </b> {{user.name}}</mat-list-item>\n\t\t\t\t\t<mat-list-item><b>Mobile : </b>{{user.mobile}}</mat-list-item>\n\t\t\t\t\t<mat-list-item><b>Email : </b>{{user.email}}</mat-list-item>\n\t\t\t\t\t<mat-list-item *ngIf=\"user.address\"><b>Address :</b>{{user.address}}</mat-list-item>\n\t\t\t\t\t<mat-list-item *ngIf=\"!user.address\"><b>Address :</b>\t\t\t\tAssress Not Defined\t</mat-list-item>\n\t\t\t\t</mat-list>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</mat-tab>\n\t<mat-tab label=\"Address\">\n\t\t<h2 align=\"center\">Delivery Address</h2>\n\t\t<mat-card class=\"col-sm-6 address-form text-center\" *ngIf=\"address\">\n\t\t\t<mat-card-content>\n\t\t\t\t{{address}}\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t\t<br>\n\t\t<mat-card class=\"col-sm-6 address-form text-center\">\n\t\t\t<mat-card-content>\n\t\t\t\t<form class=\" text-center\" [formGroup]=\"aForm\" (submit)=\"submitAddress(aForm.value)\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<textarea matInput formControlName=\"address\" placeholder=\"Update Address\"></textarea>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<button mat-raised-button [disabled]=\"!aForm.valid\">Update</button>\n\t\t\t\t</form>\t\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t\t<br>\n\t\t<mat-card class=\"col-sm-6 address-form text-center\">\n\t\t\t<mat-card-content>\n\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"toggleAddTab()\">Continue</button>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</mat-tab>\n\n\t<mat-tab label=\"Order Summary\">\n\t\t<br>\n\t\t<section class=\"col-sm-8 products\" style=\"padding: 0\">\n\t\t\t<mat-card *ngFor=\"let pr of products;\">\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<div class=\"product-image-container\">\n\t\t\t\t\t\t<img src=\"https://raw.githubusercontent.com/vishal-pandey/giftsboutiq.com/master/src/assets/images/placeholder1.jpg\" class=\"product-image\"><br>\n\t\t\t\t\t\t<button mat-mini-fab (click)=\"this.cartService.minusone(pr.id)\">-</button><button mat-fab color=\"warn\">{{pr.val}}</button><button mat-mini-fab (click)=\"this.cartService.plusone(pr.id)\">+</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"description-contianer\">\n\t\t\t\t\t\t<h5>{{getProductDetail(pr.id)?.name}}</h5>\n\t\t\t\t\t\t<span class=\"sprice\">&#8377; {{getProductDetail(pr.id)?.sprice}}</span>\n\t\t\t\t\t\t<span class=\"price\">&#8377; {{getProductDetail(pr.id)?.price}}</span>\n\t\t\t\t\t\t<span class=\"discount\">\n\t\t\t\t\t\t\t{{(getProductDetail(pr.id)?.price-getProductDetail(pr.id)?.sprice)/getProductDetail(pr.id)?.price*100}}% Off\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<p>{{getProductDetail(pr.id)?.description}}</p>\n\t\t\t\t\t\t<button mat-raised-button color=\"warn\" (click)=\"this.cartService.removeProduct(getProductDetail(pr.id)?.name)\">Remove</button>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</section>\n\t\t<section class=\"total col-sm-4\" style=\"padding: 0\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t<h5>Total</h5>\n\t\t\t\t\t</mat-card-title>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content style=\"text-align: center;\">\n\t\t\t\t\t<span class=\"sprice\">&#8377; {{getTotal()}}</span>\n\t\t\t\t\t<span class=\"price\">&#8377; {{getpTotal()}}</span>\n\t\t\t\t\t<br>\n\t\t\t\t\t<span class=\"discount\">You Save &#8377; {{getpTotal()-getTotal()}}</span>\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-card-actions style=\"text-align: center;\">\n\t\t\t\t\t<a routerLink=\"/\"><button mat-raised-button color=\"accent\">Continue Shopping</button></a>\n\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"placeOrder()\">Place Order</button>\n\t\t\t\t</mat-card-actions>\n\t\t\t</mat-card>\n\t\t</section>\n\t\t<section class=\"total col-sm-4\" style=\"padding: 0\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t<h5>Delivery Address</h5>\n\t\t\t\t\t</mat-card-title>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content style=\"text-align: center;\">\n\t\t\t\t\t{{address}}\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</section>\n\t</mat-tab>\n</mat-tab-group>\n</section>\n<section class=\"container text-center\" *ngIf=\"this.products.length == 0\">\n\t<h1>Your Cart Is Empty</h1>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckoutComponent = (function () {
    function CheckoutComponent(fb, userService, router, cartService, categoryService, cookieService) {
        var _this = this;
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.cartService = cartService;
        this.categoryService = categoryService;
        this.cookieService = cookieService;
        this.categories = this.categoryService.category;
        this.mobile = "";
        this.password = "";
        this.rpassword = "";
        this.name = "";
        this.email = "";
        this.addresstab = true;
        this.addindex = "1";
        this.user = {};
        // viewcart functions
        this.products = this.cartService.products;
        this.prArray = [];
        var addresss;
        this.lForm = fb.group({
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.sForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'rpassword': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        if (this.userService.isLoggedIn()) {
            this.getAddress();
        }
        this.aForm = fb.group({
            "address": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            this.categoryService.getProductDetail(pr.id).subscribe(function (result) {
                // this.theProduct = result;
                _this.prArray.push(result);
                // console.log(result);
            });
        }
    }
    CheckoutComponent.prototype.getProductDetail = function (pr) {
        for (var _i = 0, _a = this.prArray; _i < _a.length; _i++) {
            var prs = _a[_i];
            if (pr == prs.name) {
                return prs;
            }
        }
    };
    CheckoutComponent.prototype.getTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            var pall = { "pid": "", "cid": "", "name": "", "price": "", "sprice": "", "description": "", "qty": "" };
            for (var _b = 0, _c = this.prArray; _b < _c.length; _b++) {
                var prs = _c[_b];
                if (pr.id == prs.name) {
                    pall = prs;
                }
            }
            var price = parseInt(pall.sprice);
            var qty = parseInt(pr.val);
            total += (price * qty);
        }
        return total;
    };
    CheckoutComponent.prototype.getpTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            var pall = { "pid": "", "cid": "", "name": "", "price": "", "sprice": "", "description": "", "qty": "" };
            for (var _b = 0, _c = this.prArray; _b < _c.length; _b++) {
                var prs = _c[_b];
                if (pr.id == prs.name) {
                    pall = prs;
                }
            }
            var price = parseInt(pall.price);
            var qty = parseInt(pr.val);
            total += (price * qty);
        }
        return total;
    };
    CheckoutComponent.prototype.toggleAddTab = function () {
        this.getAddress();
        if (this.addindex == "1") {
            this.addresstab = false;
            this.addindex = "2";
        }
        else {
            this.addresstab = true;
            this.addindex = "1";
        }
    };
    CheckoutComponent.prototype.getAddress = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (result) {
            _this.address = result.address;
            _this.user = result;
        });
    };
    CheckoutComponent.prototype.mLogin = function (post) {
        var _this = this;
        this.mobile = post.mobile;
        this.password = post.password;
        this.userService.login(this.mobile, this.password).subscribe(function (result) {
            if (result.key == "success") {
                _this.userService.saveToken(result.value);
                _this.cartService.updateCart();
                _this.getAddress();
                window.location.reload();
                // this.address = true;
                // this.router.navigate(['']);
            }
            else {
                _this.error = result.key;
                alert(_this.error);
            }
        });
        return false;
    };
    CheckoutComponent.prototype.mSignup = function (post) {
        var _this = this;
        this.name = post.name;
        this.mobile = post.mobile;
        this.email = post.email;
        this.password = post.password;
        this.rpassword = post.rpassword;
        this.userService.signup(this.name, this.mobile, this.email, this.password, this.rpassword).subscribe(function (result) {
            if (result == "success") {
                _this.userService.login(_this.mobile, _this.password).subscribe(function (result) {
                    if (result.key == "success") {
                        _this.userService.saveToken(result.value);
                        _this.cartService.updateCart();
                        _this.getAddress();
                        // this.address = true;
                        // this.router.navigate(['']);
                    }
                    else {
                        _this.error = result.key;
                        alert(_this.error);
                    }
                });
                // alert("Sign Up Successful Click Ok to go to login page");
                // this.router.navigate(['/login']);
            }
            else {
                _this.error = result;
                alert(_this.error);
            }
        });
        return false;
    };
    CheckoutComponent.prototype.submitAddress = function (post) {
        this.address = post.address;
        if (this.userService.updateAddress(this.address)) {
            this.addresstab = false;
        }
    };
    CheckoutComponent.prototype.placeOrder = function () {
        var _this = this;
        var token = this.cookieService.get('jwt');
        var order = JSON.stringify(this.cartService.products);
        var cost = this.getTotal();
        var toSend = {
            "token": token,
            "order": order,
            "cost": cost
        };
        this.cartService.placeOrder(token, order, cost).subscribe(function (result) {
            if (result == "success") {
                _this.cartService.commitOrder().subscribe(function (result) {
                    _this.router.navigate(['/profile']);
                });
            }
            else {
                console.log(result);
            }
        });
    };
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_cookie_service__["a" /* CookieService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header-a/header-a.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-a/header-a.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/components/header-a/header-a.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderAComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderAComponent = (function () {
    function HeaderAComponent(categoryService) {
        this.categoryService = categoryService;
    }
    HeaderAComponent.prototype.ngOnInit = function () {
    };
    HeaderAComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header-a',
            template: __webpack_require__("../../../../../src/app/components/header-a/header-a.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header-a/header-a.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], HeaderAComponent);
    return HeaderAComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tdisplay: inline-block;\n}\nh1{\n\ttext-align: center;\n}\nh1 a{\n\tcolor: white;\n}\nul{\n\ttext-align: center;\n\tmargin: 20px;\n}\n.cart{\n\tfloat: right;\n}\n.user{\n\tfloat: left;\n}\n.cover{\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n}\n.header{\n\tbackground-color: lightgreen;\n\theight: 25px;\n\tpadding: 0px;\n\toverflow: hidden;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.cat{\n\tdisplay: block;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t/*height: cover;*/\n\theight: 100%;\n\twidth: 100%;\n}\n.tabb{\n\tpadding: 0;\n}\n.header-container{\n\tbox-shadow: 0px 5px 5px rgb(200,200,200); \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1><a routerLink=\"/\">{{title}}</a></h1> -->\n<mat-toolbar color=\"accent\" >\n\t<mat-toolbar-row class=\"header\">\n\t  <span class=\"cover\"></span>\n\t\t<app-user></app-user>\n\t</mat-toolbar-row>\n\t<mat-toolbar-row class=\"header-container\">\n\t  <span><button mat-raised-button color=\"warn\" [matMenuTriggerFor]=\"menu\">Categories</button></span>\n\t  <span class=\"cover\"></span>\n\t  <span><h1><a routerLink=\"/\">{{title}}</a></h1></span>\n\t  <span class=\"cover\"></span>\n\t  <span><app-cart></app-cart></span>\n\t</mat-toolbar-row>\n</mat-toolbar>\n\n\n<!-- \n<mat-tab-group>\n  <span *ngFor=\"let category of categories\">\n  \t<mat-tab class=\"tabb\">\n  \t\t<ng-template mat-tab-label>\n      \t<a routerLink=\"/category/{{category.name}}\" *ngIf=\"category.name\" class=\"cat\" >{{category.name}}</a>\n\t    </ng-template>\n  \t</mat-tab>\n\t</span>\n</mat-tab-group> -->\n\n<mat-menu #menu=\"matMenu\">\n\t<span *ngFor=\"let category of categories\">\n\t\t<a routerLink=\"/category/{{category.name}}\" *ngIf=\"category.name\" class=\"cat\" ><button mat-menu-item>{{category.name}}</button></a>\n\t</span>\n</mat-menu>\n<!-- <ul>\n\t<li *ngFor=\"let category of categories\"><a routerLink=\"/category/{{category.name}}\" *ngIf=\"category.name\" ><button class=\"btn btn-default\">{{category.name}}</button></a></li>\n</ul> -->\n\n<!-- <app-cart></app-cart> -->"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(categoryService, appComponent, cookieService) {
        this.categoryService = categoryService;
        this.appComponent = appComponent;
        this.cookieService = cookieService;
        this.cookieValue = "Unknown";
        this.categories = [];
        this.title = this.appComponent.title;
    }
    HeaderComponent.prototype.navig = function (link) {
        alert(link);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategory()
            .subscribe(function (result) {
            _this.categories = result;
        });
        ;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(route, location, categoryService) {
        this.route = route;
        this.location = location;
        this.categoryService = categoryService;
        this.category = this.route.snapshot.paramMap.get('category');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form, .signup-form{\n\twidth: 50%;\n\tfloat: initial;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.error{\n\tcolor: orange;\n\tmargin-top: 30px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding: 15px;\n\twidth: 60%;\n\tbackground-color: rgb(245,245,245);\n\ttext-align: center;\n\tborder: 1px solid lightgrey;\n}\n.theInput{\n\twidth: 100%;\n}\n@media only screen and (max-width: 768px) {\n\t.login-form, .signup-form{\n\t\twidth: 90%;\n\t}\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"login text-center\" *ngIf=\"isLogin()\">\n\t<h2>Login</h2>\n\t<form class=\"login-form text-center\" [formGroup]=\"lForm\" (submit)=\"mLogin(lForm.value)\">\n\t\t<mat-form-field  class=\"theInput\">\n\t\t\t<input matInput type=\"text\" formControlName=\"mobile\" placeholder=\"Mobile\" required=\"true\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"password\" formControlName=\"password\" class=\"\" placeholder=\"Password\" required=\"true\">\n\t\t</mat-form-field>\n\t\t<button class=\"btn btn-default\" [disabled]=\"!lForm.valid\" >Login</button>\n\t\t<a routerLink=\"/signup\"><button class=\"btn btn-default\">Sign Up</button></a>\n\t</form>\n</section>\n<section class=\"signUp text-center\" *ngIf=\"!isLogin()\">\n\t<h2>Sign Up</h2>\n\t<form class=\"signup-form text-center\" [formGroup]=\"sForm\" (submit)=\"mSignup(sForm.value)\">\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"text\" formControlName=\"name\" class=\"\" placeholder=\"Name\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"text\" formControlName=\"mobile\" class=\"\" placeholder=\"Mobile No\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"email\" formControlName=\"email\" class=\"\" placeholder=\"Email\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"password\" formControlName=\"password\" class=\"\" placeholder=\"New Password\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"theInput\">\n\t\t\t<input matInput type=\"password\" formControlName=\"rpassword\" class=\"\" placeholder=\"Re Inter New Password\">\n\t\t</mat-form-field>\n\t\t<button class=\"btn btn-default\" [disabled]=\"!sForm.valid\">Sign Up</button>\n\t</form>\n\t<a routerLink=\"/login\"><button class=\"btn btn-default\">Login</button></a>\n</section>\n\n<section *ngIf=\"error\" class=\"error\">{{error}}</section>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, userService, router, cartService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.cartService = cartService;
        this.mobile = "";
        this.password = "";
        this.rpassword = "";
        this.name = "";
        this.email = "";
        this.path = window.location.pathname;
        this.lForm = fb.group({
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.sForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'rpassword': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    }
    LoginComponent.prototype.mLogin = function (post) {
        var _this = this;
        this.mobile = post.mobile;
        this.password = post.password;
        this.userService.login(this.mobile, this.password).subscribe(function (result) {
            _this.error = result.key;
            if (result.key == "success") {
                _this.userService.saveToken(result.value);
                _this.cartService.updateCart();
                _this.router.navigate(['']);
            }
        });
        return false;
    };
    LoginComponent.prototype.mSignup = function (post) {
        var _this = this;
        this.name = post.name;
        this.mobile = post.mobile;
        this.email = post.email;
        this.password = post.password;
        this.rpassword = post.rpassword;
        this.userService.signup(this.name, this.mobile, this.email, this.password, this.rpassword).subscribe(function (result) {
            if (result == "success") {
                alert("Sign Up Successful Click Ok to go to login page");
                _this.router.navigate(['/login']);
            }
            else {
                _this.error = result;
            }
        });
        return false;
    };
    LoginComponent.prototype.isLogin = function () {
        if (this.path == "/login")
            return true;
        else
            return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\n\t/*width: 100%;*/\n\t/*background-color: rgb(240,240,240);*/\n\t/*min-height: 100vh;*/\n}\nimg{\n\t/*width: 100%;*/\n}\n\n.container{\n\twidth: 100%;\n\tbackground-color: rgb(240,240,240);\n\tpadding-top: 15px;\n}\n.description{\n\twidth: 60%;\n\tfloat: left;\n\tmin-height: 80vh;\n}\n\n.sprice{\n\tfont-size: 20px;\n\tcolor: black;\n\tfont-weight: bold;\n}\n.price{\n\tcolor: grey;\n\tfont-weight: bold;\n\ttext-decoration: line-through;\n}\n.discount{\n\tfont-weight: bold;\n\tcolor: green;\n}\n.review{\n\tmargin: 5px 0;\n}\n\n.thereview{\n\tborder: 1px solid lightgrey;\n\twidth: 100%;\n\tpadding: 10px;\n}\n.rdate{\n\tfont-size:13px;\n\tfloat: right;\n}\n.rating{\n\tfont-size: 20px;\n\tcolor: #FDD835;\n}\n.name{\n\tmargin: 0 10px;\n}\n.rdate{\n\t/*float: right;*/\n}\n.comment{\n\tpadding: 10px;\n\tdisplay: block;\n}\n\n.photo{\n\twidth: 40%;\n\tfloat: left;\n\ttext-align: center;\n}\n.photo button{\n\twidth: 40%;\n\tmargin: 10px;\n}\nmat-list-item{\n\theight: auto;\n}\nmat-form-field{\n\twidth: 100%;\n}\n@media only screen and (max-width: 768px) {\n\t.description{\n\t\twidth: 100%;\n\t\tmin-height: auto;\n\t}\n\t.photo{\n\t\twidth: 100%;\n\t}\n\t.container{\n\t\tpadding: 0;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"container\">\n\t<mat-card class=\"photo\">\n\t\t<img mat-card-image src=\"https://raw.githubusercontent.com/vishal-pandey/giftsboutiq.com/master/src/assets/images/placeholder1.jpg\">\n\t\t<mat-card-actions>\n\t\t\t<button mat-raised-button color=\"primary\" *ngIf=\"!isAdded(); else gotocart\" (click)=\"addToCart()\"> Add To Cart</button>\n\t\t\t<button mat-raised-button color=\"primary\" class=\"btn btn-default\" (click)=\"buyNow()\">Buy Now</button>\t\n\t\t</mat-card-actions>\n\t</mat-card>\n\t<ng-template #gotocart><a routerLink=\"/viewcart\"><button mat-raised-button color=\"primary\">Go to Cart</button></a></ng-template>\n\t<mat-card class=\"description\">\n\t\t<mat-card-header>\n\t\t\t<mat-card-title>\n\t\t\t\t<h3>{{theProduct.name}}</h3>\n\t\t\t</mat-card-title>\n\t\t\t<mat-card-subtitle>\n\t\t\t\t<span class=\"sprice\">Rs{{theProduct.sprice}}</span> \n\t\t\t\t<span class=\"price\">Rs{{theProduct.price}}</span>\n\t\t\t\t<span class=\"discount\">\n\t\t\t\t\t{{(theProduct.price-theProduct.sprice)/theProduct.price*100}}% Off\n\t\t\t\t</span>\n\t\t\t</mat-card-subtitle>\n\t\t</mat-card-header>\n\t\t<mat-card-content>\n\t\t  <p>\n\t\t    {{theProduct.description}}\n\t\t  </p>\n\t\t</mat-card-content>\n\t</mat-card>\n\t\n</section>\n<section class=\"container\">\n\t<mat-card>\n\t\t<mat-card-header>\n\t\t\t<mat-card-title>\n\t\t\t\t<h4>Ratings and Reviews</h4>\n\t\t\t</mat-card-title>\n\t\t</mat-card-header>\n\t\t<mat-card-content>\n\t\t\t<!-- <mat-list> -->\n\t\t\t\t<!-- <mat-list-item *ngFor=\"let review of reviews\"> -->\n\t\t\t\t<section *ngFor=\"let review of reviews\" class=\"review\">\n\t\t\t\t\t<div class=\"thereview\" *ngIf=\"review.name\">\n\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t<span class=\"name\"><b>{{review.name}}</b></span>\n\t\t\t\t\t\t\t<span class=\"rating\">{{review.rating | excerpt}}</span>\n\t\t\t\t\t\t\t<span class=\"rdate\"><i>{{review.rdate | date}}</i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div style=\"width: 100%;\">\n\t\t\t\t\t\t\t<span class=\"comment\">{{review.comment}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t<mat-card-title>Submit Your Review</mat-card-title>\n\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form class=\"text-center\" [formGroup]=\"rForm\" (submit)=\"submitReview(rForm.value)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<select matInput class=\"\" formControlName=\"rating\">\n\t\t\t\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t\t\t\t<option value=\"4\">4</option>\n\t\t\t\t\t\t\t\t\t<option value=\"5\">5</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"name\" class=\"theInput\" placeholder=\"Name\">\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input type=\"email\" matInput formControlName=\"email\" class=\"theInput\" placeholder=\"Email\">\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<textarea matInput formControlName=\"comment\" class=\"theInput\" placeholder=\"Comment\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\">Submit</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t</mat-card>\n\n\t\t\t\t<!-- </mat-list-item> -->\n\t\t\t<!-- </mat-list> -->\n\t\t</mat-card-content>\n\t</mat-card>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_rating_service__ = __webpack_require__("../../../../../src/app/services/rating.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductComponent = (function () {
    function ProductComponent(categoryService, route, router, location, cartService, ratingService, fb) {
        var _this = this;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.cartService = cartService;
        this.ratingService = ratingService;
        this.fb = fb;
        this.product = this.route.snapshot.paramMap.get('id');
        this.theProduct = { "pid": "", "cid": "", "name": "", "price": "", "sprice": "", "description": "", "qty": "" };
        this.pid = this.product;
        this.reviews = [];
        this.rForm = fb.group({
            'rating': [1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'comment': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
        });
        this.categoryService.getProductDetail(this.product).subscribe(function (result) {
            _this.theProduct = result;
        });
    }
    ProductComponent.prototype.addToCart = function () {
        this.cartService.addProduct(this.theProduct.name);
    };
    ProductComponent.prototype.isAdded = function () {
        for (var _i = 0, _a = this.cartService.products; _i < _a.length; _i++) {
            var x = _a[_i];
            if (this.theProduct.name === x.id) {
                return true;
            }
        }
        return false;
    };
    ProductComponent.prototype.buyNow = function () {
        if (!this.isAdded()) {
            this.addToCart();
        }
        this.router.navigate(['/checkout']);
    };
    ProductComponent.prototype.submitReview = function (post) {
        var data = {
            "pid": this.pid,
            "rating": post.rating,
            "name": post.name,
            "email": post.email,
            "comment": post.comment
        };
        this.ratingService.submitReview(this.pid, post.rating, post.name, post.email, post.comment)
            .subscribe(function (result) {
            if (result == "success") {
                alert("Thanks for your review It Would be published when approved");
            }
        });
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratingService.fetchReview(this.product).subscribe(function (result) {
            _this.reviews = result;
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_7__services_rating_service__["a" /* RatingService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile, .orders{\n\ttext-align: center;\n\tfloat: initial;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.profile-card{\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 80%;\n}\n.profile-content{\n\tbackground-color: rgb(238,238,238);\n\tmin-height: 100vh;\n}\n.profile-heading{\n\t\n}\nmat-card-header{\n\tborder-bottom: 1px solid lightgrey;\n}\n\n\n.order-card{\n\ttext-align: left;\n\tmargin-bottom: 10px;\n}\n\n\n\n.product-image-container{\n\twidth: 30%;\n\ttext-align: center;\n\tdisplay: inline-block;\n\t/*border: 1px solid black;*/\n}\n.description-contianer{\n\twidth: 68%;\n\tposition: absolute;\n\ttop: 10px;\n\t/*border: 1px solid black;*/\n\tdisplay: inline-block;\n\n}\n.product-image{\n\twidth: 100px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.orders{\n\twidth: 60%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n@media only screen and (max-width: 768px) {\n\t.profile-card, .orders{\n\t\twidth: 95%;\n\t}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"profile-content\">\n\t<br>\n\t<mat-card class=\"profile-card\">\n\t\t<mat-card-header>\n\t\t\t<mat-card-title><h4 class=\"profile-heading\">User Profile</h4></mat-card-title>\n\t\t</mat-card-header>\n\t\t<mat-card-content>\n\t\t\t<mat-list>\n\t\t\t\t<mat-list-item><b>Name : </b> {{user.name}}</mat-list-item>\n\t\t\t\t<mat-list-item><b>Mobile : </b>{{user.mobile}}</mat-list-item>\n\t\t\t\t<mat-list-item><b>Email : </b>{{user.email}}</mat-list-item>\n\t\t\t\t<mat-list-item *ngIf=\"user.address\"><b>Address :</b>{{user.address}}</mat-list-item>\n\t\t\t\t<mat-list-item *ngIf=\"!user.address\"><b>Address :</b>\t\t\t\tAssress Not Defined\t</mat-list-item>\n\t\t\t</mat-list>\n\t\t</mat-card-content>\n\t</mat-card>\n\t<br>\n\t<section class=\"orders\">\n\t\t<mat-card *ngFor=\"let order of orders\" class=\"order-card\">\n\t\t\t<mat-card-content *ngIf=\"order.oid\">\n\t\t\t\t<div class=\"descrition-contianer text-center\">\n\t\t\t\t\t<h5><b>Order Id : </b> {{order.oid}}</h5>\n\t\t\t\t\t<b>Ordered On : </b>{{order.date | date}}<br>\n\t\t\t\t\t<b>Delivery Address : </b>{{order.address}}<br>\n\t\t\t\t\t<b>Order Cost : </b>{{order.cost}}<br>\n\t\t\t\t</div>\n\t\t\t\t<mat-list>\n\t\t\t\t\t<div *ngFor=\"let theorder of order.order\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<img src=\"https://raw.githubusercontent.com/vishal-pandey/giftsboutiq.com/master/src/assets/images/placeholder1.jpg\" class=\"product-image\" width=\"100\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t{{theorder.id}}\tX {{theorder.val}}\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-list>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</section>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.user = {};
        this.orders = [];
        this.userService.getOrders().subscribe(function (result) {
            _this.orders = result;
            // console.log(JSON.stringify(this.orders));
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.isLoggedIn()) {
            this.userService.getUser().subscribe(function (result) {
                // console.log(result);
                _this.user = result;
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user{\n\tpadding: 10px;\n\tmargin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"isLoggedIn\">\n\t<a routerLink=\"/profile\"><button mat-button class=\"\">User Profile</button></a>\n\t<button mat-button class=\"\" (click)=\"this.userService.logOut()\">Logout</button>\n</section>\n<section *ngIf=\"!isLoggedIn\">\n\t<a routerLink=\"/signup\"><button mat-button class=\"\">Sign Up</button></a>\n\t<a routerLink=\"/login\"><button mat-button class=\"\">Log In</button></a>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.isLoggedIn = this.userService.isLoggedIn();
        // if (this.isLoggedIn) {
        // 	this.userService.getUser().subscribe((result)=>{
        // 		this.user = result.name;
        // 		console.log(result);
        // 	});
        // }
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/viewcart/viewcart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n\tpadding-top: 15px;\n\twidth: 100%;\n\tbackground-color: rgb(248,248,248);\n\tmin-height: 100vh;\n}\n.product-image{\n\twidth: 100px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.products mat-card{\n\tmargin-bottom: 10px;\n}\n\n.product-image-container{\n\twidth: 30%;\n\ttext-align: center;\n\tdisplay: inline-block;\n\t/*border: 1px solid black;*/\n}\n.description-contianer{\n\twidth: 68%;\n\tposition: absolute;\n\ttop: 10px;\n\t/*text-align: center;*/\n\tdisplay: inline-block;\n\t/*border: 1px solid black;*/\n}\n.total mat-card{\n\twidth: 90%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.sprice{\n\tfont-size: 20px;\n\tcolor: black;\n\tfont-weight: bold;\n}\n.price{\n\tcolor: grey;\n\tfont-weight: bold;\n\ttext-decoration: line-through;\n}\n.discount{\n\tfont-weight: bold;\n\tcolor: green;\n}\n\n.qty{\n\tpadding: 10px;\n\tbackground-color: lightyellow;\n\tborder-radius: 5px;\n\tmargin: 5px;\n\tborder: 1px solid lightgrey;\n}\n@media only screen and (max-width: 768px) {\n\t.container{\n\t\tpadding: 5px;\n\t}\n\t.product-image-container{\n\t\twidth: 100%;\n\t}\n\t.description-contianer{\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\t.total mat-card{\n\t\twidth: 100%;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/viewcart/viewcart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"container\"  *ngIf=\"products.length>0\">\n\t<section class=\"col-sm-8 products\" style=\"padding: 0\">\n\t\t<mat-card *ngFor=\"let pr of products;\">\n\t\t\t<mat-card-content>\n\t\t\t\t<div class=\"product-image-container\">\n\t\t\t\t\t<img src=\"https://raw.githubusercontent.com/vishal-pandey/giftsboutiq.com/master/src/assets/images/placeholder1.jpg\" class=\"product-image\"><br>\n\t\t\t\t\t<button mat-mini-fab (click)=\"this.cartService.minusone(pr.id)\">-</button><button mat-fab color=\"warn\">{{pr.val}}</button><button mat-mini-fab (click)=\"this.cartService.plusone(pr.id)\">+</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"description-contianer\">\n\t\t\t\t\t<h5>{{getProductDetail(pr.id)?.name}}</h5>\n\t\t\t\t\t<span class=\"sprice\">&#8377; {{getProductDetail(pr.id)?.sprice}}</span>\n\t\t\t\t\t<span class=\"price\">&#8377; {{getProductDetail(pr.id)?.price}}</span>\n\t\t\t\t\t<span class=\"discount\">\n\t\t\t\t\t\t{{(getProductDetail(pr.id)?.price-getProductDetail(pr.id)?.sprice)/getProductDetail(pr.id)?.price*100}}% Off\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<p>{{getProductDetail(pr.id)?.description}}</p>\n\t\t\t\t\t<button mat-raised-button color=\"warn\" (click)=\"this.cartService.removeProduct(getProductDetail(pr.id)?.name)\">Remove</button>\n\t\t\t\t</div>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</section>\n\t<section class=\"total col-sm-4\" style=\"padding: 0\">\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>\n\t\t\t\t\t<h5>Total</h5>\n\t\t\t\t</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content style=\"text-align: center;\">\n\t\t\t\t<span class=\"sprice\">&#8377; {{getTotal()}}</span>\n\t\t\t\t<span class=\"price\">&#8377; {{getpTotal()}}</span>\n\t\t\t\t<br>\n\t\t\t\t<span class=\"discount\">You Save &#8377; {{getpTotal()-getTotal()}}</span>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions style=\"text-align: center;\">\n\t\t\t\t<a routerLink=\"/\"><button mat-raised-button color=\"accent\">Continue Shopping</button></a>\n\t\t\t\t<a routerLink=\"/checkout\"><button mat-raised-button color=\"primary\">Place Order</button></a>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t</section>\n</section>\n<section *ngIf=\"products.length==0\" class=\"container text-center\">\n\t<h1>!!! Your Cart Is Empty !!!</h1>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/viewcart/viewcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewcartComponent = (function () {
    function ViewcartComponent(cartService, categoryService) {
        var _this = this;
        this.cartService = cartService;
        this.categoryService = categoryService;
        this.products = this.cartService.products;
        // theProduct = {"pid":"","cid":"","name":"","price":"","sprice":"","description":"","qty":""};
        this.prArray = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            this.categoryService.getProductDetail(pr.id).subscribe(function (result) {
                // this.theProduct = result;
                _this.prArray.push(result);
                // console.log(result);
            });
        }
    }
    ViewcartComponent.prototype.getProductDetail = function (pr) {
        for (var _i = 0, _a = this.prArray; _i < _a.length; _i++) {
            var prs = _a[_i];
            if (pr == prs.name) {
                return prs;
            }
        }
    };
    ViewcartComponent.prototype.getTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            var pall = { "pid": "", "cid": "", "name": "", "price": "", "sprice": "", "description": "", "qty": "" };
            for (var _b = 0, _c = this.prArray; _b < _c.length; _b++) {
                var prs = _c[_b];
                if (pr.id == prs.name) {
                    pall = prs;
                }
            }
            var price = parseInt(pall.sprice);
            var qty = parseInt(pr.val);
            total += (price * qty);
        }
        return total;
    };
    ViewcartComponent.prototype.getpTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            var pall = { "pid": "", "cid": "", "name": "", "price": "", "sprice": "", "description": "", "qty": "" };
            for (var _b = 0, _c = this.prArray; _b < _c.length; _b++) {
                var prs = _c[_b];
                if (pr.id == prs.name) {
                    pall = prs;
                }
            }
            var price = parseInt(pall.price);
            var qty = parseInt(pr.val);
            total += (price * qty);
        }
        return total;
    };
    ViewcartComponent.prototype.ngOnInit = function () {
    };
    ViewcartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewcart',
            template: __webpack_require__("../../../../../src/app/components/viewcart/viewcart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/viewcart/viewcart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], ViewcartComponent);
    return ViewcartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/excerpt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcerptPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (rating, limit) {
        if (rating == "1") {
            return "★☆☆☆☆";
        }
        else if (rating == "2") {
            return "★★☆☆☆";
        }
        else if (rating == "3") {
            return "★★★☆☆";
        }
        else if (rating == "4") {
            return "★★★★☆";
        }
        else if (rating == "5") {
            return "★★★★★";
        }
        // if(!text) return null;
        // let desiredLimit = (limit) ? limit : 20;
        // return text.substr(0, desiredLimit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'excerpt'
        })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "../../../../../src/app/guards/checkout.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutGuard = (function () {
    function CheckoutGuard(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    CheckoutGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkCart();
    };
    CheckoutGuard.prototype.checkCart = function () {
        if (this.cartService.products.length > 0) {
            return true;
        }
        else {
            this.router.navigate(['/viewcart']);
            return false;
        }
    };
    CheckoutGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CheckoutGuard);
    return CheckoutGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/profile.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileGuard = (function () {
    function ProfileGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    ProfileGuard.prototype.checkLogin = function (url) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    ProfileGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
        // export class ProfileGuard implements CanActivate {
        //   canActivate(
        //     next: ActivatedRouteSnapshot,
        //     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //     return true;
        //   }
        // }
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(cookieService, http, userService) {
        this.cookieService = cookieService;
        this.http = http;
        this.userService = userService;
        this.products = [];
        if (this.cookieService.check("products")) {
            this.products = JSON.parse(this.cookieService.get("products"));
        }
        if (this.userService.isLoggedIn()) {
            this.token = this.cookieService.get('jwt');
        }
    }
    CartService.prototype.updateCart = function () {
        var _this = this;
        this.token = this.cookieService.get('jwt');
        this.http.post("http://api.giftsboutiq.com/cart/get.php", {
            "token": this.token,
        }).map(function (res) { return res.text(); }).subscribe(function (result) {
            var cproducts = JSON.parse(_this.cookieService.get("products"));
            var sproduct = JSON.parse(result);
            _this.products = _this.arrayUnique(cproducts.concat(sproduct));
            // console.log(this.products);
            _this.http.post("http://api.giftsboutiq.com/cart/add.php", {
                "token": _this.token,
                "value": JSON.stringify(_this.products),
            }).map(function (res) { return res.text(); }).subscribe(function (result) { });
        });
    };
    CartService.prototype.plusone = function (productId) {
        for (var i in this.products) {
            if (this.products[i].id == productId) {
                if (this.products[i].val < 10) {
                    this.products[i].val += 1;
                    this.cookieService.set("products", JSON.stringify(this.products), 360000, "/");
                    if (this.userService.isLoggedIn()) {
                        this.http.post("http://api.giftsboutiq.com/cart/add.php", {
                            "token": this.token,
                            "value": JSON.stringify(this.products),
                        }).map(function (res) { return res.text(); }).subscribe(function (result) {
                        });
                    }
                    break;
                }
            }
        }
    };
    CartService.prototype.minusone = function (productId) {
        for (var i in this.products) {
            if (this.products[i].id == productId) {
                if (this.products[i].val > 1) {
                    this.products[i].val -= 1;
                    this.cookieService.set("products", JSON.stringify(this.products), 360000, "/");
                    if (this.userService.isLoggedIn()) {
                        this.http.post("http://api.giftsboutiq.com/cart/add.php", {
                            "token": this.token,
                            "value": JSON.stringify(this.products),
                        }).map(function (res) { return res.text(); }).subscribe(function (result) {
                        });
                    }
                    break;
                }
            }
        }
    };
    CartService.prototype.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].id === a[j].id)
                    a.splice(j--, 1);
            }
        }
        return a;
    };
    CartService.prototype.addProduct = function (productId) {
        var toadd = { "id": productId, "val": 1 };
        this.products.push(toadd);
        this.cookieService.set("products", JSON.stringify(this.products), 360000, "/");
        if (this.userService.isLoggedIn()) {
            this.http.post("http://api.giftsboutiq.com/cart/add.php", {
                "token": this.token,
                "value": JSON.stringify(this.products),
            }).map(function (res) { return res.text(); }).subscribe(function (result) {
            });
        }
    };
    CartService.prototype.removeProduct = function (productId) {
        var toRemove;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pr = _a[_i];
            if (pr.id == productId) {
                toRemove = pr;
                break;
            }
        }
        this.products.splice(this.products.indexOf(toRemove), 1);
        this.cookieService.set("products", JSON.stringify(this.products), 360000, "/");
        if (this.userService.isLoggedIn()) {
            this.http.post("http://api.giftsboutiq.com/cart/add.php", {
                "token": this.token,
                "value": JSON.stringify(this.products),
            }).map(function (res) { return res.text(); }).subscribe(function (result) {
            });
        }
    };
    CartService.prototype.placeOrder = function (token, order, cost) {
        return this.http.post("http://api.giftsboutiq.com/order/place.php", {
            "token": token,
            "order": order,
            "cost": cost
        }).map(function (res) { return res.text(); });
    };
    CartService.prototype.commitOrder = function () {
        this.products = [];
        this.cookieService.set("products", JSON.stringify(this.products), 360000, "/");
        return this.http.post("http://api.giftsboutiq.com/cart/add.php", {
            "token": this.token,
            "value": JSON.stringify(this.products),
        }).map(function (res) { return res.text(); });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryService = (function () {
    function CategoryService(route, location, http) {
        this.route = route;
        this.location = location;
        this.http = http;
        this.category = [];
    }
    CategoryService.prototype.getCategory = function () {
        return this.http.get("http://api.giftsboutiq.com/product/getcategory.php")
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getProducts = function (theCategory) {
        return this.http.post("http://api.giftsboutiq.com/product/getprlist.php", {
            "cname": theCategory
        }).map(function (res) { return res.json(); });
        // for(var obj in this.productList ){
        // 	if(obj == theCategory){
        // 		// return obj;
        // 		return this.productList[obj];
        // 	}
        // }
    };
    CategoryService.prototype.getProductDetail = function (theProduct) {
        return this.http.post("http://api.giftsboutiq.com/product/getprdetail.php", {
            "pname": theProduct
        }).map(function (res) { return res.json(); });
        // for(var obj in this.productDetail ){
        // 	if(obj == theProduct){
        // 		// return obj;
        // 		return this.productDetail[obj];
        // 	}
        // }
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());

// return this.http.get("https://jsonplaceholder.typicode.com/posts")
// .map(res => res.json());


/***/ }),

/***/ "../../../../../src/app/services/rating.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingService = (function () {
    function RatingService(http) {
        this.http = http;
    }
    RatingService.prototype.submitReview = function (pid, rating, name, email, comment) {
        return this.http.post("http://api.giftsboutiq.com/review/insert.php", {
            "pid": pid,
            "rating": rating,
            "name": name,
            "email": email,
            "comment": comment,
        }).map(function (res) { return res.text(); });
    };
    RatingService.prototype.fetchReview = function (pid) {
        return this.http.post("http://api.giftsboutiq.com/review/fetch.php", {
            "pid": pid,
        }).map(function (res) { return res.json(); });
    };
    RatingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RatingService);
    return RatingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
    }
    UserService.prototype.saveToken = function (token) {
        this.cookieService.set("jwt", token, 360000, "/");
    };
    UserService.prototype.getUser = function () {
        var token = this.cookieService.get('jwt');
        return this.http.post("http://api.giftsboutiq.com/user/", {
            "token": token,
        }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getOrders = function () {
        var token = this.cookieService.get('jwt');
        return this.http.post("http://api.giftsboutiq.com/order/retrive.php", {
            "token": token,
        }).map(function (res) { return res.json(); });
    };
    UserService.prototype.logOut = function () {
        this.cookieService.delete('jwt', "/");
        window.location.reload();
    };
    UserService.prototype.isLoggedIn = function () {
        // return this.http.get("http://api.giftsboutiq.com/user/").map(res=>res.text());
        if (this.cookieService.check("jwt")) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.login = function (mobile, password) {
        return this.http.post("http://api.giftsboutiq.com/login/index.php", {
            "mobile": mobile,
            "password": password
        }).map(function (res) { return res.json(); });
    };
    UserService.prototype.signup = function (name, mobile, email, password, rpassword) {
        return this.http.post("http://api.giftsboutiq.com/signup/", {
            "name": name,
            "mobile": mobile,
            "email": email,
            "password": password,
            "rpassword": rpassword,
        }).map(function (res) { return res.text(); });
    };
    UserService.prototype.updateAddress = function (address) {
        var _this = this;
        var token = this.cookieService.get('jwt');
        this.http.post("http://api.giftsboutiq.com/user/updateaddress.php", {
            "token": token,
            "address": address
        }).map(function (res) { return res.json(); }).subscribe(function (result) {
            _this.cookieService.set("jwt", result.value, 360000, "/");
        });
        return true;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());

// this.http.get("https://jsonplaceholder.typicode.com/posts").map(res => res.json());


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map