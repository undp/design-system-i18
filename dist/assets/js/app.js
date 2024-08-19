/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@undp/design-system/stories/assets/js/lang-switcher.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@undp/design-system/stories/assets/js/lang-switcher.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   langSwitch: function() { return /* binding */ langSwitch; }
/* harmony export */ });
function langSwitch() {
  jQuery('.dropdown-language').click(function () {
    jQuery('.dropdown-language').toggleClass('active');
    if (jQuery('.dropdown-language').hasClass('active')) {
      jQuery('.dropdown-language').find('a').attr('tabIndex', '0');
    } else {
      jQuery('.dropdown-language').find('a').attr('tabIndex', '-1');
    }
  });
  jQuery(document).on('click', function (event) {
    var $trigger = jQuery('.dropdown-language');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      jQuery('.dropdown-language').removeClass('active');
    }
  });
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _undp_design_system_stories_assets_js_lang_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @undp/design-system/stories/assets/js/lang-switcher */ "./node_modules/@undp/design-system/stories/assets/js/lang-switcher.js");
// import $ from 'jquery';

// Load individual modules
// import { expandSearch } from '@undp/design-system/stories/assets/js/expand-search';
// import { multiSelect } from '@undp/design-system/stories/assets/js/multi-select';
// import { select } from '@undp/design-system/stories/assets/js/select';
// import { sidebarNav, sidebarMenu } from '@undp/design-system/stories/assets/js/sidebar';
// import { navigationInitialize, navigationMultiLevelEdgeDetection, navigationOverFlow } from '@undp/design-system/stories/assets/js/navigation';
// import { accordion } from '@undp/design-system/stories/assets/js/accordion';
// import { parallaxEffect } from '@undp/design-system/stories/assets/js/parallax';
// import { swiper } from '@undp/design-system/stories/assets/js/swiper';
// import { fitText } from '@undp/design-system/stories/assets/js/fitText';
// import { modal } from '@undp/design-system/stories/assets/js/modal';
// import { lightboxGallery } from '@undp/design-system/stories/assets/js/lightbox-gallery';
// import { GLightbox } from 'glightbox';
// import { expandToSize } from '@undp/design-system/stories/assets/js/animation';

// import { statsHover } from '@undp/design-system/stories/assets/js/stats';

// window.jQuery = $;

// Enable in view animations, wired via data-viewport=true attribute
// require('@undp/design-system/stories/assets/js/viewport');
// global constants
// require('@undp/design-system/stories/assets/js/undp');

// Initialize components

// Enhanced form fields
// expandSearch();
// multiSelect();
// select();

// Side bar navigation
// sidebarNav();
// sidebarMenu();

// Mega menu / Dropdown menu
// navigationInitialize();
// navigationMultiLevelEdgeDetection();
// navigationOverFlow();

// Accordion
// accordion();

// Parallax Cards
// parallaxEffect('.parallax-card', ['.parallax-cardimage', '.parallax-cardcontent'], 'top center', 'bottom+=85 center', 'vertical', 'desktop', 'percent');
// swiper('.parallax__content');
// require('@undp/design-system/stories/assets/js/smartresize');

// Stats card
// fitText('.stats-card.medium', {desktop: 110, mobile: 80});

// Carousels
// swiper('.fixed-carousel', '.fixed-carousel__button-wrap'); // Fixed image carousel
// swiper('.fluid-carousel', '.slide-content'); // Fluid image carousel
// swiper('.image-carousel', '.slider-slide'); // Image only carousel

// Galleries
// window.GLightbox = GLightbox;
// lightboxGallery();
// parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all');

// Heros
// expandToSize('.homepage-hero-full');
// expandToSize('.pagehero-fulll');
// swiper('.pagehero-cards-items')
// require('@undp/design-system/stories/assets/js/smartresize');

// Language switcher
(0,_undp_design_system_stories_assets_js_lang_switcher__WEBPACK_IMPORTED_MODULE_0__.langSwitch)();

// Modal
// modal();

// Stats
// statsHover();

// Progress bar
// require('@undp/design-system/stories/assets/js/scrolling-progress-bar');
}();
/******/ })()
;
//# sourceMappingURL=app.js.map