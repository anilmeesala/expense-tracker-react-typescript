var obj = {};
obj.prop1 ="test";
obj['prop1']="test"; //useful if we want variable as property

obj.func1=function () {
  console.log(obj.prop1)
};

//------

Object.defineProperty(obj1,'fname',{
   value:'test',
   writable:true,
   enumerable:true,
   configurable:true
});

Object.defineProperty(obj1,'printName',{
    value:function (){
        console.log(obj1.fname)
    },
    writable:true,
    enumerable:true,
    configurable:true
});

//in js everything is assignable

printName = "hi"; //printName is no longer function, everything breaks
//so make writable false
Object.keys(obj1);

var obj2= Object.create(obj1);//use for inheritance