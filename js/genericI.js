/**
 * Created by ��Ө on 2016/2/15.
 */
var generic = {
    toString : function () {
        var s = "[";
        //  ����������������캯�������ҹ��캯���������֣�������ֻ���Ϊ�����ַ�����һ����
        if(this.constructor && this.constructor.name)
        s += this.constructor.name + ":";

            // ö�����зǼ̳У��Ǻ���������
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
    // ͨ���Ƚ�this that�Ĺ��캯����ʵ���������ж��Ƿ����
    equals : function (that) {
        if(that == null) return false;
        if(this.constructor !== that.constructor) return false;
        for(var name in this){
            if(name === "|**object**|") continue;           // ������������
            if(!this.hasOwnProperty(name)) continue;        // �����̳���������
            if(this[name] !== that[name]) return false;     //�Ƚ��Ƿ����
        }
        return true;    // ����ȣ��������������
    }
};