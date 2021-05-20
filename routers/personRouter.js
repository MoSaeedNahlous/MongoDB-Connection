const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const Person = require('../models/Person')

router.post('/add', (req, res) => {
    var newPerson = new Person ({
        name : req.body.name,
        age  : req.body.age
    })
    newPerson = newPerson.save().then(person => res.json(person)).catch(err=> res.json(err));
})

router.get('/findall', (req, res) => {
    Person.find().then(person=>{res.json(person)})
})


module.exports= router