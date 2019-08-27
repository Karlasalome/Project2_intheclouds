
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask import render_template
import json
# from flask_cors import CORS, cross_origin
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///earthquakesData.sqlite")

app = Flask(__name__)
# app.config['CORS_HEADERS'] = 'Content-Type'

# cors = CORS(app, resources={r"/api_earthquake": {"origins": "http://127.0.0.1:5000"}})

@app.route('/')
def project2():
    # title="earthquake"
    # data = pd.read_sql("SELECT * FROM earthquake", engine)
    # # json_data = data.to_json(orient='records')
    # json_data = data.to_dict()
    # return render_template('index.html', json_data=json_data)
    return "hello"

@app.route('/api_earthquake')
def earthquake():
    data = pd.read_sql("SELECT * FROM earthquake", engine)
    json_data = data.to_json(orient='records')
    return json_data
    
if __name__ == '__main__':
	app.run(debug=True)