from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from itsdangerous import URLSafeTimedSerializer, BadSignature, SignatureExpired

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'supersecretkey'
serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# ---- DB setup ----
def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# ---- Sign Up ----
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE email = ?', (email,))
    existing_user = c.fetchone()
    if existing_user:
        conn.close()
        return jsonify({'error': 'User already exists'}), 400

    c.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', (name, email, password))
    conn.commit()
    conn.close()

    return jsonify({'message': 'User registered successfully!'}), 201


# ---- Sign In ----
@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400

    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = c.fetchone()
    conn.close()

    if not user:
        return jsonify({'error': 'User not found. Please sign up first.'}), 404

    if user[3] != password:
        return jsonify({'error': 'Incorrect password'}), 401

    token = serializer.dumps({'email': user[2]})
    return jsonify({
        'message': 'Sign in successful!',
        'user': {'name': user[1], 'email': user[2]},
        'token': token
    }), 200


# ---- Helper: Verify token ----
def verify_token(token):
    try:
        data = serializer.loads(token, max_age=3600)  # valid for 1 hour
        return data  # e.g., {'email': 'john@example.com'}
    except SignatureExpired:
        return None  # token expired
    except BadSignature:
        return None  # invalid token


# ---- Protected Route ----
@app.route('/api/profile', methods=['GET'])
def profile():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'error': 'Missing or invalid token header'}), 401

    token = auth_header.split(' ')[1]
    user_data = verify_token(token)
    if not user_data:
        return jsonify({'error': 'Invalid or expired token'}), 401

    # Fetch user info from the database using email in token
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('SELECT name, email FROM users WHERE email = ?', (user_data['email'],))
    user = c.fetchone()
    conn.close()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({'name': user[0], 'email': user[1]}), 200


if __name__ == '__main__':
    app.run(debug=True)
