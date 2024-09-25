import exp, { Router, Response, Request } from "express";
import UserService from "../services/userService";
import NewUserDto from "../Dto/newUserDto";

const router: Router = exp.Router();

router.post("/register", async (req: Request<any,any,NewUserDto>, res: Response): Promise<void> => {
  try {
    
    
    const result = await UserService.createNewUser(req.body);
    if (result){
        res.json({
            err: false,
            message: "I was too lazy to change the default message",
            data: undefined,
          });
    }else{
        throw new Error("Cant Save New User to the file");
        
    }
    
  } catch (err) {
    res.status(400).json({
      err: true,
      message: err || "I was too lazy to change the default message",

      data: null,
    });
  }
});
router.post("/follow", async (req: Request, res: Response): Promise<void> => {
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
// query params : ? x=y
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
// protected route

// query params ? type = MINE || ELSE
router.get("/profile", async (req: Request, res: Response): Promise<void> => {
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
// protected route

// query params ? type = MINE || ELSE

router.get("/followers", async (req: Request, res: Response): Promise<void> => {
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
// protected route
// query params ? type = MINE || ELSE

router.get("/following", async (req: Request, res: Response): Promise<void> => {
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

export default router;
