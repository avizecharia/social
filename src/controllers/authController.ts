import exp, {Request, Router,Response } from 'express'

const router :Router = exp.Router()

    
    router.post('/login', async (
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