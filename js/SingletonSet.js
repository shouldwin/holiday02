/**
 * Created by 陈莹 on 2016/2/16.
 */
function SingletonSet(member){
    this.member = member;
}
// 创建一个原型对象，继承自set的原型
SingletonSet.prototype = inherit(Set.prototype);
// 给原型添加属性，如果有同名的属性就覆盖set.prototype中的同名属性

extend(SingletonSet.prototype,{
    constructor : SingletonSet,
    // 只读
    add : function(){
        throw "read-only set";
    },
    remove : function(){
        throw "read-only set";
    },
    size : function(){
        return 1;
    },
    // 传入集合的唯一成员
    foreach: function(f,context){
        f.call(context,this.member);
    },
    // 检查传入的值是否与集合中唯一的成员匹配
    contains : function(x){
        return x === this.member;
    },
    equals : function(that){
        return that instanceof Set && that.size() == 1 && that.contains(this.member);
    }
});
