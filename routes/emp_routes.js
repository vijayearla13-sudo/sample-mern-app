let express = require('express');

let router = express.Router();

router.post("/register", (req, res) => {

    let data = req.body;

    res.send(data.name);

});

router.post("/login", (req, res) => {

    res.send("login page called");

});

router.get("/viewtasks", (req, res) => {

    res.send("View Tasks page called");

});

module.exports = router;