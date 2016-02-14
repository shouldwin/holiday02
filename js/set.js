/**
 * Created by ��Ө on 2016/2/6.
 */
 function Set(){        //���캯��
    this.values = {};       // �������ݴ���ڶ����������
    this.n = 0;     //������ֵ�ĸ���
    this.add.apply(this.arguments);     //���в�����ӵ����������
}
 //��Ӳ���
Set.prototype.add = function () {
    for(var i=0;i<arguments.length;i++){        //����ÿ������
        var val = arguments[i];             //����ӵ������е�ֵ
        var str = Set._v2s(val);            //����ת��Ϊ�ַ���
        if(!this.values.hasOwnProperty(str)){       //�����ڼ����У����ַ�����ֵ��Ӧ������������ֵ�ļ�����һ
            this.values[str] = val;
            this.n ++;
        }
    }
    return this;
};
    //  ɾ��������Ԫ��
Set.prototype.remove = function () {
    for(var i=0;i<arguments.length;i++){        //��������
        var str = Set._v2s(arguments[i]);       //�ַ�����ֵ��Ӧ
        if(this.values.hasOwnProperty(str)){
            delete this.values[str];
            this.n--;
        }
    }
    return this;
};
    //����
Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
};
//���ϴ�С
Set.prototype.size = function () {
    return this.n;
};
//��������������Ԫ�أ���ָ�����������е���f
Set.prototype.foreach = function (f,context) {
    for(var s in this.values)       //���������������ַ���
    if(this.values.hasOwnProperty(s))       //���Լ̳е�����
        f.call(context,this.values[s]);     //����f������value
};

Set.prototype.equals = function (that) {
    if(this == that) return true;
    //  ���that����һ�����ϣ�������this�����
    // Ҳ��ͨ��that.constructor == that.constructor �����
    //  null undefined ��������instanceof ����
    if(!(that instanceof Set)) return false;
        //  ����������ϴ�С��ͬ�������ǲ���ͬ
    if(this.size() != that.size()) return false;

    // �������������Ԫ���Ƿ���ȫһ�����������ȣ���ͨ���ܳ��쳣����ֹforeachѭ��
    try{
        this.foreach(function (v) {
            if(!that.contains(v)) throw false;
        });
        return false;       // ����Ԫ��ƥ�䣬�����������
    }catch(x){
        if(x === false) return false;   //�����������Ԫ��������һ�������в�����
        throw x;        // �����׳��쳣
    }
}
//�ڲ���������js������ֵ��Ψһ���ַ�����Ӧ����
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

    /*�����������˵�����᷵��һ���ַ���
    * ��ͬ���󣬺������ز�ͬ���ַ���
    * ͬһ������Ķ�ε��ã�������ͬ�ַ���
    * Ϊʵ��������Ϊo����һ�����ԣ�ֻ�ɶ�������ö��
    * */
    function objectId(o){
        var prop = "|**objectId**|";        //  ˽�����ԣ��������id
        if(!o.hasOwnProperty(prop))         //�������û��id������һ��ֵ������
            o[prop] = Set._v2s.next++;
        return o[prop];
    }
};
Set._v2s.next = 100;        //���ó�ʼid��ֵ

