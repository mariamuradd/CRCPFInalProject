/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.11.1 October 31, 2024 */

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/sketch.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);

class CatPart {
    constructor(p5) {
        this.p5 = p5;
    }
}
class Bow extends CatPart {
    draw(x, y) {
        const bowColor = this.p5.color(this.p5.random(100, 255), this.p5.random(100, 255), this.p5.random(100, 255));
        this.p5.fill(bowColor);
        this.p5.noStroke();
        const loopWidth = 60;
        const loopHeight = 40;
        const knotSize = 30;
        this.p5.ellipse(x - 40, y - 150, loopWidth, loopHeight);
        this.p5.ellipse(x + 40, y - 150, loopWidth, loopHeight);
        this.p5.ellipse(x, y - 150, knotSize, knotSize);
    }
}
class Ears extends CatPart {
    constructor() {
        super(...arguments);
        this.earShapes = [
            { points: [[0, -20], [-15, 20], [15, 20]] },
            { points: [[0, -25], [-20, 5], [-10, 25], [10, 25], [20, 5]] },
            { points: [[0, -30], [-10, 15], [10, 15]] }
        ];
    }
    draw(x, y) {
        const earShape = this.p5.random(this.earShapes);
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        this.p5.beginShape();
        earShape.points.forEach(([px, py]) => {
            this.p5.vertex(x - 60 + px * 2, y - 180 + py * 2);
        });
        this.p5.endShape(this.p5.CLOSE);
        this.p5.beginShape();
        earShape.points.forEach(([px, py]) => {
            this.p5.vertex(x + 60 + px * 2, y - 180 + py * 2);
        });
        this.p5.endShape(this.p5.CLOSE);
    }
}
class Eyes extends CatPart {
    constructor() {
        super(...arguments);
        this.eyeColors = [
            this.p5.color(0, 0, this.p5.random(200, 255)),
            this.p5.color(0, this.p5.random(200, 255), 0),
            this.p5.color(this.p5.random(200, 255), this.p5.random(200, 255), 0),
            this.p5.color(255, 255, 255)
        ];
    }
    draw(x, y) {
        const scleraColor = this.p5.random(this.eyeColors);
        this.p5.fill(scleraColor);
        this.p5.ellipse(x - 80, y - 40, 80, 120);
        this.p5.ellipse(x + 80, y - 40, 80, 120);
        this.p5.fill(0);
        this.p5.ellipse(x - 80, y - 40, 40, 60);
        this.p5.ellipse(x + 80, y - 40, 40, 60);
    }
}
class Body extends CatPart {
    constructor() {
        super(...arguments);
        this.bodyShapes = [
            { width: 100, height: 200 },
            { width: 150, height: 200 },
            { width: 200, height: 200 }
        ];
        this.bodyColor = this.p5.color(255);
    }
    getRandomBodyColor() {
        const scaleChoice = this.p5.random(["grey", "orange", "brown"]);
        if (scaleChoice === "grey") {
            const greyValue = this.p5.random(50, 200);
            return this.p5.color(greyValue);
        }
        else if (scaleChoice === "orange") {
            return this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), 0);
        }
        else {
            return this.p5.color(this.p5.random(139, 165), 42, 42);
        }
    }
    draw(x, y) {
        const bodyShape = this.p5.random(this.bodyShapes);
        this.bodyColor = this.getRandomBodyColor();
        this.p5.fill(this.bodyColor);
        this.p5.ellipse(x, y + 250, bodyShape.width * 4, bodyShape.height * 4);
        return this.p5.brightness(this.bodyColor);
    }
    getBrightness() {
        return this.p5.brightness(this.bodyColor);
    }
}
class Nose extends CatPart {
    draw(x, y) {
        this.p5.fill(this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), this.p5.random(150, 200)));
        this.p5.triangle(x, y + 80, x - 40, y + 40, x + 40, y + 40);
    }
}
class Whiskers extends CatPart {
    draw(x, y, bodyBrightness) {
        const whiskerColor = bodyBrightness && bodyBrightness > 128 ? this.p5.color(0) : this.p5.color(255);
        this.p5.stroke(whiskerColor);
        this.p5.line(x - 120, y + 60, x - 200, y + 40);
        this.p5.line(x - 120, y + 80, x - 200, y + 80);
        this.p5.line(x - 120, y + 100, x - 200, y + 120);
        this.p5.line(x + 120, y + 60, x + 200, y + 40);
        this.p5.line(x + 120, y + 80, x + 200, y + 80);
        this.p5.line(x + 120, y + 100, x + 200, y + 120);
    }
}
class Cat {
    constructor(p5) {
        this.body = new Body(p5);
        this.parts = [
            new Ears(p5),
            new Eyes(p5),
            this.body,
            new Nose(p5),
            new Whiskers(p5),
            new Bow(p5)
        ];
    }
    draw(x, y) {
        const bodyBrightness = this.body.draw(x, y);
        this.parts[0].draw(x, y);
        this.parts[2].draw(x, y);
        this.parts[1].draw(x, y);
        this.parts[3].draw(x, y);
        this.parts[4].draw(x, y, bodyBrightness);
        this.parts[5].draw(x, y);
    }
}
function sketch(p) {
    let cat;
    p.setup = () => {
        p.createCanvas(500, 500);
        cat = new Cat(p);
        p.background(255);
        cat.draw(p.width / 2, p.height - 150);
    };
    p.draw = () => {
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(sketch);

})();

/******/ })()
;