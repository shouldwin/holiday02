/**
 * Created by ��Ө on 2016/1/29.
 */
function printprops(o){
    for(var p in o){
        console.log(p+" "+o[p]+"\n");
    }
}

/*������������֮��ľ���*/
function distance(x1,y1,x2,y2){
    var dx=x2-x1;
    var dy=y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
}

/*����׳�*/
function factorial(x){
    if(x <= 1) return 1;
    return x*factorial(x-1);
}

/*����һ�������������������ƽ��*/
var square = function(x){
    return x*x;
}

/*�������ʽ�������������*/
var tensquared = (function(x){return x*x;}(10));

/*�������ʽ�ɰѰ������ƣ��ݹ���ú�����*/
var f = function fact(x){
    if(x>1){
        return 1;
    }else{
        return x*fact(x-1);
    }
}

/*�������ʽ����Ϊ����������������*/
data.sort(function(a,b){
    return a*b;
});