/**
 * Created by ��Ө on 2016/2/16.
 */
function SingletonSet(member){
    this.member = member;
}
// ����һ��ԭ�Ͷ��󣬼̳���set��ԭ��
SingletonSet.prototype = inherit(Set.prototype);
// ��ԭ��������ԣ������ͬ�������Ծ͸���set.prototype�е�ͬ������

extend(SingletonSet.prototype,{
    constructor : SingletonSet,
    // ֻ��
    add : function(){
        throw "read-only set";
    },
    remove : function(){
        throw "read-only set";
    },
    size : function(){
        return 1;
    },
    // ���뼯�ϵ�Ψһ��Ա
    foreach: function(f,context){
        f.call(context,this.member);
    },
    // ��鴫���ֵ�Ƿ��뼯����Ψһ�ĳ�Աƥ��
    contains : function(x){
        return x === this.member;
    },
    equals : function(that){
        return that instanceof Set && that.size() == 1 && that.contains(this.member);
    }
});
