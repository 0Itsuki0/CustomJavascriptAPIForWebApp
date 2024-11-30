/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyEvents = void 0;
class MyEvents {
    constructor(pageData) {
        this._pageData = {};
        this._eventCallbacks = {};
        this._pageData = pageData;
        this.injectEvents();
    }
    on(eventName, callback) {
        if (!this._eventCallbacks.hasOwnProperty(eventName)) {
            this._eventCallbacks[eventName] = [];
        }
        this._eventCallbacks[eventName].push(callback);
        return;
    }
    injectEvents() {
        window.addEventListener('load', (_event) => {
            this.injectOnLoadEvent();
            this.injectConfirmEvent();
        });
    }
    injectOnLoadEvent() {
        const showEventName = `itsuki.show`;
        if (!this.has(showEventName)) {
            return;
        }
        this.fire(showEventName, {
            "created_at": new Date(),
            "message": "Welcome to Itsuki's world!",
            "data": this._pageData
        });
    }
    injectConfirmEvent() {
        const functionName = 'formConfirm';
        if (!window.hasOwnProperty(functionName)) {
            console.log("not defined");
            return;
        }
        const self = this;
        const confirmFunction = window[functionName];
        window[functionName] = function () {
            var arguments_1 = arguments;
            return __awaiter(this, void 0, void 0, function* () {
                const arguments_org = arguments_1;
                const eventName = `itsuki.confirm`;
                if (!self.has(eventName)) {
                    return confirmFunction.apply(this, arguments_org);
                }
                const canProgress = yield self.fire(eventName, {
                    "created_at": new Date(),
                    "message": "Return false to terminate the process!",
                    "data": Object.assign(Object.assign({}, self._pageData), self.buildInputData())
                });
                if (canProgress) {
                    return confirmFunction.apply(this, arguments_org);
                }
            });
        };
    }
    buildInputData() {
        let inputData = {};
        const inputs = document.getElementsByTagName("input");
        [...inputs].forEach(element => {
            inputData[element.id] = element.value;
        });
        return inputData;
    }
    has(eventName) {
        return this._eventCallbacks.hasOwnProperty(eventName);
    }
    fire(eventName, eventData) {
        return __awaiter(this, void 0, void 0, function* () {
            const callbacks = this._eventCallbacks[eventName];
            if (!callbacks) {
                return true;
            }
            const callbackResults = yield Promise.all(callbacks.map((callback) => __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield callback(eventData);
                }
                catch (error) {
                    console.error(error);
                    return false;
                }
            })));
            for (const result of callbackResults) {
                if (typeof result === 'boolean' && !result) {
                    return false;
                }
            }
            return true;
        });
    }
}
exports.MyEvents = MyEvents;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const event_1 = __webpack_require__(/*! ./event */ "./src/event.ts");
const global_window = window;
if (!global_window.hasOwnProperty('itsuki')) {
    global_window.itsuki = {};
}
const pageData = global_window.itsuki.hasOwnProperty('pageData') ? global_window.itsuki.pageData : {};
console.log(pageData);
global_window.itsuki['events'] = new event_1.MyEvents(pageData);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxxRUFBbUM7QUFFbkMsTUFBTSxhQUFhLEdBQWEsTUFBTSxDQUFDO0FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDMUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDOUIsQ0FBQztBQUNELE1BQU0sUUFBUSxHQUEyQixhQUFhLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM5SCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUVyQixhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksZ0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsdWdpbi1wcm92aWRlci8uL3NyYy9ldmVudC50cyIsIndlYnBhY2s6Ly9wbHVnaW4tcHJvdmlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGx1Z2luLXByb3ZpZGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY2xhc3MgTXlFdmVudHMge1xuICAgIHByaXZhdGUgX2V2ZW50Q2FsbGJhY2tzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uW107XG4gICAgfTtcbiAgICBwcml2YXRlIF9wYWdlRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBhZ2VEYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50Q2FsbGJhY2tzID0ge307XG4gICAgICAgIHRoaXMuX3BhZ2VEYXRhID0gcGFnZURhdGFcbiAgICAgICAgdGhpcy5pbmplY3RFdmVudHMoKVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgY2FsbGJhY2sgZm9yIGEgZXZlbnRcbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50Q2FsbGJhY2tzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluamVjdEV2ZW50cygpOiB2b2lkIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChfZXZlbnQ6IEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGluamVjdCBldmVudCBvbiBwYWdlIGxvYWRcbiAgICAgICAgICAgIHRoaXMuaW5qZWN0T25Mb2FkRXZlbnQoKTtcblxuICAgICAgICAgICAgLy8gaW5qZWN0IGV2ZW50IG9uIGJ1dHRvbiBjbGlja1xuICAgICAgICAgICAgdGhpcy5pbmplY3RDb25maXJtRXZlbnQoKTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluamVjdE9uTG9hZEV2ZW50KCkge1xuICAgICAgICBjb25zdCBzaG93RXZlbnROYW1lID0gYGl0c3VraS5zaG93YDtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhzaG93RXZlbnROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyZShzaG93RXZlbnROYW1lLCB7XG4gICAgICAgICAgICBcImNyZWF0ZWRfYXRcIjogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIldlbGNvbWUgdG8gSXRzdWtpJ3Mgd29ybGQhXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogdGhpcy5fcGFnZURhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmplY3RDb25maXJtRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9ICdmb3JtQ29uZmlybSc7XG4gICAgICAgIGlmICghd2luZG93Lmhhc093blByb3BlcnR5KGZ1bmN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGRlZmluZWRcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGY6IE15RXZlbnRzID0gdGhpcyBhcyBNeUV2ZW50cztcbiAgICAgICAgY29uc3QgY29uZmlybUZ1bmN0aW9uOiBGdW5jdGlvbiA9ICg8YW55PndpbmRvdylbZnVuY3Rpb25OYW1lXTtcblxuICAgICAgICAoPGFueT53aW5kb3cpW2Z1bmN0aW9uTmFtZV0gPSBhc3luYyBmdW5jdGlvbiAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3VtZW50c19vcmcgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgaXRzdWtpLmNvbmZpcm1gO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmhhcyhldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm1GdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHNfb3JnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhblByb2dyZXNzID0gYXdhaXQgc2VsZi5maXJlKGV2ZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIFwiY3JlYXRlZF9hdFwiOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlJldHVybiBmYWxzZSB0byB0ZXJtaW5hdGUgdGhlIHByb2Nlc3MhXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IHsgLi4uc2VsZi5fcGFnZURhdGEsIC4uLnNlbGYuYnVpbGRJbnB1dERhdGEoKSB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoY2FuUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZWVlZCBvbiB0byB0aGUgb3JpZ2luYWwgcHJvY2Vzc1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maXJtRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzX29yZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkSW5wdXREYXRhKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBsZXQgaW5wdXREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge31cbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcbiAgICAgICAgWy4uLmlucHV0c10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlucHV0RGF0YVtlbGVtZW50LmlkXSA9IGVsZW1lbnQudmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0RGF0YVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBoYXMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50Q2FsbGJhY2tzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaXJlKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzOiBGdW5jdGlvbltdID0gdGhpcy5fZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrUmVzdWx0czogYW55W10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhbGxiYWNrcy5tYXAoYXN5bmMgKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsYmFjayhldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiBjYWxsYmFja1Jlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnYm9vbGVhbicgJiYgIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBNeUV2ZW50cyB9IGZyb20gXCIuL2V2ZW50XCI7XG5cbmNvbnN0IGdsb2JhbF93aW5kb3c6IGFueSA9IDxhbnk+d2luZG93O1xuaWYgKCFnbG9iYWxfd2luZG93Lmhhc093blByb3BlcnR5KCdpdHN1a2knKSkge1xuICAgIGdsb2JhbF93aW5kb3cuaXRzdWtpID0ge307XG59XG5jb25zdCBwYWdlRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IGdsb2JhbF93aW5kb3cuaXRzdWtpLmhhc093blByb3BlcnR5KCdwYWdlRGF0YScpID8gZ2xvYmFsX3dpbmRvdy5pdHN1a2kucGFnZURhdGEgOiB7fTtcbmNvbnNvbGUubG9nKHBhZ2VEYXRhKVxuXG5nbG9iYWxfd2luZG93Lml0c3VraVsnZXZlbnRzJ10gPSBuZXcgTXlFdmVudHMocGFnZURhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9