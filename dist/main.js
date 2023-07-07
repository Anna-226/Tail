/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animation */ "./js/modules/animation.js");





window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])('.icon-menu');
  (0,_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])('.icons-header__item_search', '.search-form', '.search-form__button');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.swiper');
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_4__["default"])('.block-category_big', '.block-category_big', 'from-left', 400);
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_4__["default"])('.block-category_second', '.block-category_big', 'from-up', 400);
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_4__["default"])('.block-category_third', '.block-category_big', 'from-down', 400);
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_4__["default"])('.special__button', '.orange', 'from-right', 200);
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_4__["default"])('.orange', '.orange', 'from-left', 200);
});

/***/ }),

/***/ "./js/modules/animation.js":
/*!*********************************!*\
  !*** ./js/modules/animation.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* const animation = () => {
   
   const firstBlock = document.querySelector('.block-category_big'),
         secondBlock = document.querySelector('.block-category_second'),
         thirdBlock = document.querySelector('.block-category_third');

   document.addEventListener('scroll', function() {
      const posTop = firstBlock.getBoundingClientRect().top;
      if (posTop + 400 < window.innerHeight) {
         firstBlock.classList.add('from-left');
         secondBlock.classList.add('from-up');
         thirdBlock.classList.add('from-down');
      }
   });
};

export default animation; */

var animation = function animation(animElement, animTrigger, animationName, animDelay) {
  var elem = document.querySelector(animElement),
    trigger = document.querySelector(animTrigger);
  /* secondBlock = document.querySelector('.block-category_second'),
     thirdBlock = document.querySelector('.block-category_third'); */

  document.addEventListener('scroll', function () {
    var posTop = trigger.getBoundingClientRect().top;
    if (posTop + animDelay < window.innerHeight) {
      elem.classList.add(animationName);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (animation);

//animation('.block-category_second', 'from-up', 400);
//animation('.block-category_third', 'from-down', 400);
//animation('.special__button', 'from-right', 200);
//animation('.orange', 'from-left', 200);

/***/ }),

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var burger = function burger(burgerSelector) {
  var burgerBtn = document.querySelector(burgerSelector),
    header = document.querySelector('header'),
    body = document.querySelector('body');
  burgerBtn.addEventListener('click', function () {
    header.classList.toggle('menu-open');
    body.classList.toggle('locked');
  });
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target && target.classList.contains('header__menu') || target && target.classList.contains('menu__link')) {
      header.classList.remove('menu-open');
      body.classList.remove('locked');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      header.classList.remove('menu-open');
      body.classList.remove('locked');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var search = function search(searchSelector, searchField, searchButton) {
  var searchIcon = document.querySelector(searchSelector),
    searchInput = document.querySelector(searchField),
    buttonSearch = document.querySelector(searchButton);
  searchIcon.addEventListener('click', function () {
    searchInput.classList.add('search-active');
  });
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target && target.classList.contains('header__container') || target && target.classList.contains('main')) {
      searchInput.classList.remove('search-active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchInput.classList.remove('search-active');
    }
  });
  buttonSearch.addEventListener('click', function () {
    console.log('1');
  });
};
/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.min.css");


var slider = function slider(sliderSelector) {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderSelector, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  });
  var slideName = document.querySelectorAll('.swiper-slide__slide-name'),
    slideDescripton = document.querySelectorAll('.swiper-slide__description'),
    slideButton = document.querySelectorAll('.swiper-slide__button');
  slideName[swiper.activeIndex].classList.add('down-animation');
  slideDescripton[swiper.activeIndex].classList.add('left-animation');
  slideButton[swiper.activeIndex].classList.add('right-animation');
  swiper.on('slideChange', function () {
    slideName.forEach(function (item, i) {
      if (swiper.activeIndex === i) {
        slideName[i].classList.add('down-animation');
        slideDescripton[i].classList.add('left-animation');
        slideButton[i].classList.add('right-animation');
      } else {
        slideName[i].classList.remove('down-animation');
        slideDescripton[i].classList.remove('left-animation');
        slideButton[i].classList.remove('right-animation');
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper_min_css-node_modu-8d915c"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper_min_css-node_modu-8d915c"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map