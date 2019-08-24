
#import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import render_template


app = Flask(__name__)

@app.route('/')
def Earthquakes():
    name='Earthquakes'
    return render_template('file.html', name=name)
    