from flask import Blueprint, Flask
from flask_cors import CORS

api_views = Blueprint('api', __name__, url_prefix="/api/v1/")


@api_views.route('/status')
def status():
    return 'OK'

if __name__ == "__main__":
    app = Flask(__name__)
    CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
    app.register_blueprint(api_views)
    app.run(host="0.0.0.0", port=5001)