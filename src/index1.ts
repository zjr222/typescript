import { decorator, printObj } from "./decorators-1.0";

@decorator("用户")
class User{
    @decorator("账号")
    loginId:string = "111"

    @decorator("密码")
    loginPwd:string = "222"

}

const user = new User();

printObj(user);
