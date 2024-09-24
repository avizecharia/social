import exp,{Express} from 'express'

import 'dotenv/config'

const app :Express = exp()


console.log(process.env.PORT);


app.listen(process.env.PORT)