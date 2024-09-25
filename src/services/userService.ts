import NewUserDto from "../Dto/newUserDto";
import fs from "fs/promises"
import User from "../models/user";
import { getFileData, saveFileData } from "../config/fileDataLayer";


export default class UserService {

    public static async createNewUser(newUser:NewUserDto):Promise<boolean>{
        //create a new user() object
        const {userName ,password , email , birthday , avatarUrl} = newUser
        const user : User = new User(
            userName,
            password,
            email,
            birthday,
            avatarUrl
        )
        //add it tp user file
            //get the file as an array of object
        let users:User[] = await getFileData<User>('users') as User[]
        
        
            // push 
        users.push(user)
            // save the array back to the file
        return await saveFileData<User>('users',users)
    }

    
}