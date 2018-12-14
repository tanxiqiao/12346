Function.prototype.call2=function(obj){
    var args=[];
    for(var i=1;i<arguments.length;i++){
        args.push(arguments[i])
    }
    obj.fn=this;
    obj.fn.apply(obj,args);
    delete obj.fn;
}
function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
  sayInfo.call2(user,100)