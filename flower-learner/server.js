const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const multer = require("multer");
const bodyParser = require('body-parser')

const upload = multer({ dest: "uploads/" });

require('dotenv').config()
require('./config/database.js')
const app = express();

app.use(logger('dev'));
app.use(express.json());
// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post("/upload_files", upload.single("image"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
}


// Put API routes here, before the "catch all" route
app.use('/api/test', require('./routes/api/test'))
app.use('/api/image', require('./routes/api/image'))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});