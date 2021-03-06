
function _new(constructor) {
  //new 方法的实现
  let target = {}
  let [constructor, ...args] = [...arguments]  // 这句
  target.__proto__ = constructor.prototype  // 新对象的隐式链   执行原型连接
  let result = constructor.apply(target, args)  //执行构造函数，将函数的属性或者方法添加到创建的空对象上
  if (result && (typeof (result) === 'object' || typeof (result) === 'function')) {
    return result
  }
  // 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
  return target
}