/**
 * Created by ��Ө on 2016/2/4.
 */
/*      ���캯�����巶Χ��       */

function Range(from,to){
    this.from = from ;
    this.to = to ;
}
/* ���еķ�Χ���󶼼̳���������� ������������Ϊ prototype  */
Range.prototype = {
    includes: function (x) {    //�ɱȽ����ַ�Χ���ַ��������ڷ�Χ
        return this.from <= x && x <= this.to ;
    },
    foreach: function (f) {     //��Χ�ڵ�ÿ������������һ��f ֻ���������ַ�Χ
        for(var x = Math.ceil(this.from);x <= this.to;x++)
            f(x);
    },
    toString:function(){        //���ر�ʾ�����Χ���ַ���
        return "(" + this.from + "..." + this.to + ")" ;
    }
};

var r = range(1,3);
r.includes(2);
r.foreach(Console.log);
console.log(r);