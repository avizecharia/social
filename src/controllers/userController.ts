import exp, { Router,Response,Request } from 'express'

const router :Router = exp.Router()

router.post('/register', async (
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
router.post('/follow', async (
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
// query params : ? x=y
router.get('/search', async (
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
// query params ? type = MINE || ELSE
router.get('/profile', async (
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
// query params ? type = MINE || ELSE

router.get('/followers', async (
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
// query params ? type = MINE || ELSE

router.get('/following', async (
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