/**
 * Created by ��Ө on 2016/2/15.
 */
/* ����Set�������캯��  */
function Set(){
    this.values = {};   // ���������������������������
    this.n = 0;     // ������ֵ�ĸ���
    // �������һ��������Ķ��󣬽����Ԫ����ӵ������� ���򣬽����в�������ӵ�������
    if(arguments.length == 1 && isArrayLike(arguments[0]))
        this.add.apply(this,arguments[0]);
    else if(arguments.length > 0)
        this.add.apply(this,arguments);
}

/*  ͨ�������ʼ��Set����Ĺ�������  */
Set.fromArray = function (a) {
    s = new Set();      // ����һ���ռ���
    s.add.apply(s,a);       // ������a�ĳ�Ա��Ϊ��������add��������
    return s;       // ��������¼���
}

/*  Set�ศ�����캯��  */
function SetFromArray(a){
    /*
    * ͨ���Ժ�������ʽ����Set��������ʼ������¶���
    * ��a��Ԫ����Ϊ��������  apply�ĵڶ�������������
    */
    Set.apply(this,a);
}
// ����ԭ�ͣ��Ա�SetFromArray�ܴ���Set��ʵ��
SetFromArray.prototype = Set.prototype;

var s = new SetFromArray([1,2,3]);
s instanceof Set;    // true