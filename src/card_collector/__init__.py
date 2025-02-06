from flask import Flask
import mongoengine as me
import os
from flask_session import Session
from card_collector.routes import api


def create_app(config_class=None, logging_args=None):
    app = Flask(__name__)

    if config_class is None:
        app.config.from_pyfile("config.py")
    else:
        app.config.from_object(config_class)

    # Initialize MongoEngine
    # me.connect(host=os.getenv("MONGO_URI_DEV"), db="Auth_Test")

    # Register app with Flask-Session
    Session(app)

    app.register_blueprint(api)

    # Register blueprints

    return app
