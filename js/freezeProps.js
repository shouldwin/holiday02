/**
 * Created by 陈莹 on 2016/2/22.
 */

/* 将o的指定名字的属性设置为不可写和不可配置的 */
function freezeProps(o){
    var props = (arguments.length == 1)/*如果只有一个参数*/
        ?Object.getOwnPropertyNames(o) /*使用所有的属性*/
        : Array.prototype.splice.call(arguments,1); /*否则传入了指定名字的属性*/
    props.forEach(
        function (n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
            Object.defineProperty(o,n,{writable : false,configurable : false});
        }
    );
    return o;
}
    /* 属性设置为不可枚举和可配置的 */
function hideProps(o){
    var props = (arguments.length == 1)?Object.getOwnPropertyNames(o) : Array.prototype.splice.call(arguments,1);
    props.forEach(
        function (n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
            Object.defineProperty(o,n,{enumerable: false});
        }
    );
    return o;
}