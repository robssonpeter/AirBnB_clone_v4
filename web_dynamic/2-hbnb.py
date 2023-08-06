#!/usr/bin/python3
"""
starts a Flask web application
"""

from flask import Flask, render_template, jsonify
from models import *
from models import storage
from api.v1.app import api_views
from flask_cors import CORS
import uuid
app = Flask(__name__)
app.register_blueprint(api_views)

CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

@app.route('/2-hbnb/', strict_slashes=False)
def filters():
    """display a HTML page like 6-index.html from static"""
    states = storage.all("State").values()
    amenities = storage.all("Amenity").values()
    cache_id = uuid.uuid4()
    return render_template('2-hbnb.html', states=states,
                           amenities=amenities, cache_id=cache_id)


@app.teardown_appcontext
def teardown_db(exception):
    """closes the storage on teardown"""
    storage.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5002', debug=True)
