import { v4 } from "uuid";



class User {
  public id: string;
  public followeres: string[] = [];
  public following: string[] = [];
  public isLookedAccount:boolean =false
  public token?:string

  constructor(
    public userName: string,
     public password: string,
     public email:string,
     public birthday:Date,
     public avatarUrl:string,
    ) {
    this.id = v4();
  }
}

export default User