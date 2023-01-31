import requests
url = 'http://localhost:5000/api'
r = requests.post(url,json={'pa':1,'ps':1,'d':0,})
print(r.json())