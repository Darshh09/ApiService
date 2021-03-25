const express = require('express');
const router = new express.Router();

const MensRanking = require("../models/mens");

// create data
router.post("/mens" , async(req , res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMensData = await addingMensRecords.save();
        res.send(insertMensData);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// get All data
router.get("/mens" , async( req , res) => {
    try{
        const getMensData = await MensRanking.find({}).sort({"ranking" : 1});
        res.status(201).send(getMensData);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//we will handle get request of individual
router.get("/mens/:id" , async( req , res) => {
    try{
        const _id = req.params.id;
        const getIndividualMen = await MensRanking.findById( {_id});
        res.status(201).send(getIndividualMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})


// update Data
router.patch("/mens/:id" , async(req , res) => {
    try{
        const _id = req.params.id;
        const updateMenData = await MensRanking.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(201).send(updateMenData);
    }
    catch(e){
        res.status(500).send(e);
    }
})


//delete Data
router.delete("/mens/:id" , async(req , res) => {
    try{
        const _id = req.params.id;
        const deleteMenData = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(deleteMenData);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;