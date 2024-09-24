import exp from 'express';
import 'dotenv/config';
const app = exp();
console.log(process.env.PORT);
app.listen(process.env.PORT);
