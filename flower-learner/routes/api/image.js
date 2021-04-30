const express = require('express');
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post('/', upload.single("image"), uploadFiles)

//configure response
function uploadFiles(req, res) {  
    console.log('Response: ', res, " response over")
    console.log('Response file: ', res.file, " response over")
    //send file url and name back to client
    res.json({ url: req.file.path, name: req.file.filename }); 
}

module.exports = router;