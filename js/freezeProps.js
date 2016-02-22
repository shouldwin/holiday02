/**
 * Created by ��Ө on 2016/2/22.
 */

/* ��o��ָ�����ֵ���������Ϊ����д�Ͳ������õ� */
function freezeProps(o){
    var props = (arguments.length == 1)/*���ֻ��һ������*/
        ?Object.getOwnPropertyNames(o) /*ʹ�����е�����*/
        : Array.prototype.splice.call(arguments,1); /*��������ָ�����ֵ�����*/
    props.forEach(
        function (n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
            Object.defineProperty(o,n,{writable : false,configurable : false});
        }
    );
    return o;
}
    /* ��������Ϊ����ö�ٺͿ����õ� */
function hideProps(o){
    var props = (arguments.length == 1)?Object.getOwnPropertyNames(o) : Array.prototype.splice.call(arguments,1);
    props.forEach(
        function (n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
            Object.defineProperty(o,n,{enumerable: false});
        }
    );
    return o;
}