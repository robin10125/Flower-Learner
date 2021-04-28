const ImageModel = require('../models/image.js'); 
const request = require('request');
const fs = require('fs');


module.exports = {
    upload
}

function base64_encode(image) {
    // read binary data
    var bitmap = fs.readFileSync(image);
    // convert binary data to base64 encoded string
    return bitmap.toString('base64');
  }
async function upload(req, res, next) {

  console.log('upload initiated')

  let image = base64_encode(req.files.image.file);

  const options = {
    method: 'POST',
    url: 'https://api.imgur.com/3/image',
    headers: {
      Authorization: `Client-ID ${process.env.CLIENT_ID}`,
    },
    formData: {
      image: image,
      type: 'base64'
    },
  };

  request(options, function(err, response) {
    if (err) return console.log(err);
    let body = JSON.parse(response.body)
    console.log(body)
    // enter Mongoose query here to save to db
    // body.data.link points to imgur url
    try {
        ImageModel.create({link: req.body.data.link, fileName: req.body.data.id})
        res.status(200).json('ok')
     } catch(err) {
        res.status(400).json(err);
     }
  })
}
async function create(req, res) {
  try {
    await ImageModel.create({link: req.body.link, fileName: req.body.fileName})
    res.status(200).json('ok')
 } catch(err) {
    res.status(400).json(err);
 }
}