import os
from datetime import timedelta
import redis

# Flask configuration
SECRET_KEY = os.environ.get("SECRET_KEY") or "your-secret-key"
DEBUG = True
TESTING = False

# Session configuration
SESSION_TYPE = "redis"
SESSION_PERMANENT = True
PERMANENT_SESSION_LIFETIME = timedelta(days=7)
SESSION_COOKIE_NAME = "session"
SESSION_COOKIE_SECURE = False
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = "Lax"
SESSION_REDIS = redis.from_url("redis://localhost:6379")
SESSION_KEY_PREFIX = "session:"

# CORS configuration
CORS_ORIGINS = ["*"]  # Replace with app specific origins in production


# Additional application settings
UPLOAD_FOLDER = "uploads"
MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB max upload size

