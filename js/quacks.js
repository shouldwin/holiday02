/**
 * Created by ��Ө on 2016/2/6.
 */

//oʵ���˳���һ������֮��Ĳ��������ķ��� ���򷵻�true
function quacks(o){
    for(var i=1;i<arguments.length;i++){        //��������
        var arg = arguments[i];
        switch (typeof arg){
            case 'string':
                if(typeof o[arg] !== "function") return false;
                continue;
            case 'function' :       //��麯����ԭ�Ͷ����ϵķ���
                arg = arg.prototype;        //���ʵ���Ǻ�������ʹ������ԭ��
            case 'object' :
                for(var m in arg){  //���������ÿ������
                    //�������Ƿ���������
                    if(typeof arg[m] !== "function") continue;
                    if(typeof o[m] !== "function") return false;
                }
        }
    }
    //ʵ�����з���������true
    return true;
}