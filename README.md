# Flask Text Generation API

This is a simple Flask-based API for generating text using the `generate_text_with_llama` function.

## Features
- Accepts a text prompt and generates a response using LLaMA.
- Provides a simple web interface (`index.html`).
- Uses Flask for backend processing.
- Runs on `0.0.0.0:5050`.

## Requirements
Ensure you have the following dependencies installed:

```bash
pip install flask
```

You also need to have the `generate_text_with_llama` function implemented in a separate file named `generate_text.py`.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt  # If you have a requirements file
   ```
3. Run the Flask app:
   ```bash
   python app.py
   ```
4. Open your browser and go to `http://localhost:5050`.

## API Endpoint
### Generate Text

**Endpoint:**
```
POST /generate
```

**Request Body (JSON):**
```json
{
  "prompt": "Your input text here"
}
```

**Response (JSON):**
```json
{
  "response": "Generated text output"
}
```


