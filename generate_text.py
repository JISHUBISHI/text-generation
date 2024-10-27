import subprocess

def generate_text_with_llama(prompt):
    command = ["ollama", "run", "llama3.2"]
    
    try:
        process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding='utf-8')
        output, error = process.communicate(input=prompt)
        if output:
            return output.strip()
        if error:
            return f"Error occurred: {error.strip()}"
    
    except Exception as e:
        return f"An exception occurred: {str(e)}"
