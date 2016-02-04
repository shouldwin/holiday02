/**
 * Created by 陈莹 on 2016/2/4.
 */
/*      构造函数定义范围类       */

function Range(from,to){
    this.from = from ;
    this.to = to ;
}
/* 所有的范围对象都继承自这个对象 ，属性名必须为 prototype  */
Range.prototype = {
    includes: function (x) {    //可比较数字范围，字符串和日期范围
        return this.from <= x && x <= this.to ;
    },
    foreach: function (f) {     //范围内的每个整数都调用一次f 只可用作数字范围
        for(var x = Math.ceil(this.from);x <= this.to;x++)
            f(x);
    },
    toString:function(){        //返回表示这个范围的字符串
        return "(" + this.from + "..." + this.to + ")" ;
    }
};

var r = range(1,3);
r.includes(2);
r.foreach(Console.log);
console.log(r);