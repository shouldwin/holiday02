/**
 * Created by ��Ө on 2016/1/29.
 */
function max(/*����*/){
    //����ʵ�κ������������ຯ���ɽ������������ʵ�Σ�
    var max = Number.NEGATIVE_INFINITY;
    //����ʵ�Σ����Ҳ���ס���ֵ
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}
var largest = max(1,10,100,1000,3,2,7,10000);//-->10000
/*����ʵ�κ�����ʵ�θ�������Ϊ�㣬arguments�������������飬����������Ϊ����������*/

function f(x){
    console.log(x);
    arguments[0] = null ;
    console.log(x);  //-->null
}//��ͨ��argument��ȡ���޸Ĺ���ֵ

//callee  ָ����ǰ����ִ�еĺ���
// ����������ͨ��callee���ݹ��������
// caller  ָ����ǰ����ִ�еĺ����ĺ���

function factorial(x){
    if(x>1){
        return x*arguments.callee(x-1);
    }
}