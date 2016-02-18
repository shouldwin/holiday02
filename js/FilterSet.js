/**
 * Created by 陈莹 on 2016/2/18.
 */


var FilterSet = Set.extend(
    function FilterSet(set,filter) {            // 构造函数
        this.set = set;
        this.filter = filter;
    },
    {               // 实例方法
        add : function(){
            // 如果已经有过滤器，直接使用它
            if(this.filter){
                for(var i=0;i<arguments.length;i++){
                    var v = arguments[i];
                    if(!this.filter(v))
                        throw new Error("FilterSet : value" + v + "rejected by filter");
                }
            }
            // 调用set中的add（）方法
            this.set.add.apply(this.set,arguments);
            return this;
        },
        // 剩下的方法保持不变
        remove : function(){
            this.set.remove.apply(this.set,arguments);
            return this;
        },
        contains : function(v){
            return this.set.contains();
        },
        size : function(){
            return this.set.size();
        },
        foreach : function(f,c){
            this.set.foreach(f,c);
        },
    });