const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    
    //res.send(`<img src='Bread[req.params.arrayIndex].image'></img>`)
    let breadimg = Bread[req.params.arrayIndex].image
    //res.send(Bread[req.params.arrayIndex])
    res.send(`<img src=${breadimg}></img>`)
})
module.exports = breads

