interface hasNameProperty {
    name: string
}

/**
 * 将某个对象的name属性的每个单词的首字母大小，然后将该对象返回
 */

export function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(" ")
        .map(item => item[0].toUpperCase() + item.substr(1))
        .join(" ")
    return obj
}

