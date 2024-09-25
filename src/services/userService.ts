import NewUserDto from "../Dto/newUserDto";
import fs from "fs/promises"
import User from "../models/user";


class UserService {

    public static async createNewUser(newUser:NewUserDto):Promise<void>{
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

            // push 

            // save the array back to the file
    }
}