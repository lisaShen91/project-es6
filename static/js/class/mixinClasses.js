function mix(...mixins) {
	class Mix {}

	for (let mixin of mixins) {
		copyProperties(Mix.prototype, mixin); // 拷贝实例属性
		copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin)); // 拷贝原型属性
	}

	return Mix;
}

function copyProperties(target, source) {
	for (let key of Reflect.ownKeys(source)) {
		if ( key !== "constructor"
			&& key !== "prototype"
			&& key !== "name"
		) {
			let desc = Object.getOwnPropertyDescriptor(source, key);
			Object.defineProperty(target, key, desc);
		}
	}
}

export default mix