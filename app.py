from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app)

# Your Supabase credentials
SUPABASE_URL = "https://xdvevnemfjoxwlhwmyhe.supabase.co"
SUPABASE_KEY = "sb_publishable_UYZQavpxmqscHndLHckLKA_evjj07_2"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    print("Received data:", data)  # Debugging log in terminal
    
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    try:
        # Inserts into your 'messege' table in Supabase
        response = supabase.table('messege').insert({
            'name': name,
            'email': email,
            'messege': message
        }).execute()
        
        return jsonify({"status": "success", "message": "Message sent successfully!"}), 200
    
    except Exception as e:
        print(f"Supabase Error: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)