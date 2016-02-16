/**
 * Created by 陈莹 on 2016/2/16.
 */

/*
* NonNullSet 是set的子类，成员不能为null和undefined
* */
function NonNullSet(){

    // 仅连接到父类
    // 作为普通函数调用父类的构造函数来初始化通过该构造函数调用创建的对象
    Set.apply(this,arguments);
}
// 将其设置为set的子类
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

NonNullSet.prototype.add = function () {
    for(var i=0;i<arguments.length;i++)
    if(arguments[i] == null)
    throw new Error("Can't add null or undefined to a NonNullSet");

    return Set.prototype.add.apply(this,arguments);
};