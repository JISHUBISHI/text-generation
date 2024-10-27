from flask import Flask, request, jsonify, render_template
from generate_text import generate_text_with_llama

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    response_text = generate_text_with_llama(prompt)
    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5050)
