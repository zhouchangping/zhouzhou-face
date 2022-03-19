const obj = new Proxy({}, {
  get: function (target, proKey, receiver) {
    return Reflect.get(target, proKey, receiver);
  },
  set: function () {
    return Reflect.set(target, proKey, value, receiver);
  }
});
const obj2 = Object.defineProperty({}, 'key', { // 不可能定一个属性即可以对它进行正常读写，又可以在它上面架设一层getter/setter来进行访问改写
  configurable: false, // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
  enumerable: false, // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false
  // writable: true, // 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变, 默认为 false
  // value: 'zhouzhou',
  get: function() {
    return this.value;
  },
  set: function (val) {
    return val;
  }
})

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
console.log(me.__proto__ === person)

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();
console.log(person.printIntroduction())

const o = Object.create(person, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});


// 1-
function F(obj) {
  F.prototype = obj;
  return new F();
}

Object.create = function (prototype, properties) {
  if (typeof prototype !== 'object') {
    throw TypeError();
  }
  function Ctor() {};
  Ctor.prototype = prototype;
  const o = new Ctor();
  if (prototype) {
    o.constructor = Ctor;
    if (properties == undefined) {
      throw TypeError();
    }
    Object.defineProperties(o, properties);
  }
  return o;
}