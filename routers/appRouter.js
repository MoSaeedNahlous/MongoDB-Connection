const express = require('express');
const { findById } = require('../models/Person');
const router = express.Router();


router.get('/hello', (req, res) => {
    res.send('hello page').status(200);
})

router.get('/about',(req, res) => {
    res.send('about page').status(200);
})

router.get('/math',(req, res) => {
    res.send('math page').status(200);
})

router.get('/:id', (req, res) => {
    var id = req.params.id
    res.send(`${id} page`).status(200);
})


module.exports = router