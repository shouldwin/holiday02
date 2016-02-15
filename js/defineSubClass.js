/**
 * Created by ��Ө on 2016/2/15.
 */
function defineSubClass(superclass,     //����Ĺ��캯��
                        constructor,     //������Ĺ��캯��
                        methods,        // ʵ�����������Ƶ�ԭ����
                        statics){         // �����ԣ� ���Ƶ����캯����
    // ���������ԭ�Ͷ���
    constructor.prototype = inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    // ���Ʒ�����������
    if(methods) extend(constructor.prototype,methods);
    if(statics) extend(constructor,statics);
    return constructor;
}
// ͨ�����๹�캯���ķ���
Function.prototype.extend = function (constructor,methods,statics) {
    return defineSubClass(this,constructor,methods,statics);
}