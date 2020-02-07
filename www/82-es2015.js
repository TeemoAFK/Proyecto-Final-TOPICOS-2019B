(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js ***!
  \*****************************************************************************/
/*! exports provided: pwa_camera_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_camera_modal", function() { return PWACameraModal; });
/* harmony import */ var _ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionicpwaelements-51948158.js */ "./node_modules/@ionic/pwa-elements/dist/esm/ionicpwaelements-51948158.js");


class PWACameraModal {
    constructor(hostRef) {
        Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.onPhoto = Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "onPhoto", 7);
    }
    async present() {
        const camera = document.createElement('pwa-camera-modal-instance');
        camera.addEventListener('onPhoto', async (e) => {
            if (!this._modal) {
                return;
            }
            const photo = e.detail;
            this.onPhoto.emit(photo);
        });
        document.body.append(camera);
        this._modal = camera;
    }
    async dismiss() {
        if (!this._modal) {
            return;
        }
        this._modal && this._modal.parentNode.removeChild(this._modal);
        this._modal = null;
    }
    render() {
        return (Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", null));
    }
    static get style() { return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"; }
}




/***/ })

}]);
//# sourceMappingURL=82-es2015.js.map