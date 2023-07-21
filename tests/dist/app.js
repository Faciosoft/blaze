/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Textarea.ts":
/*!************************************!*\
  !*** ./src/components/Textarea.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 *  <div class="blaze-toolbar">
        ${ Button({ icon: 'fas fa-bold', class: 'blaze-bold' }) }
        ${ Button({ icon: 'fas fa-italic', class: 'blaze-italic' }) }
        ${ Button({ icon: 'fas fa-underline', class: 'blaze-underline' }) }
    </div>
 */
exports["default"] = function (props) {
  return "<div class=\"blaze-editor\">\n    <div class=\"blaze-toolbar\">\n        <header class=\"blaze-header\">BlazeEditor</header>\n\n        <select class=\"blaze-select\" blaze-language>\n            ".concat(props.config.languages.map(function (language) {
    return "<option value=\"".concat(language.name, "\">").concat(language.name, "</option>");
  }), "\n        </select>\n    </div>\n\n    <div class=\":root blaze-relative\">\n        <textarea class=\"blaze-textarea\" spellcheck=\"false\"></textarea>\n        <div class=\"blaze-preview\"> <i style=\"color:#aaa\">").concat(props.config.placeholder ? props.config.placeholder : "Type here...", "</i> </div>\n    </div>\n</div>");
};

/***/ }),

/***/ "./src/css/AddStyles.ts":
/*!******************************!*\
  !*** ./src/css/AddStyles.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AddStyles = void 0;
var Style_1 = __webpack_require__(/*! ./Style */ "./src/css/Style.ts");
var AddStyles = function AddStyles() {
  var style = document.createElement("style");
  style.innerHTML = Style_1["default"];
  document.head.append(style);
};
exports.AddStyles = AddStyles;

/***/ }),

