const express=require('express')
const router=express.Router()

const searchService = require('../services/Search.services');

const routerPrefix = '/api/'

// search
router.get('/search', (req, res)=>{
    res.send("Hi...");
})

router.post('/search', (req, res)=>{
    const query = req.body.query;
    console.log('[+] New Query Submitted:', query);
    res.redirect(`${routerPrefix}results?query=${query}`);
})

router.get("/results", (req, res) => {
    const query = req.query.query;

    index = searchService.SearchForQuery(query);

    res.send(`${index.length} results for "${query}".`);
})

module.exports={
    router, 
    routerPrefix
};