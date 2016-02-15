/**
 * Created by 陈莹 on 2016/2/15.
 */
/* 重载Set（）构造函数  */
function Set(){
    this.values = {};   // 用这个对象的属性来保存这个集合
    this.n = 0;     // 集合中值的个数
    // 如果传入一个类数组的对象，将这个元素添加到集合中 否则，将所有参数都添加到集合中
    if(arguments.length == 1 && isArrayLike(arguments[0]))
        this.add.apply(this,arguments[0]);
    else if(arguments.length > 0)
        this.add.apply(this,arguments);
}

/*  通过数组初始化Set对象的工厂方法  */
Set.fromArray = function (a) {
    s = new Set();      // 创建一个空集合
    s.add.apply(s,a);       // 将数组a的成员作为参数传入add（）方法
    return s;       // 返回这个新集合
}

/*  Set类辅助构造函数  */
function SetFromArray(a){
    /*
    * 通过以函数的形式调用Set（）来初始化这个新对象
    * 将a的元素作为参数传入  apply的第二个参数是数组
    */
    Set.apply(this,a);
}
// 设置原型，以便SetFromArray能创建Set的实例
SetFromArray.prototype = Set.prototype;

var s = new SetFromArray([1,2,3]);
s instanceof Set;    // true