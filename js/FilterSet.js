/**
 * Created by ��Ө on 2016/2/18.
 */


var FilterSet = Set.extend(
    function FilterSet(set,filter) {            // ���캯��
        this.set = set;
        this.filter = filter;
    },
    {               // ʵ������
        add : function(){
            // ����Ѿ��й�������ֱ��ʹ����
            if(this.filter){
                for(var i=0;i<arguments.length;i++){
                    var v = arguments[i];
                    if(!this.filter(v))
                        throw new Error("FilterSet : value" + v + "rejected by filter");
                }
            }
            // ����set�е�add��������
            this.set.add.apply(this.set,arguments);
            return this;
        },
        // ʣ�µķ������ֲ���
        remove : function(){
            this.set.remove.apply(this.set,arguments);
            return this;
        },
        contains : function(v){
            return this.set.contains();
        },
        size : function(){
            return this.set.size();
        },
        foreach : function(f,c){
            this.set.foreach(f,c);
        },
    });