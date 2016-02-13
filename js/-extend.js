/**
 * Created by ��Ө on 2016/2/13.
 */

        //����Щ������ӵ�Set���ԭ�Ͷ�����
extend(Set.prototype,{
        // ������ת��Ϊ�ַ���
    toString: function(){
        var s = "(",i = 0;
        this.foreach(function (v) {
            s += ((i++ > 0) ? "," : "") + v;
        });
    },
        // �����е�ֵ��������toLocaleString��������
    toLocaleString: function() {
        var s = "(", i = 0;
        this.foreach(function (v) {
            if (i++ > 0) s += ",";
            if (v == null) s += v;
            else s += v.toLocaleString();
        });
        return s + "}";
    },
        // ������ת��Ϊ����
    toArray : function(){
        var a = [];
        this.foreach(function (v) {
            a.push(v);
        });
        return a;
    }
});
    // ����Ҫ��JSONת��Ϊ�ַ����ļ��϶��������������Դ�
Set.prototype.toJSON = Set.prototype.toArray;