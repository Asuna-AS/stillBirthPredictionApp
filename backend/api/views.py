from django.http import JsonResponse
from django.shortcuts import render

import joblib

model=joblib.load('modelPipeline.pkl')
# Create your views here.

def scoreJson(request):
    return JsonResponse({'score:1'})

def scoreFile(request):
    return JsonResponse({score:1})
