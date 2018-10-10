/**
 * Created by shenlisha on 2018/9/30.
 */

export default function test() {
	var obj = {a: 1};
	// var obj2 = Object.create(obj);
	var obj2 = extend(obj);
	obj2.a = 2;
	console.log(obj.a);

// mock Object.create的大概功能
	function extend(obj) {
		function F() {
		}
		F.prototype = obj;
		return new F();
	}

// 原型继承
	function A(name) {
		this.name = name;
	}

	A.prototype.speak = function () {
		console.log(this.name + ' can speak.');
	};

	function B(name) {
		A.call(this, name);
	}

	B.prototype = Object.create(A.prototype);
	console.log(Object.create(A.prototype) === B.prototype); //一种复制
	B.prototype.constructor = B;

	var b = new B('javey');
	b.speak();
}
