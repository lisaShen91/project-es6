/**
 * Created by shenlisha on 2018/10/10.
 */

export default function test() {
	function A(name) {
		this.name = name;
		this.age = 20
	}

	A.prototype.name = 'lisa';
	A.prototype.age = 18;

	function B(name, age) {
		A.call(this, name, age);
	}

	B.prototype.name = 'im lisa';
	var a = new A();
	B.prototype = a;//Object.create(A.prototype);
	B.prototype.constructor = B;
	B.prototype.tip = 'watch out';

	var b = new B();
	console.log(b.name, a.tip, (new A()).tip, A.prototype.isPrototypeOf(b), b instanceof A);
	console.log(
		'b.__proto__: ', b.__proto__, // function A
		'B.prototype:', B.prototype, //function A
		'B.protoType.__proto__：', B.prototype.__proto__, // A.protoType
		'A.protoType: ', A.prototype //{name: lisa, age: 18}
	);

	console.log(b.__proto__ === B.prototype);
	console.log(B.prototype.__proto__ === A.prototype);
	console.log(b.__proto__.__proto__ === A.prototype);
	console.log(B.__proto__ === A);
}