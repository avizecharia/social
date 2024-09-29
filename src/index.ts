import exp,{Express} from 'express'
import authController from './controllers/authController'
import userController from './controllers/userController'
import postController from './controllers/postController'
import 'dotenv/config'




const app :Express = exp()
app.use(exp.json())
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
app.use('/auth', authController)
app.use('/user', userController)
app.use('/post', postController)

app.listen(process.env.PORT,() :void => console.log(`see you at http::localhost:${process.env.PORT}`))