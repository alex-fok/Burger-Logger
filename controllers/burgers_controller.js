const express = require('express');
const router = express.Router();
const burger = require('../model/burger');

router.get("/", async (req, res) => {
    try {
        const data = await burger.all()[0];
        console.table(data);
        res.json(data);
        res.end();
    } catch (err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500);
        res.end();
    }
});

router.post("/add", async (req, res) => {
    try {
        await burger.add(req.body.name);
        const data = await burger.all()[0];
        console.log(data);
        res.json(data);
        res.end();
    } catch(err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500);
        res.end();
    }
});

router.post("/devour", async (req, res) => {
    try {
        console.log(`burgers_controller: id=${req.body.id}`)
        await burger.devour(req.body.id);
        const data = await burger.all()[0];
        res.json(data);
        res.end();
    } catch(err) {
        console.log(`burgers_controller: ${err}`);
        res.status(500);
        res.end();
    }
})

module.exports = router;
