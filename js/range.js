/**
 * Created by 陈莹 on 2016/2/4.
 */
/*  表示值的范围  */

function range(from,to){
    var r = inherit(range.methods);
    r.from = from;      //起始位置
    r.to = to;          //结束位置      from，to都是不可继承的，每个对象都拥有唯一的属性
    return r;       //返回新创建的对象
}
range.methods = {
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
alert(r.includes(2) + " "  + r.foreach(console.log));       //true  123
console.log(r);     //   1...3