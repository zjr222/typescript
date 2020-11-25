export function classDecorator(description: string) {
    return function (target: Function) {
        //保存到该类的原型中
        target.prototype.$classDescription = description;
    }
}

export function propDecorator(description: string) {
    return function (target: any, propName: string) {
        //把所有的属性信息保存到该类的原型中
        if(!target.$propDescriptions){
            target.$propDescriptions = [];
        }
        target.$propDescriptions.push({
            propName,
            description
        })
    }
}

export function printObj(obj:any){
    //输出类的名字
    if(obj.$classDescription){
        console.log(obj.$classDescription);
    }else{
        console.log(obj.__proto__.constructor.name)
    }
    //输出类中属性的名字
    if(!obj.$propDescriptions){
        obj.$propDescriptions = [];
    }
    //输出所有的属性描述和描述值
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const prop = obj.$propDescriptions.find((p:any) => p.propName === key)
            if(prop){
                console.log(`\t${prop.description}:${obj[key]}`);
            }else{
                console.log(`\t${key}:${obj[key]}`);
            }
        }
    }
    
}

