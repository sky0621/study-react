'use strict';

var _calctest = require('./calctest');

var cl = _interopRequireWildcard(_calctest);

var _kakezan = require('./kakezan');

var _kakezan2 = _interopRequireDefault(_kakezan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// console.log(add(2, 3))
// console.log(mul(6, 8))
// import {add, mul} from './calctest'
console.log(cl.add(2, 3));
console.log(cl.mul(6, 8));

var v = (0, _kakezan2.default)(2, 3);
console.log(v);