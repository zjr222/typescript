import "reflect-metadata"

const key = Symbol.for("decorator");
export function decorator(description: string) {
    return Reflect.metadata(key,description)
}

export function printObj(obj:any){
    const cst = Object.getPrototypeOf(obj);
    //输出类的名字
    if(Reflect.hasMetadata(key,cst)){
        console.log(Reflect.getMetadata(key,cst));
    }else{
        console.log(cst.constructor.name)
    }
    //输出所有的属性描述和描述值
    for(const k in obj){
        if(Reflect.hasMetadata(key,obj,k)){
            console.log(`\t${Reflect.getMetadata(key,obj,k)}:${obj[k]}`);
        }else{
            console.log(`\t${k}:${obj[k]}`)
        }
    }
    
}

