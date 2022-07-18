const express= require('express')
const router = express.Router();
const apiCall =require('../controller/controller')

router.get('/',(req,res)=>{
    res.send('runnning')
});
router.get('/search/:userQuery',apiCall.search)
router.get('/top-headlines',apiCall.topHeadlines)
router.get('/bbc',apiCall.bbc)
router.get('/category/:categoryName',apiCall.category)

module.exports = router