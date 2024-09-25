import exp,{Express} from 'express'
import authController from './controllers/authController'
import userController from './controllers/userController'
import postController from './controllers/postController'
import 'dotenv/config'




const app :Express = exp()
app.use(exp.json())

app.use('/auth', authController)
app.use('/user', userController)
app.use('/post', postController)

app.listen(process.env.PORT,() :void => console.log(`see you at http::localhost:${process.env.PORT}`))