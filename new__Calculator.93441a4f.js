parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.resetButton=exports.prevNumber=exports.operators=exports.numberButtons=exports.inputs=exports.equalButton=exports.deleteButton=exports.currNumber=void 0;var e=document.querySelector(".current-number");exports.currNumber=e;var t=document.querySelector(".previous-number");exports.prevNumber=t;var r=document.querySelector('.calc-button[name="delete"]');exports.deleteButton=r;var o=document.querySelector('.calc-button[name="reset"]');exports.resetButton=o;var u=document.querySelector('.calc-button[name="equal"]');exports.equalButton=u;var n=document.querySelectorAll('input[name="toggle"]');exports.inputs=n;var c=document.querySelectorAll('.calc-button[name="cypher"]');exports.numberButtons=c;var s=document.querySelectorAll('.calc-button[name="operator"]');exports.operators=s;
},{}],"Z4Y8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=require("../index");function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var u=r[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var Calculator=function(){function Calculator(e,r){_classCallCheck(this,Calculator),this.currentNumber=e,this.previousNumber=r,this.clear()}return _createClass(Calculator,[{key:"clear",value:function(){this.currentNumber="",this.previousNumber="",this.operator=""}},{key:"delete",value:function(){this.currentNumber=this.currentNumber.toString().slice(0,-1)}},{key:"displayNumber",value:function(e){"."===e&&this.currentNumber.includes(".")||(this.currentNumber=this.currentNumber.toString()+e.toString())}},{key:"chooseOperator",value:function(e){""!==this.currentNumber&&(""!==this.previousNumber&&this.compute(),this.operator=e,this.previousNumber=this.currentNumber,this.currentNumber="")}},{key:"compute",value:function compute(){var computation,prev=parseFloat(this.previousNumber),current=parseFloat(this.currentNumber);isNaN(prev)||isNaN(current)||(computation=eval("".concat(prev," ").concat(this.operator," ").concat(current)),this.currentNumber=computation,this.operator="",this.previousNumber="")}},{key:"updateDisplay",value:function(){_index.currNumber.innerText=this.currentNumber,null!=this.operator&&(_index.prevNumber.innerText="".concat(this.previousNumber," ").concat(this.operator))}}]),Calculator}();exports.default=Calculator;
},{"../index":"H99C"}],"UcoS":[function(require,module,exports) {
"use strict";var e=n(require("./Calculator")),t=require("../index");function n(e){return e&&e.__esModule?e:{default:e}}var u=new e.default(t.currNumber,t.prevNumber);t.numberButtons.forEach(function(e){e.onclick=function(){u.displayNumber(e.innerText),u.updateDisplay()}}),t.operators.forEach(function(e){e.onclick=function(){u.chooseOperator(e.innerText),u.updateDisplay()}}),t.equalButton.onclick=function(){u.compute(),u.updateDisplay()},t.resetButton.onclick=function(){u.clear(),u.updateDisplay()},t.deleteButton.onclick=function(){u.delete(),u.updateDisplay()};
},{"./Calculator":"Z4Y8","../index":"H99C"}]},{},["UcoS"], null)
//# sourceMappingURL=new__Calculator.93441a4f.js.map