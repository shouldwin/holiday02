/**
 * Created by 陈莹 on 2016/2/6.
 */
 function Set(){        //构造函数
    this.values = {};       // 集合数据存放在对象的属性里
    this.n = 0;     //集合中值的个数
    this.add.apply(this.arguments);     //所有参数添加到这个集合中
}
 //添加参数
Set.prototype.add = function () {
    for(var i=0;i<arguments.length;i++){        //遍历每个参数
        var val = arguments[i];             //待添加到集合中的值
        var str = Set._v2s(val);            //将他转换为字符串
        if(!this.values.hasOwnProperty(str)){       //若不在集合中，将字符串和值对应起来，集合中值的计数加一
            this.values[str] = val;
            this.n ++;
        }
    }
    return this;
};
    //  删除集合中元素
Set.prototype.remove = function () {
    for(var i=0;i<arguments.length;i++){        //遍历参数
        var str = Set._v2s(arguments[i]);       //字符串和值对应
        if(this.values.hasOwnProperty(str)){
            delete this.values[str];
            this.n--;
        }
    }
    return this;
};
    //包含
Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
};
//集合大小
Set.prototype.size = function () {
    return this.n;
};
//遍历集合中所有元素，在指定的上下文中调用f
Set.prototype.foreach = function (f,context) {
    for(var s in this.values)       //遍历集合中所有字符串
    if(this.values.hasOwnProperty(s))       //忽略继承的属性
        f.call(context,this.values[s]);     //调用f，传入value
};

Set.prototype.equals = function (that) {
    if(this == that) return true;
    //  如果that不是一个集合，则他和this不相等
    // 也可通过that.constructor == that.constructor 来检查
    //  null undefined 不能用于instanceof 运算
    if(!(that instanceof Set)) return false;
        //  如果两个集合大小不同，则他们不相同
    if(this.size() != that.size()) return false;

    // 检查两个集合中元素是否完全一样，如果不相等，则通过跑出异常来终止foreach循环
    try{
        this.foreach(function (v) {
            if(!that.contains(v)) throw false;
        });
        return false;       // 所有元素匹配，两个集合相等
    }catch(x){
        if(x === false) return false;   //如果集合中有元素在另外一个集合中不存在
        throw x;        // 重新抛出异常
    }
}
//内部函数，将js中任意值和唯一的字符串对应起来
Set._v2s = function (val) {
    switch (val){
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default : switch (typeof val){
            case 'number' : return '#'+val;
            case 'string' : return '"'+val;
            default: return '@'+objectId(val);
        }
    }

    /*对任意对象来说，都会返回一个字符串
    * 不同对象，函数返回不同的字符串
    * 同一个对象的多次调用，返回相同字符串
    * 为实现上述，为o创建一个属性，只可读，不可枚举
    * */
    function objectId(o){
        var prop = "|**objectId**|";        //  私有属性，用来存放id
        if(!o.hasOwnProperty(prop))         //如果对象没有id，将下一个值赋给他
            o[prop] = Set._v2s.next++;
        return o[prop];
    }
};
Set._v2s.next = 100;        //设置初始id的值

