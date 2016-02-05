/**
 * Created by 陈莹 on 2016/2/4.
 */

//用来展示如何用js来模拟实现java式的类成员

function Complex(real,imaginary){
    if(isNaN(real) || isNaN(imaginary))     // 确保两个实参为数字
    throw new TypeError();
    this.r = real;          //复数的实部
    this.i = imaginary;         //复数的虚部
}

//当前复数对象加上另一个复数，并返回一个新的计算和值之后的复数对象
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r,this.i + that.i);
};

//当前复数对象乘上另一个复数，并返回一个新的计算乘积之后的复数对象
Complex.prototype.mul = function (that) {
    return new Complex(this.r*that.r + this.i*that.i,this.r*that.i +this.i* that.r);
};

//复数的模定义为（0,0）到复平面的距离
Complex.prototype.mag = function () {
    return Math.sqrt(this.r*this.r+this.i*this.i);
};

//求负
Complex.prototype.neg = function () {
    return new Complex(-this.r,-this.r);
};

//复数对象转换为一个字符串
Complex.prototype.toString = function () {
    return "{"+this.r +"," +this.i + "}";
};

//检测当前复数是否与另外一个复数的值相等
Complex.prototype.equals = function (that) {
    return that!=null && that.constructor ===Complex && this.r === that.r && this.i ===that.i ;
};

//类方法通常不使用this，只对参数进行操作

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

//下划线表示他在类内部使用，不属于公用API的部分  类似以java中的private
Complex._format = /^\{([^,]+),([^}]+)\}$/;

//共轭复数  实部相等，虚部互为相反数
Complex.prototype.conj = function () {
    return new Complex(this.r,-this.i);
}

