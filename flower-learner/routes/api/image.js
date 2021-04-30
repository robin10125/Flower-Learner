const express = require('express');
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post('/', upload.single("image"), uploadFiles)

function uploadFiles(req, res) {  
    //res.json({ filePath: req.file.path, fileName: req.file.filename });
    console.log('Response: ', res, " response over")
    console.log('Response file: ', res.file, " response over")
    res.json({ url: req.file.path, name: req.file.filename });
    
}

module.exports = router;