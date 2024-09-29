import jwt from"jsonwebtoken"
import { getFileData, saveFileData } from "../config/fileDataLayer";
import LoginDto from "../Dto/loginDto";
import NewUserDto from "../Dto/newUserDto";
import User from "../models/user";

export default class UserService{
    public static async logIn(userDto:LoginDto):Promise<Error | string>{
        const { username, password} = userDto
        let users:User[] | void = await getFileData<User>(`users`)
        if (!users) {throw new Error("500:oopsy run intu a DATA problem ")}
        const user:User | undefined = users.find(u => u.userName === username)
        if (!user){throw new Error("400: oopsy the user dasnot found") }
        
        if (user.password != password){throw new Error("401: password rong!") }
        const payload = {
            username, 
            id:user.id,
            avatarUrl:user.avatarUrl,
            email:user.email,
            isLockedAccount:user.isLookedAccount
        }
        return jwt.sign(payload, process.env.TOKEN_SECRET as string,
            {expiresIn:"10m"}
        )
    }
}