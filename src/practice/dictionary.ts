
export class dictionary<K, V>{
    private keys: K[] = [];
    private values: V[] = [];

    set(key: K, value: V) {
        this.add(key,value);
    }

    private add(key,value){
        this.keys.push(key);
        this.values.push(value);
    }

    private getKeyNum(key:K){
        return this.keys.indexOf(key);
    }

    resetVal(key: K,value:V) {
        const i = this.getKeyNum(key);
        if(i < 0){
            this.add(key,value)
        }else{
            this.values[i] = value;
        }
        // this.loop();
    }

    delete(key) {
        const i = this.getKeyNum(key);
        this.keys.splice(i,1);
        this.values.splice(i,1);
        // this.loop();
    }

    loop() {
        for(let i = 0; i < this.keys.length; i++){
            console.log(this.keys[i],this.values[i])
        }
    }

    getNum() {
        console.log(this.keys.length);
    }

    isExist(key) {
        const i = this.getKeyNum(key);
        i < 0 ? console.log("不存在该值") : console.log("存在",`${this.keys[i]}`)
    }
}
