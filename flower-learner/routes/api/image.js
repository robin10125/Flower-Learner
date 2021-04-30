const express = require('express');
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post('/', upload.single("image"), uploadFiles)

function uploadFiles(req, res) {
    console.log(req.file.path)  
    res.json({ filePath: req.file.path, fileName: req.file.filename });
        
    console.log('req.file: ', req.file)
    
    //upload to Imgur
    
}

module.exports = router;