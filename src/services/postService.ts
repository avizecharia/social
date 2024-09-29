import { getFileData, saveFileData } from "../config/fileDataLayer";
import NewPostDto from "../Dto/newPostDto";
import Post from "../models/post";

export default class PostService {
  public static async createNewPost(newPost: NewPostDto): Promise<boolean> {
    const { authorId, content, hashtags, ref } = newPost;
    let posts: Post[] = (await getFileData<Post>("posts")) as Post[];
    const post: Post = new Post(authorId, content, hashtags, ref);
    console.log(post);
    posts.push(post);
    console.log(posts);
    return await saveFileData<Post>("posts", posts);
  }

  public static async getAllPosts(): Promise<Post[]> {
    const posts: Post[] = (await getFileData<Post>("posts")) as Post[];
    return posts;
  }

  public static async getPostById(id: string): Promise<Post | undefined> {
    const posts = this.getAllPosts();
    return (await posts).find((x) => x.id == id);
  }

  public static async addLikeToPost(
    postId: string,
    userId: string
  ): Promise<boolean> {
    const posts = await this.getAllPosts();
    const index = posts.findIndex((x) => x.id == postId);
    console.log(userId);
    if (index) {
      posts[index].likes.push(userId);
      await saveFileData<Post>("posts", posts);
      return true;
    }
    return false;
  }

  public static async getSearchPost(content: string): Promise<Post[]> {
    const posts: Post[] = await this.getAllPosts();
    return posts.filter((x) => x.content == content);
  }
}
