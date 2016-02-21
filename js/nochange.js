/**
 * Created by ³ÂÓ¨ on 2016/2/21.
 */

function Range(from,to){
    var props = {
        from : {
            value : from,
            enumerable : true,
            writable : false,
            configuration : false
        },
        to : {
            value : to,
            enumerable : true,
            writable : false,
            configuration : false
        }
    };

    if(this instanceof Range)
        Object.defineProperties(this,props);
    else
        return Object.create(Range.prototype,props);
}

Object.defineProperties(Range.prototype,{
    includes : {
        values : function(x){
            return this.from <= x && x <= this.to;
        }
    },
    foreach : {
        values : function (f){
            for(x = Math.ceil(this.from);x <= this.to;x++)
                f(x);
        }
    },
     toString : {
         value : function(){
             return "(" + this.from + "..." + this.to + ")";
         }
     }
})