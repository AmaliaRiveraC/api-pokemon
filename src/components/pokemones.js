'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pokeNombreJsx = require('./pokeNombre.jsx');

var _pokeNombreJsx2 = _interopRequireDefault(_pokeNombreJsx);

var Pokemones = (function (_Component) {
   _inherits(Pokemones, _Component);

   function Pokemones() {
      _classCallCheck(this, Pokemones);

      _get(Object.getPrototypeOf(Pokemones.prototype), 'constructor', this).call(this);
      this.state = {
         pokeDato: {
            moves: []
         }
      };
   }

   _createClass(Pokemones, [{
      key: 'mostrarPokeDatos',
      value: function mostrarPokeDatos(event) {
         var _this = this;

         console.log(event.target.dataset.pokeurl);
         fetch(event.target.dataset.pokeurl).then(function (res) {
            return res.json();
         }).then(function (pokeInfo) {
            _this.setState({ pokeDato: pokeInfo });
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var pokeArreglo = this.props.info.results.map(function (pokemon, indice) {
            return _react2['default'].createElement(
               _pokeNombreJsx2['default'],
               { onClick: _this2.mostrarPokeDatos, key: indice, 'data-pokeurl': pokemon.url },
               pokemon.name
            );
         });
         return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
               'div',
               null,
               pokeArreglo
            ),
            _react2['default'].createElement(
               'div',
               null,
               this.state.pokeDato.moves
            )
         );
      }
   }]);

   return Pokemones;
})(_react.Component);

exports['default'] = Pokemones;
module.exports = exports['default'];