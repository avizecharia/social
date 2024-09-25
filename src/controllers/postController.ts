import exp, { Router, Request, Response } from "express";
import PostService from "../services/postService";

const router: Router = exp.Router();
//get all posts
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await PostService.getAllPosts();
    console.log(posts);

    res.json({
      err: false,
      message: "I was too lazy to change the default message",
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "I was too lazy to change the default message",

      data: null,
    });
  }
});
// protected route
//create new post
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await PostService.createNewPost(req.body);
    if (result) {
      res.json({
        err: false,
        message: "I was too lazy to change the default message",
        data: undefined,
      });
    } else {
      throw new Error("Cant Save New User to the file");
    }
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "I was too lazy to change the default message",

      data: null,
    });
  }
});
//query params: ?title=x
router.get("/search", async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({
      err: false,
      message: "I was too lazy to change the default message",
      data: undefined,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "I was too lazy to change the default message",

      data: null,
    });
  }
});
//get post by id
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await PostService.getPostById(req.params.id);
    res.json({
      err: false,
      message: "I was too lazy to change the default message",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "I was too lazy to change the default message",

      data: null,
    });
  }
});
// protected route
//
router.patch(
  "/like/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
    const result = await PostService.addLikeToPost(req.params.id)
      res.json({
        err: false,
        message: "I was too lazy to change the default message",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "I was too lazy to change the default message",

        data: null,
      });
    }
  }
);

export default router;
