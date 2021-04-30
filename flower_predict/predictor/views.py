from django.shortcuts import render, redirect, HttpResponse
from .flowerpredict import flower_predict
import json

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

# Create your views here.

def predict(request):
    print('request url: ', request.POST)
    url = '../../flower-learner'
    prediction = flower_predict(request.POST.get('url'), request.POST.get('name'))
    prediction = json.dumps(prediction)
    return prediction