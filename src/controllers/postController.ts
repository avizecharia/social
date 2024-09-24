import exp, { Router ,Request,Response} from 'express'

const router :Router = exp.Router()

    
router.get('/', async (
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
router.post('/', async (
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
//query params: ?title=x
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
router.get('/:id', async (
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
router.patch('/like/:id', async (
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