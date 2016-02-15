/**
 * Created by ��Ө on 2016/2/15.
 */
function Range(from,to){
    // ��Щֵ�����ڱհ���
    this.from = function () {
        return from;
    };
    this.to = function () {
        return to;
    } ;
}
/* ԭ���ϵķ����޷�ֱ�Ӳ����˵㣬���Ǳ�����ô�ȡ������  */
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
