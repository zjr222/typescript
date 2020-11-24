import { ArrayHelper } from './ArrayHelper'


const helper = new ArrayHelper(["134", "sadasd"]);

helper.take(10)

/**
 * 泛型约束
 */

import { nameToUpperCase } from './TypeConstraint'

const obj = {
    name: "zhang ji ru",
    age: 33,
    gender: "男"
}

const newObj = nameToUpperCase(obj);
console.log(newObj.name); //ZhangJiRu


/**
 * 多泛型
 */

import {mixinArray} from './MultipleGenerics'

const obj1 = [1, 3, 4];
const obj2 = ["a", "b", "c"];
mixinArray(obj1, obj2);
console.log(mixinArray(obj1, obj2))
