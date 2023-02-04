import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import json

app = Flask(__name__)
CORS(app, support_credentials=True)
model = pickle.load(open('model.pkl','rb'))

# print(model.predict([[]]))
@app.route('/api',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict():
    data = request.get_json(force=True)
    print(data)
    int_features = [int(x) for x in data.values()]
    final_features = np.array(int_features)
    res = model.predict([final_features])
    riski = model.predict_proba([final_features])[0]
    print(final_features)
    ans = round(riski[1]*100, 2)
    print(ans)
    r = {"result" : float(ans) }
    response = jsonify(r)
    return response
if __name__ == '__main__':
    app.run(port=5000, debug=True)

def concat():
