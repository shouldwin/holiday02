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
/* �ǳ������� */
var SungletonSet = AbstractEnumerableSet.extend(
    function SingletonSet(member) {
        this.member = member;
    },
    {
        contains : function(x){ return x === this.member;  },
        size : function(){ return 1; },
        foreach : function(f,ctx){
            f.call(ctx,this.member);
        }
    }
);
/* �������� */
var AbstractWritableSet = AbstractEnumerableSet.extend(
    function () {
        throw new Error("Can't instantiate abstract classes");
    },
    {
        add : abstractmethod,
        remove : abstractmethod,
        union : function(that){
            var self = this;
            that.foreach(
                function (v) {
                    self.add(v);
                }
            );
            return this;
        },
        intersection : function(that){
            var self = this;
            that.foreach(
                function (v) {
                    if(!that.contains(v))
                        self.remove(v);
                }
            );
            return this;
        },
        difference : function(that){
            var self = this;
            that.foreach(
                function (v) {
                    self.remove(v);
                }
            );
            return this;
        }
    }
);
/*
* �ǳ�������
* �����������ʽ��ʾ�����е�Ԫ��
* ��������contains��������ʹ������������Բ���
* */
var ArraySet = AbstractWritableSet.extend(
    function ArraySet() {
        this.values = [];
        this.add.apply(this,arguments);
    },
    {
        contains : function (v) {
            return this.values.indexOf(v) != -1;
        },
        size : function(){ return this.values.length;},
        foreach : function(f,c){ this.values.forEach(f,c); },
        add : function(){
            for(var i=0;i<arguments.length;i++){
                var arg = arguments[i];
                if(!this.contains(arg)) this.values.push(arg);
            }
            return this;
        },
        remove : function(){
            for(var i=0;i<arguments.length;i++){
                var p = this.values.indexOf(arguments[i]);
                if(p == -1) continue;
                this.values.splice(p,1);
            }
            return this;
        }
    }
);