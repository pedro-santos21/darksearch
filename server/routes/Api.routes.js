const express=require('express')
const router=express.Router()

// search
router.get('/search', (req, res)=>{
    res.send("Hi...");
})

router.post('/search', (req, res)=>{
    res.status(200);
    console.log(req.body);
})

module.exports=router;