/***/ "./src/css/Style.ts":
/*!**************************!*\
  !*** ./src/css/Style.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "\n    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');\n\n    .blaze-editor {\n        width: 100%;\n        min-height: 300px;\n        padding: 12px;\n        background: rgb(24 24 27 / 80%);\n        box-shadow: 2px 6px 4px #0008;\n        border-radius: 12px;\n    }\n\n    .blaze-editor, .blaze-editor *:not(.fas, .far, .fab) {\n        font-family: 'Fira Code', monospace;\n    }\n\n    .blaze-editor ::-webkit-scrollbar {\n        background: rgb(16 16 17);\n        width: 5px;\n        height: 5px;\n    }\n\n    .blaze-editor ::-webkit-scrollbar-thumb {\n        background: rgb(252, 51, 51);\n    }\n\n    .blaze-toolbar {\n        width: 100%;\n        height: 40px;\n        border-radius: 12px;\n        background: #0002;\n        box-shadow: 2px 2px 4px #0008;\n        margin-bottom: 12px;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 8px;\n    }\n\n    .blaze-relative {\n        position: relative;\n        height: 224px;\n    }\n\n    .blaze-textarea {\n        width: 100%;\n        height: 100%;\n        display: block;\n        outline: 0;\n        background: 0;\n        border: 0;\n        resize: none;\n        \n        font-size: 20px;\n        color: transparent;\n        caret-color: rgb(252, 51, 51);\n\n        padding: 0 12px;\n    }\n\n    .blaze-preview {\n        position: absolute;\n        top: 0;\n        left: 0;\n        font-size: 20px;\n        pointer-events: none;\n        width: 100%;\n        height: 224px;\n        color: #eee;\n\n        overflow-y: auto;\n\n        padding: 0 12px;\n    }\n\n    .blaze-action-button {\n        width: 28px;\n        height: 28px;\n        border: 0;\n        outline: 0;\n        background: rgb(24 24 27 / 80%);\n        cursor: pointer;\n\n        margin-left: 8px;\n        border-radius: 8px;\n        box-shadow: 0 2px 4px 2px #0004;\n\n        color: #aaa;\n        transition: .225s;\n    }\n\n    .blaze-action-button:hover {\n        color: #eee;\n    }\n\n    .blaze-action-button em {\n        font-size: 20px;\n    }\n\n    .blaze-select {\n        background: rgb(24 24 27 / 80%);\n        border: 0;\n        border-radius: 8px;\n        outline: 0;\n        color: #fff;\n        padding: 5px 10px;\n        box-shadow: 0 0 4px 2px #0004; \n    }\n\n    .blaze-header {\n        color: rgb(252, 51, 51);\n    }\n";

/***/ }),

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BlazeEditor = void 0;
var Textarea_1 = __webpack_require__(/*! ./components/Textarea */ "./src/components/Textarea.ts");
var AddStyles_1 = __webpack_require__(/*! ./css/AddStyles */ "./src/css/AddStyles.ts");
var securestring_1 = __webpack_require__(/*! ./securestring */ "./src/securestring.ts");
var spaces_1 = __webpack_require__(/*! ./spaces */ "./src/spaces.ts");
var fontawesome_1 = __webpack_require__(/*! ./fontawesome */ "./src/fontawesome.ts");
var BlazeEditor = /** @class */function () {
  function BlazeEditor(el, config) {
    // Handling root element
    if (el instanceof HTMLElement) this.$root = el;else this.$root = document.querySelector(el);
    this.config = config;
    if (!this.CheckConfig()) return;
    this.currentLanguage = this.config.languages[0].name;
    // Setup
    this.setup();
  }
  BlazeEditor.prototype.setup = function () {
    (0, fontawesome_1.LoadFontawesome)();
    (0, AddStyles_1.AddStyles)();
    this.$root.innerHTML = (0, Textarea_1["default"])({
      config: this.config
    });
    this.$textarea = this.$root.querySelector('.blaze-textarea');
    this.$preview = this.$root.querySelector('.blaze-preview');
    this.ListenForTextareaChanges();
    this.ListenForLangaugeChanges();
  };
  BlazeEditor.prototype.CheckConfig = function () {
    if (!this.config.languages) return false;
    return true;
  };
  BlazeEditor.prototype.GetCursor = function () {
    return this.$textarea.selectionStart;
  };
  BlazeEditor.prototype.GetEndCursor = function () {
    return this.$textarea.selectionEnd;
  };
  BlazeEditor.prototype.SetCursor = function (cursor) {
    this.$textarea.setSelectionRange(cursor, cursor);
  };
  BlazeEditor.prototype.ListenForTextareaChanges = function () {
    var _this = this;
    this.$textarea.addEventListener('input', function ($event) {
      return _this.HandleTextareaInput($event);
    });
    this.$textarea.addEventListener('keydown', function ($event) {
      return _this.HandleTextareaKeyboardEvent($event);
    });
    this.$textarea.addEventListener('scroll', function ($event) {
      return _this.HandleTextareaWheelEvent($event);
    });
  };
  BlazeEditor.prototype.ListenForLangaugeChanges = function () {
    var _this = this;
    this.$root.querySelector('[blaze-language]').addEventListener('change', function ($event) {
      return _this.HandleChangeLanguage($event);
    });
  };
  BlazeEditor.prototype.HandleTextareaWheelEvent = function ($event) {
    var scrollTop = this.$textarea.scrollTop;
    var scrollLeft = this.$textarea.scrollLeft;
    this.$preview.scrollTo(scrollLeft, scrollTop);
  };
  BlazeEditor.prototype.HandleTextareaInput = function ($event) {
    this.ChangePreview();
  };
  BlazeEditor.prototype.HandleTextareaKeyboardEvent = function ($event) {
    if ($event.key === "Tab") {
      var cursor = this.GetCursor();
      var newText = this.$textarea.value.slice(0, cursor) + this.MultiplyPattern(' ', this.config.tabSize ? this.config.tabSize : 4) + this.$textarea.value.slice(cursor);
      this.$textarea.value = newText;
      this.ChangePreview();
      this.SetCursor(cursor + 4);
      $event.preventDefault();
    }
  };
  BlazeEditor.prototype.ChangePreview = function () {
    var html = this.Quotes((0, spaces_1.Spaces)(this.ApplyPatterns((0, securestring_1.SecureString)(this.$textarea.value))));
    this.$preview.innerHTML = html;
  };
  BlazeEditor.prototype.Quotes = function (text) {
    return text.replace(/\[\[BLAZE:QUOTE\]\]/g, '"');
  };
  BlazeEditor.prototype.MultiplyPattern = function (what, many) {
    var str = '';
    for (var i = 0; i < many; i++) str += what;
    return str;
  };
  BlazeEditor.prototype.HandleChangeLanguage = function ($event) {
    this.currentLanguage = $event.target.value;
  };
  BlazeEditor.prototype.GetLanguage = function () {
    var _this = this;
    return this.config.languages.find(function (lang) {
      return lang.name === _this.currentLanguage;
    });
  };
  BlazeEditor.prototype.ApplyPatterns = function (text) {
    var language = this.GetLanguage();
    if (!language) return text;
    // Patterns
    language.patterns.forEach(function (pattern) {
      pattern.patterns.forEach(function (smallPattern) {
        text = text.replace(smallPattern, function (part) {
          return "<span style=[[BLAZE:QUOTE]]color: ".concat(pattern.color).concat(pattern.important ? '!important' : '', ";[[BLAZE:QUOTE]]>").concat(part, "</span>");
        });
      });
    });
    return text;
  };
  return BlazeEditor;
}();
exports.BlazeEditor = BlazeEditor;

