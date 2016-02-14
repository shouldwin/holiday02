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

// ��дconstructor���ԣ�
Range.prototype.constructor = Range;

// һ��Range�������������Range�Ķ���������
Range.prototype.equals = function (that) {
    if(that == null) return false;
    if(that.constructor !== Range) return false;
    // ���ҽ��������˵���ȣ�����true
    return this.from == that.from && this.to == that.to;
};

/*  �����±߽�����Range������������±߽������Ƚ��ϱ߽�
*   ��������rangeֵ �����׳��쳣
*   ���ҽ���this.equals(that) ʱ���ŷ���0
*   */
Range.prototype.compareTo = function (that) {
    if(!(that instanceof Range))
    throw new Error("Can't compare a Range with" + that);
    var diff = this.from - that.from;   // �Ƚ��±߽�
    if(diff == 0) diff = this.to - that.to ;      // �����ȣ��Ƚ��ϱ߽�
    return diff;
};

var r = range(1,3);
r.includes(2);
r.foreach(Console.log);
console.log(r);