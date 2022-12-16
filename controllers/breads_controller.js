const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    
   
    let breadimg = Bread[req.params.arrayIndex].image
    
    res.send(`<img src=${breadimg}></img>`)
})
module.exports = breads

