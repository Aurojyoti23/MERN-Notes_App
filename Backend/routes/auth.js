const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        n: 'auro',
        s: 20
    }
    res.json(obj)
})

module.exports = router