/**
 * Created by 陈莹 on 2016/1/29.
 */
function max(/*……*/){
    //不定实参函数（由于这类函数可接收任意个数的实参）
    var max = Number.NEGATIVE_INFINITY;
    //遍历实参，查找并记住最大值
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
var largest = max(1,10,100,1000,3,2,7,10000);//-->10000
/*不定实参函数的实参个数不能为零，arguments不是真正的数组，具有以数字为索引的属性*/

function f(x){
    console.log(x);
    arguments[0] = null ;
    console.log(x);  //-->null
}//可通过argument获取到修改过的值

//callee  指代当前正在执行的函数
// 匿名函数中通过callee来递归调用自身
// caller  指代当前正在执行的函数的函数

function factorial(x){
    if(x>1){
        return x*arguments.callee(x-1);
    }
}