/**
 * Created by ��Ө on 2016/2/4.
 */
/*  ��ʾֵ�ķ�Χ  */

function range(from,to){
    var r = inherit(range.methods);
    r.from = from;      //��ʼλ��
    r.to = to;          //����λ��      from��to���ǲ��ɼ̳еģ�ÿ������ӵ��Ψһ������
    return r;       //�����´����Ķ���
}
range.methods = {
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
alert(r.includes(2) + " "  + r.foreach(console.log));       //true  123
console.log(r);     //   1...3