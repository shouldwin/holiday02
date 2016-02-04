/**
 * Created by 陈莹 on 2016/1/29.
 */
function printprops(o){
    for(var p in o){
        console.log(p+" "+o[p]+"\n");
    }
}

/*计算两个坐标之间的距离*/
function distance(x1,y1,x2,y2){
    var dx=x2-x1;
    var dy=y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
}

/*计算阶乘*/
function factorial(x){
    if(x <= 1) return 1;
    return x*factorial(x-1);
}

/*定义一个函数用来求传入参数的平方*/
var square = function(x){
    return x*x;
}

/*函数表达式定义后立即调用*/
var tensquared = (function(x){return x*x;}(10));

/*函数表达式可把包含名称，递归调用很有用*/
var f = function fact(x){
    if(x>1){
        return 1;
    }else{
        return x*fact(x-1);
    }
}

/*函数表达式可作为参数传给其他函数*/
data.sort(function(a,b){
    return a*b;
});