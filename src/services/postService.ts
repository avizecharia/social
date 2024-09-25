import { getFileData, saveFileData } from "../config/fileDataLayer";
import NewPostDto from "../Dto/newPostDto";
import Post from "../models/post";

export default class PostService {
  public static async createNewPost(newPost: NewPostDto): Promise<boolean> {
    const { authorId, content, hashtags, ref } = newPost;
   console.log("plplplp");
   
    let posts:Post[] = await getFileData<Post>('posts') as Post[]
    const post :Post = new Post (
        authorId,
        content,
        hashtags,
        ref
    )
    console.log(post);
    
        
    
    posts.push(post)
    console.log(posts);
    
    // save the array back to the file
     return await saveFileData<Post>('posts',posts)
  }

  
  public static async getAllPosts() : Promise< Post[]> {
    const posts:Post[] = await getFileData<Post>('posts') as Post[]
    return posts
}

public static async getPostById(id:string):Promise<Post[]> {
    const posts = this.getAllPosts()
    ;
    return (await posts).filter(x => x.id == id)
}

public static async addLikeToPost(id :string) : Promise<boolean> {

    const result = await this.getPostById(id)
    result[0].likes.push(id)

    if(result) {
        return true
    }
    return false

}

}
