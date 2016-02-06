/**
 * Created by 陈莹 on 2016/2/6.
 */

//o实现了除第一个参数之外的参数所表达的方法 ，则返回true
function quacks(o){
    for(var i=1;i<arguments.length;i++){        //遍历参数
        var arg = arguments[i];
        switch (typeof arg){
            case 'string':
                if(typeof o[arg] !== "function") return false;
                continue;
            case 'function' :       //检查函数的原型对象上的方法
                arg = arg.prototype;        //如果实参是函数，则使用它的原型
            case 'object' :
                for(var m in arg){  //遍历对象的每个属性
                    //跳过不是方法的属性
                    if(typeof arg[m] !== "function") continue;
                    if(typeof o[m] !== "function") return false;
                }
        }
    }
    //实现所有方法，返回true
    return true;
}