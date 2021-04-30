Flower Learner.

This app is intended to take a photo upload, run machine learning image recognition on it, and then return the classification of photo.  In particular, it recognizes types of flower.

As of April 30 2021 the app does not work due, since the Node.js server serving the React app can not run the Python TensorFlow model that processes the photos.

To make it work, I should restart the app from scratch using TensorFlow for React, instead of TensorFlow for Python.  This will require a complete restructuring, since TensorFlow for React works best sending the model to the font end and processing in the browser as more of static app, instead of sending photos to the back end and processing there. 

Technologies Used: React, TensorFlow, Python, Node.js, Express, JS, HTML, CSS

Made by Robin Hylands