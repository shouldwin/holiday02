/**
 * Created by ��Ө on 2016/2/16.
 */

/*
* NonNullSet ��set�����࣬��Ա����Ϊnull��undefined
* */
function NonNullSet(){

    // �����ӵ�����
    // ��Ϊ��ͨ�������ø���Ĺ��캯������ʼ��ͨ���ù��캯�����ô����Ķ���
    Set.apply(this,arguments);
}
// ��������Ϊset������
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

NonNullSet.prototype.add = function () {
    for(var i=0;i<arguments.length;i++)
    if(arguments[i] == null)
    throw new Error("Can't add null or undefined to a NonNullSet");

    return Set.prototype.add.apply(this,arguments);
};