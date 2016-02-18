/**
 * Created by 陈莹 on 2016/2/18.
 */

// 这个函数可以用作任何抽象方法
function abstractmethod(){
    throw new Error("abstract method");
}
// 定义一个抽象方法contains（）
function AbstractSet(){
    throw new Error("Can't instantiate abstract classes");
}
AbstractSet.prototype.contains = abstractmethod;

/*
* NotSet 是AbtractSet 的一个非抽象子类
* 所有不在其他集合中的成员都在这个集合中
* 因为他在其他集合中不可写的条件下定义，同时由于它的成员是无限个，因此它是不可枚举的
* 此处extend方法来定义这个子类
* */
var NotSet = AbstractSet.extend(
    function NotSet(set) {
        this.set = set;
    },
    {
        contains : function(x){ return !this.set.contains(x); },
        toString : function(x){ return "~" + this.set.toString(); },
        equals : function(that){
            return that instanceof NotSet && that.set.equals(that.set);
        }
    }
);

/*
* 一个抽象子类
* 定义了抽象方法size（）和foreach（）
* 实现了isEmpty（），toArray（），toLocaleString（） equals（）方法
* 子类实现了contains，size，foreach 他们可以调用5个非抽象方法
* */
var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error("Can't instantiate abstract classes");
    },
    {
        size : abstractmethod,
        foreach : abstractmethod,
        isEmpty : function(){ return this.size() == 0;  },
        toString : function(){
            var s = "{",i=0;
            this.foreach(function (v) {
                if(i++ > 0) s += ",";
                s += v;
            });
            return s + "}";
        },
        toLocalString : function(){
            var s = "{",i = 0;
            this.foreach(function (v) {
                if(i++ > 0) s += ",";
                if(v == null) s += v;
                else s += v.toLocaleString();
            });
            return s + "}";
        },
        toArray : function(){
            var s = [];
            this.foreach(function (v) {
                a.push(v);
            });
            return a;
        },
        equals : function(that){
            if(!(that instanceof AbstractEnumerableSet)) return false;
            if(this.size() != that.size()) return false;
            //  检查每一个元素是否也在that中
            try{
                this.foreach(function (v) {
                    if(!that.contains(v)) throw false;
                });
                return true;
            }catch(x){
                if(x === false) return false;   // 集合不相等
                throw x;   // 发现其他异常，重新抛出
            }
        }
    }
);