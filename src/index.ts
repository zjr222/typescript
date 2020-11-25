import "reflect-metadata";

@Reflect.metadata("name3","华")
@Reflect.metadata("name2","龙")
@Reflect.metadata("name1","一个类")
class User{
    @Reflect.metadata("prop","一个属性")
    prop1:string = ""
}

const obj  = new User();

console.log(Reflect.getMetadata("name1",User));  //第二个参数需要传类名，确定知道就填写类不知道可以找到构造函数Object.getPrototypeOf(obj).constructor
console.log(Reflect.getMetadata("prop",obj,"prop1"));
