/**
 * Created by 陈莹 on 2016/2/15.
 */
function defineSubClass(superclass,     //父类的构造函数
                        constructor,     //新子类的构造函数
                        methods,        // 实例方法：复制到原型中
                        statics){         // 类属性： 复制到构造函数中
    // 建立子类的原型对象
    constructor.prototype = inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    // 复制方法和类属性
    if(methods) extend(constructor.prototype,methods);
    if(statics) extend(constructor,statics);
    return constructor;
}
// 通过父类构造函数的方法
Function.prototype.extend = function (constructor,methods,statics) {
    return defineSubClass(this,constructor,methods,statics);
}