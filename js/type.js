/**
 * Created by 陈莹 on 2016/2/5.
 */

/*   以字符串形式返回o的类型  */
function type(o){
    var t, c,n ;        // type class name
    if(o === null) return "null";
    if(o !== o) return "NaN";
    if((t = typeof o) !== "object") return t;
    //返回对象的类名，除非值为object
    if((c = classof(o)) !== "object") return c;
    //如果函数构造函数的名字存在的话，则返回他
    if(o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName()))
    return n;
    //其他类型都返回object
    return "Object";
}

//返回对象的类
function classof(o){
    return Object.prototype.toString.call(o).slice(8,-1);
};

//返回函数的名字，不是函数返回null
Function.prototype.getName = function () {
    if("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};