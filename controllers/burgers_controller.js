const express = require('express');
const router = express.Router();
const burger = require('../model/burger');

router.get("/", async (req, res) => {
    try {
        const data = (await burger.all())[0];
        res.render("index", {
            burgers: data
        })
        
    } catch(err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500).end();
    }
});

router.post("/add", async (req, res) => {
    try { 
        const result = (await burger.add(req.body.name))[0];
        res.json({id: result.insertId});
    
    } catch(err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500).end();     
    }
});

router.post("/devour", async (req, res) => {
    try {
        await burger.devour(req.body.id);
        res.status(200).end();

    } catch(err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500).end();
    }
})

module.exports = router;
