const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');
const alien = require('../models/alien');

router.get('/', async(req, res) => {
    // res.send("Get request");
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }
    catch(error) {
        res.send("Error" + error);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }
    catch(error) {
        res.send("Error" + error);
    }
});

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try{
        const a1 = await alien.save();
        res.json(a1);
    } catch (error) {
        res.send('Error' + error);
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save()
        res.json(a1);
    }
    catch(error) {
        res.send("Error" + error);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        const a1 = await alien.deleteOne();
        res.json(a1);
    }
    catch(error) {
        res.send("Error" + error);
    }
});

module.exports = router;