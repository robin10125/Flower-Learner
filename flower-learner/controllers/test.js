const Test = require('../models/Test');

module.exports = {
    create
}

async function create(req, res) {
    console.log("test controller create function activated, req.body: ", req.body)
    try {
        let test = await Test.create({text: req.body.text})
        res.status(200).json(test)
     } catch(err) {
        res.status(400).json(err);
     }
}
