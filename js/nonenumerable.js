/**
 * Created by 陈莹 on 2016/2/20.
 */
/* 代码包装在匿名函数中  */
(function(){
    /*
    * 定义一个不可枚举的属性objectId，可以被所有对象继承
    * 当读取这个属性的时候调用getter函数
    * 没有定义setter，所以是只读
    * 不可配置的，不能被删除
    * */
   Object.defineProperty(Object.prototype , "objectId",{
       get : idGetter,      // 取值器
       enumerable : false,      // 不可枚举
       configurable : false         // 不可删除
   });
    /*
    * 当读取这个值的时候直接调用getter函数
    * */
    function idGetter(){
        if(!(idprop in this)){
            if(!Object.isExtensible(this))
                throw Error("CAN'T DEFINE ID FOR NONEXTENSIBLE OBJECTS");
            Object.defineProperty(this,idprop,{         /* 给他一个值 */
                value : nextid ++,
                writable : false,           /* 只读的 */
                enumerable : false,         /* 不可枚举的 */
                configurable : false            /* 不可删除的*/
            });
        }
        return this[idprop];        /* 返回已有的或者新的值  */
    };
    /* 私有变量 */
    var idprop = "|**objectId**|";
    var nextid = 1;     /* 给他设置初始值*/
}());       /* 立即执行这个包装函数  */