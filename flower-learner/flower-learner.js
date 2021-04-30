//import * as tf from '@tensorflow/tfjs-node'
const tf = require('@tensorflow/tfjs');

async function flower_predict(flowerUrl, imgName){
   
    const model = await tf.loadLayersModel('localstorage://saved_model_js/model.json')
    const class_names = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']
    //test image url and path
    const flower_url = ''
    const flower_path = tf.keras.utils.get_file( imgName, origin=flower_url )
    const img_height = 180
    const img_width = 180
    //image resize preprocessing
    let img = keras.preprocessing.image.load_img(
            flower_path, target_size=(img_height, img_width)
        )

    let img_array = keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0) // Create a batch
    //prediction function and accuracy score
    const predictions = model.predict(img_array)
    const score = tf.nn.softmax(predictions[0])

    return class_names[score]
//"This image most likely belongs to {} with a {:.2f} percent confidence.".format(class_names[np.argmax(score)], 100 * np.max(score))
}
module.exports = flower_predict