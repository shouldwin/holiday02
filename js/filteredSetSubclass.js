/**
 * Created by ��Ө on 2016/2/17.
 */

 /* �˺������ؾ���set������࣬
 ����д�����add�����������Զ���ӵ�Ԫ��������Ĺ��� */
function filteredSetSubclass(superclass,filter){
    var constructor = function () {     // ����Ĺ��캯��
        superclass.apply(this,arguments);       // ���ø���Ĺ��캯��
    };
    var proto = constructor.prototype = inherit(superclass.prototype);
    proto.constructor = constructor;
    proto.add = function () {
        // ������κγ�Ա֮ǰ����ʹ�ù����������в������й���
        for(var i = 0;i< arguments.length;i++){
            var v = arguments[i];
            if(!filter(v)) throw("value"+v+"rejected by filter");
        }
        // ���ø����add��������
        superclass.prototype.add.apply(this,arguments);
    };
    return constructor;
}