/**
 * Created by 陈莹 on 2016/2/15.
 */
var generic = {
    toString : function () {
        var s = "[";
        //  如果这个对象包含构造函数，而且构造函数包含名字，这个名字会作为返回字符串的一部分
        if(this.constructor && this.constructor.name)
        s += this.constructor.name + ":";

            // 枚举所有非继承，非函数的属性
        var n = 0;
        for(var name in this){
            if(!this.hasOwnProperty(name)) continue;
            var value = this[name];
            if(typeof value === "function") continue;
            if(n++) s += ",";
            s += name + '=' + value;
        }
        return s+']';
    },
    // 通过比较this that的构造函数和实例属性来判断是否相等
    equals : function (that) {
        if(that == null) return false;
        if(this.constructor !== that.constructor) return false;
        for(var name in this){
            if(name === "|**object**|") continue;           // 跳过特殊属性
            if(!this.hasOwnProperty(name)) continue;        // 跳过继承来的属性
            if(this[name] !== that[name]) return false;     //比较是否相等
        }
        return true;    // 都相等，则两个对象相等
    }
};