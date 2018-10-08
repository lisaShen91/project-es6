'use strict';

var _underscore = require('../lib/underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Utils() {
	this.flatten = function (obj) {
		var newObject = {};
		for (var i in obj) {
			if (_underscore2.default.isObject(obj[i])) {
				var object = this.flatten(obj[i]);
				for (var j in object) {
					newObject[i + '.' + j] = object[j];
				}
			} else {
				newObject[i] = obj[i];
			}
		}
		return newObject;
	};

	this.flattenObjectToString = function (obj) {
		var path = [],
		    nodes = {},
		    parseObject = function parseObject(obj) {
			if (obj instanceof Object) {
				if (obj instanceof Object) {
					for (var node in obj) {
						path.push(node);
						parseObject(obj[node]);
						path.pop();
					}
				}
			} else {
				nodes[path.join('.')] = obj;
			}
		};
		parseObject(obj);
		return nodes;
	};

	this.flattenObjectToString2 = function (obj) {
		var newObject = {};
		for (var attr in obj) {
			if (obj[attr] instanceof Object) {
				var flattedObject = this.flattenObjectToString2(obj[attr]);
				for (var subAttr in flattedObject) {
					newObject[attr + '.' + subAttr] = flattedObject[subAttr];
				}
			} else {
				newObject[attr] = obj[attr];
			}
		}
		return newObject;
	};
} /**
   * Created by shenlisha on 2018/9/28.
   */