/**
 * Created by 陈莹 on 2016/2/15.
 */
function Range(from,to){
    // 这些值保存在闭包中
    this.from = function () {
        return from;
    };
    this.to = function () {
        return to;
    } ;
}
/* 原型上的方法无法直接操作端点，他们必须调用存取器方法  */
Range.prototype = {
    constructor : Range,
    includes: function (x) {
        return this.from <= x && x <= this.to ;
    },
    foreach: function (f) {
        for(var x = Math.ceil(this.from);x <= this.to;x++)
            f(x);
    },
    toString:function(){       
        return "(" + this.from + "..." + this.to + ")" ;
    }
};
