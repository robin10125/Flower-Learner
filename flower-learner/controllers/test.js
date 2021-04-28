const Test = require('../models/Test');

module.exports = {
    create
}

async function create(req, res) {
    try {
        await Test.create({text: req.body.text})
        res.status(200).json('added to DB!')
     } catch(err) {
        res.json(err);
     }
}