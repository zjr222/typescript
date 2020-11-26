import { dictionary } from './dictionary'


const dic = new dictionary<string, number>();

dic.set("张一",1);
dic.set("张二",2);
dic.set("张三",3);
dic.set("张四",4);
dic.set("张五",5);
dic.set("张六",6);
dic.set("张七",7);

dic.getNum();
dic.isExist("张三");
dic.loop();
dic.resetVal("张三",456);
dic.delete("张四");

