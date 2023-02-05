import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import json

app = Flask(__name__)
CORS(app, support_credentials=True)
fetalModel = pickle.load(open('rnd_clf.pkl','rb'))
placentalModel = pickle.load(open('model1.pkl','rb'))
maternalModel = pickle.load(open('model.pkl','rb'))

# print(model.predict([[]]))
@app.route('/placentalApi',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict():
    data = request.get_json(force=True)
    print(data)
    int_features = [int(x) for x in data.values()]
    final_features = np.array(int_features)
    res = maternalModel.predict([final_features])
    riski = maternalModel.predict_proba([final_features])[0]
    print(final_features)
    ans = round(riski[1]*100, 2)
    print(ans)
    r = {"result" : float(ans) }
    response = jsonify(r)
    return response

@app.route('/maternalApi',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict1():
    data = request.get_json(force=True)
    print(data)
    int_features = [int(x) for x in data.values()]
    final_features = np.array(int_features)
    res = placentalModel.predict([final_features])
    riski = placentalModel.predict_proba([final_features])[0]
    print(final_features)
    ans = round(riski[1]*100, 2)
    print(ans)
    r = {"result" : float(ans) }
    response = jsonify(r)
    return response

@app.route('/fetalApi',methods=['POST'])
@cross_origin(supports_credentials=True)
def predict2():
    data = request.get_json(force=True)
    print(data)
    int_features = [int(x) for x in data.values()]
    final_features = np.array(int_features)
    res = fetalModel.predict([final_features])
    riski = fetalModel.predict_proba([final_features])[0]
    print(final_features)
    ans = round(riski[1]*100, 2)
    print(ans)
    r = {"result" : float(ans) }
    response = jsonify(r)
    return response




if __name__ == '__main__':
    app.run(port=5000, debug=True)

