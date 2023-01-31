import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import json

app = Flask(__name__)
CORS(app, support_credentials=True)
model = pickle.load(open('model.pkl','rb'))

print(model.predict([[0,1,0,1,1,1,1,1,1,1,1,1,1,1]]))
# finalData = ""


@app.route('/api',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict():
    data = request.get_json(force=True)
    # finalData = data
    # y = json.loads(finalData)
    # print(y["age"])
    # res = model.predict(data.age, data.placentalAbs, data.prevSb, data.depression, data.obesity, data.drugIntake, data.chrAbr, data.diabetes, data.kidney, data.thyroid, data.married, data.blackrace, data.financial, data.sleep)
    # print(res)
    # response.headers.add('Access-Control-Allow-Origin', '*')
    response = jsonify({"A":1})
    return response
    # return jsonify(output)

if __name__ == '__main__':
    app.run(port=5000, debug=True)