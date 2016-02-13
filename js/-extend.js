/**
 * Created by 陈莹 on 2016/2/13.
 */

        //将这些方法添加到Set类的原型对象中
extend(Set.prototype,{
        // 将集合转换为字符串
    toString: function(){
        var s = "(",i = 0;
        this.foreach(function (v) {
            s += ((i++ > 0) ? "," : "") + v;
        });
    },
        // 对所有的值都将调用toLocaleString（）方法
    toLocaleString: function() {
        var s = "(", i = 0;
        this.foreach(function (v) {
            if (i++ > 0) s += ",";
            if (v == null) s += v;
            else s += v.toLocaleString();
        });
        return s + "}";
    },
        // 将集合转换为数组
    toArray : function(){
        var a = [];
        this.foreach(function (v) {
            a.push(v);
        });
        return a;
    }
});
    // 对于要从JSON转换为字符串的集合都被当做数组来对待
Set.prototype.toJSON = Set.prototype.toArray;