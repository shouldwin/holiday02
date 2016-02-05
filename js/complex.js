/**
 * Created by ��Ө on 2016/2/4.
 */

//����չʾ�����js��ģ��ʵ��javaʽ�����Ա

function Complex(real,imaginary){
    if(isNaN(real) || isNaN(imaginary))     // ȷ������ʵ��Ϊ����
    throw new TypeError();
    this.r = real;          //������ʵ��
    this.i = imaginary;         //�������鲿
}

//��ǰ�������������һ��������������һ���µļ����ֵ֮��ĸ�������
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r,this.i + that.i);
};

//��ǰ�������������һ��������������һ���µļ���˻�֮��ĸ�������
Complex.prototype.mul = function (that) {
    return new Complex(this.r*that.r + this.i*that.i,this.r*that.i +this.i* that.r);
};

//������ģ����Ϊ��0,0������ƽ��ľ���
Complex.prototype.mag = function () {
    return Math.sqrt(this.r*this.r+this.i*this.i);
};

//��
Complex.prototype.neg = function () {
    return new Complex(-this.r,-this.r);
};

//��������ת��Ϊһ���ַ���
Complex.prototype.toString = function () {
    return "{"+this.r +"," +this.i + "}";
};

//��⵱ǰ�����Ƿ�������һ��������ֵ���
Complex.prototype.equals = function (that) {
    return that!=null && that.constructor ===Complex && this.r === that.r && this.i ===that.i ;
};

//�෽��ͨ����ʹ��this��ֻ�Բ������в���

//
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[2]));
    }catch(x){
        throw new TypeError("Can't parse'" + s + "'as a complex number.");
    }
};

//�»��߱�ʾ�������ڲ�ʹ�ã������ڹ���API�Ĳ���  ������java�е�private
Complex._format = /^\{([^,]+),([^}]+)\}$/;

//�����  ʵ����ȣ��鲿��Ϊ�෴��
Complex.prototype.conj = function () {
    return new Complex(this.r,-this.i);
}

