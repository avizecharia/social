"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("./controllers/authController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const postController_1 = __importDefault(require("./controllers/postController"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use((q:any,s,n)=>{q.user={
//     "userName": "avi",
//     "password": "1234",
//     "email": "avi@gmail.com",
//     "birthday": "1975-08-19T23:15:30.000z",
//     "avatarUrl": "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6XEZlH2FjqdpXUqjUK4y0LlWF6yViZVWn9HZJ-IR8gU=",
//     "followeres": [],
//     "following": [],
//     "isLookedAccount": false,
//     "id": "456a0755-8791-40f1-8c67-a6c95d7b60b6"
//   }})
app.use('/auth', authController_1.default);
app.use('/user', userController_1.default);
app.use('/post', postController_1.default);
app.listen(process.env.PORT, () => console.log(`see you at http::localhost:${process.env.PORT}`));
