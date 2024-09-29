import exp, {Request, Router,Response } from 'express'
import authService from '../services/authService'

const router :Router = exp.Router()

    
router.post(`/login`, async (req:Request, res:Response):Promise<void> => {
    try {
        const token = await authService.logIn
        res.status(200).json({
            err: true,
            message: `heres your token,`,
            data:token
        })
    } catch (err) {
        const [status,msg] = (err as Error).message.split(":")
        res.status(Number(status)).json({
            err: true,
            message: msg ||(`sorry no token today`),
            data:err
        })
        
    }
})

router.delete('/logout', async (
    req : Request,
    res:Response
):Promise<void> => {
try{
res.json({
    err:false,
    message:"I was too lazy to change the default message",
    data:undefined
})
}
catch(err){
res.status(400).json({
    err:true,
    message:"I was too lazy to change the default message",

    data:null
})
}
})
export default router