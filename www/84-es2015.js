(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js ***!
  \**********************************************************************/
/*! exports provided: pwa_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_toast", function() { return PWAToast; });
/* harmony import */ var _ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionicpwaelements-51948158.js */ "./node_modules/@ionic/pwa-elements/dist/esm/ionicpwaelements-51948158.js");


class PWAToast {
    constructor(hostRef) {
        Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.duration = 2000;
        this.closing = null;
    }
    hostData() {
        const classes = {
            out: !!this.closing
        };
        if (this.closing !== null) {
            classes['in'] = !this.closing;
        }
        return {
            class: classes
        };
    }
    componentDidLoad() {
        setTimeout(() => {
            this.closing = false;
        });
        setTimeout(() => {
            this.close();
        }, this.duration);
    }
    close() {
        this.closing = true;
        setTimeout(() => {
            this.el.parentNode.removeChild(this.el);
        }, 1000);
    }
    __stencil_render() {
        return (Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "wrapper" }, Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "toast" }, this.message)));
    }
    get el() { return Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    render() { return Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["h"], this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"; }
}




/***/ })

}]);
//# sourceMappingURL=84-es2015.js.map