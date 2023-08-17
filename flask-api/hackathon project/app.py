import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
model = pickle.load(open("trained_model.sav", 'rb'))
data = pd.read_excel("Book4.xlsx")

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.json

    region = data['region']
    sex = data['sex']
    age = data['age']
    size = data['size']

    prediction = model.predict(pd.DataFrame(columns=['region', 'sex', 'age', 'size'],
                                            data=np.array([region, sex, age, size]).reshape(1, 4)))

    result = {"prediction": int(np.round(prediction[0]))}
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
























