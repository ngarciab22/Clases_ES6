"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;
var _impuestos = require("./impuestos.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //Se importa la clase Impuesto
//Clase constructora para Cliente//
//Se exporta la clase
var Cliente = exports.Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuesto = new _impuestos.Impuesto();
  }
  //Getter para nombre
  return _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }
    //Setter para nombre
    ,
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
    //Getter para impuesto
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    }
    //Setter para impuesto
    ,
    set: function set(nuevoImpuesto) {
      this._impuesto = nuevoImpuesto;
    }
    //Método para calcular Impuesto
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
  }]);
}();