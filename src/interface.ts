interface Condition {
    func: (n: number) => boolean
}


function sum(numbers: number[], callback: Condition["func"]) {
    let s = 0;
    numbers.forEach(n => {2
        if (callback(n)) {
            s += n;
        }
    })
    return s;
}

const result = sum([2, 4, 6, 8, 4, 5, 10], n => n % 2 !== 0)
console.log(result);
