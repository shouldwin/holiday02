/**
 * Created by ��Ө on 2016/2/20.
 */
/* �����װ������������  */
(function(){
    /*
    * ����һ������ö�ٵ�����objectId�����Ա����ж���̳�
    * ����ȡ������Ե�ʱ�����getter����
    * û�ж���setter��������ֻ��
    * �������õģ����ܱ�ɾ��
    * */
   Object.defineProperty(Object.prototype , "objectId",{
       get : idGetter,      // ȡֵ��
       enumerable : false,      // ����ö��
       configurable : false         // ����ɾ��
   });
    /*
    * ����ȡ���ֵ��ʱ��ֱ�ӵ���getter����
    * */
    function idGetter(){
        if(!(idprop in this)){
            if(!Object.isExtensible(this))
                throw Error("CAN'T DEFINE ID FOR NONEXTENSIBLE OBJECTS");
            Object.defineProperty(this,idprop,{         /* ����һ��ֵ */
                value : nextid ++,
                writable : false,           /* ֻ���� */
                enumerable : false,         /* ����ö�ٵ� */
                configurable : false            /* ����ɾ����*/
            });
        }
        return this[idprop];        /* �������еĻ����µ�ֵ  */
    };
    /* ˽�б��� */
    var idprop = "|**objectId**|";
    var nextid = 1;     /* �������ó�ʼֵ*/
}());       /* ����ִ�������װ����  */