/***/ }),

/***/ "./src/fontawesome.ts":
/*!****************************!*\
  !*** ./src/fontawesome.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadFontawesome = void 0;
var LoadFontawesome = function LoadFontawesome() {
  var has = false;
  document.querySelectorAll('link').forEach(function (style) {
    if (style.getAttribute("href").indexOf('fontawesome') !== -1) has = true;
  });
  document.querySelectorAll('script').forEach(function (script) {
    if (!script.getAttribute("src")) return;
    if (script.getAttribute("src").indexOf('fontawesome') !== -1) has = true;
  });
  if (!has) document.head.innerHTML += "<script src=\"https://kit.fontawesome.com/f6412110a3.js\" crossorigin=\"anonymous\"></script>";
};
exports.LoadFontawesome = LoadFontawesome;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var editor_1 = __webpack_require__(/*! ./editor */ "./src/editor.ts");
exports["default"] = editor_1.BlazeEditor;

/***/ }),

/***/ "./src/securestring.ts":
/*!*****************************!*\
  !*** ./src/securestring.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SecureString = void 0;
var SecureString = function SecureString(text) {
  // TODO: Escape <script> and <style> tags
  return text;
};
exports.SecureString = SecureString;

/***/ }),

/***/ "./src/spaces.ts":
/*!***********************!*\
  !*** ./src/spaces.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Spaces = void 0;
var Spaces = function Spaces(text) {
  while (text.indexOf('  ') !== -1) {
    text = text.replace(/  /g, '&nbsp;&nbsp;');
  }
  return text.replace(/\n/g, '<br>');
};
exports.Spaces = Spaces;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./tests/app.ts ***!
  \**********************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var index_1 = __webpack_require__(/*! ../src/index */ "./src/index.ts");
var editor = new index_1["default"]('#editor', {
  placeholder: "Write here...",
  tabSize: 4,
  languages: [{
    name: 'JavaScript',
    patterns: [{
      patterns: [/(var|let|const|class|function|constructor|if|for|while|from|do|in|new|try|catch|case|else|enum|eval|this|void|with|await|break|super|throw|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|arguments|interface|protected|implements|instanceof)/g],
      color: "#0077dd"
    }, {
      patterns: [/\/\/.+/g, new RegExp("\\/\\*[\\S\\s]*?\\*\\/", "g")],
      color: "#999999"
    }, {
      patterns: [new RegExp("\{[\\S\\s]*?\}", "g")],
      color: "#c9c9c7"
    }, {
      patterns: [new RegExp("\"[\\S\\s]*?\"", "g"), new RegExp("'[\\S\\s]*?'", "g"), new RegExp("`[\\S\\s]*?`", "g")],
      color: "#1fff62"
    }, {
      patterns: [/true/g, /false/g, /null/g, /undefined/g],
      color: "#0077dd"
    }, {
      patterns: [new RegExp("\\b[a-zA-Z_][\\w-]+?(?= *\\()", "g")],
      color: "red"
    }]
  }]
});
})();

/******/ })()
;