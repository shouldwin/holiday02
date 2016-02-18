/**
 * Created by ��Ө on 2016/2/18.
 */

// ����������������κγ��󷽷�
function abstractmethod(){
    throw new Error("abstract method");
}
// ����һ�����󷽷�contains����
function AbstractSet(){
    throw new Error("Can't instantiate abstract classes");
}
AbstractSet.prototype.contains = abstractmethod;

/*
* NotSet ��AbtractSet ��һ���ǳ�������
* ���в������������еĳ�Ա�������������
* ��Ϊ�������������в���д�������¶��壬ͬʱ�������ĳ�Ա�����޸���������ǲ���ö�ٵ�
* �˴�extend�����������������
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
* һ����������
* �����˳��󷽷�size������foreach����
* ʵ����isEmpty������toArray������toLocaleString���� equals��������
* ����ʵ����contains��size��foreach ���ǿ��Ե���5���ǳ��󷽷�
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
            //  ���ÿһ��Ԫ���Ƿ�Ҳ��that��
            try{
                this.foreach(function (v) {
                    if(!that.contains(v)) throw false;
                });
                return true;
            }catch(x){
                if(x === false) return false;   // ���ϲ����
                throw x;   // ���������쳣�������׳�
            }
        }
    }
);