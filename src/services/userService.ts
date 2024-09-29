import NewUserDto from "../Dto/newUserDto";
import fs from "fs/promises";
import User from "../models/user";
import { getFileData, saveFileData } from "../config/fileDataLayer";

export default class UserService {
  public static async createNewUser(newUser: NewUserDto): Promise<boolean> {
    //create a new user() object
    const { userName, password, email, birthday, avatarUrl } = newUser;
    const user: User = new User(userName, password, email, birthday, avatarUrl);
    //add it tp user file
    //get the file as an array of object
    let users: User[] = (await getFileData<User>("users")) as User[];
    // push
    users.push(user);
    // save the array back to the file
    return await saveFileData<User>("users", users);
  }

  public static async getAllUsers(): Promise<User[]> {
    const users: User[] = (await getFileData<User>("users")) as User[];
    return users;
  }

  public static async getUserById(id: string): Promise<User | undefined> {
    const users: User[] = await this.getAllUsers();
    return users.find((x) => x.id == id);
  }


  
  public static async follow(
    accountUerId: string,
    followUserId: string
  ): Promise<boolean> {
    const users = await this.getAllUsers();
    const indexAccount = users.findIndex((x) => x.id == accountUerId);
    const indexFollow = users.findIndex((x) => x.id == followUserId);
    console.log(indexFollow);
    console.log(indexAccount);
    
    users[indexAccount].following.push(followUserId);
    users[indexFollow].followeres.push(accountUerId);
    if (indexAccount > -1 && indexFollow > -1) {
      await saveFileData<User>("users", users);
      return true;
    }
    return false;
  }

  public static async getSearchUser(userName: string): Promise<User[]> {
    const users: User[] = await this.getAllUsers();
    return users.filter((user) => user.userName == userName);
  }
}
