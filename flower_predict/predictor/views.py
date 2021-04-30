from django.shortcuts import render, redirect, HttpResponse
from .flowerpredict import flower_predict
import json
# Create your views here.

def predict(request):
    print(request)
    prediction = flower_predict(request.data.url, request.data.name)
    prediction = json.dumps(prediction)
    return prediction