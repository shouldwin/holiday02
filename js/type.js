/**
 * Created by ��Ө on 2016/2/5.
 */

/*   ���ַ�����ʽ����o������  */
function type(o){
    var t, c,n ;        // type class name
    if(o === null) return "null";
    if(o !== o) return "NaN";
    if((t = typeof o) !== "object") return t;
    //���ض��������������ֵΪobject
    if((c = classof(o)) !== "object") return c;
    //����������캯�������ִ��ڵĻ����򷵻���
    if(o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName()))
    return n;
    //�������Ͷ�����object
    return "Object";
}

//���ض������
function classof(o){
    return Object.prototype.toString.call(o).slice(8,-1);
};

//���غ��������֣����Ǻ�������null
Function.prototype.getName = function () {
    if("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};