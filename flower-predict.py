import matplotlib.pyplot as plt
import numpy as np
import os
import PIL
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential, save_model, load_model
import pathlib
import sys

def flower_predict(flowerUrl, imgName):

    #load model from save file
    model = keras.models.load_model('saved_model/my_model')
    #output catagories
    class_names = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

    #test image url and path
    flower_url = flowerUrl
    flower_path = tf.keras.utils.get_file( imgName, origin=flower_url )

    #set image resize parameters
    img_height = 180
    img_width = 180

    #image resize preprocessing
    img = keras.preprocessing.image.load_img(
        flower_path, target_size=(img_height, img_width)
    )

    img_array = keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Create a batch

    #prediction function and accuracy score
    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])

    return "This image most likely belongs to {} with a {:.2f} percent confidence.".format(class_names[np.argmax(score)], 100 * np.max(score))

flowerUrl = 'https://s3.amazonaws.com/newhobbyfarms.com/wp-content/uploads/2015/06/26115642/12sunflowers_800.jpg'
flowerName = '12sunflowers_800'
'''
1452748028782, https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/3/19/0/dsc01408.JPG.rend.hgtvcom.616.462.suffix/1452748028782.jpeg
Oxeye-daisy-flower_3859338724_o, https://mk0cabiorg09m8anlv96.kinstacdn.com/wp-content/uploads/project-images/Oxeye-daisy-flower_3859338724_o.jpg
12sunflowers_800, https://s3.amazonaws.com/newhobbyfarms.com/wp-content/uploads/2015/06/26115642/12sunflowers_800.jpg
 '''
print('/n')
print(flower_predict(flowerUrl, flowerName))