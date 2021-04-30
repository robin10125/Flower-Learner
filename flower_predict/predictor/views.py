from django.shortcuts import render, redirect, HttpResponse
from .flowerpredict import flower_predict
import json
# Create your views here.

def predict(request):
    print('request url: ', request.POST.get('url'))
    
    prediction = flower_predict(request.POST.get('url'), request.POST.get('name'))
    prediction = json.dumps(prediction)
    return prediction