/**
 * 多泛型
 */

// 将俩个数组进行混合,[1,3,4],["a","b","c"] => [1,"a",3,"b",4,"c"]


export function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    let result: (T | K)[] = [];
    if (arr1.length > arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
        for(let i = arr2.length; i < arr1.length;i++){
            result.push(arr1[i]);
        }
    } else if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
        for(let i = arr1.length; i < arr2.length;i++){
            result.push(arr2[i]);
        }
    }else {
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr2[i]);
            result.push(arr1[i]);
        }
    }
    return result;

}




