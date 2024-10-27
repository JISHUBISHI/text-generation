document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert("Please enter a prompt");
        return;
    }

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        if (data.error) {
            document.getElementById('response-container').textContent = data.error;
        } else {
            document.getElementById('response-container').textContent = data.response;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response-container').textContent = 'An error occurred while generating text.';
    }
});
document.getElementById('generate-btn').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    // Assuming you have a function to get the generated code
    const generatedCode = generateCode(prompt);
    
    document.getElementById('generated-code').textContent = generatedCode; // Display the generated code
});
document.getElementById('generate-btn').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;

    // Show loading animation
    const generateBtn = document.getElementById('generate-btn');
    const loadingSpinner = generateBtn.querySelector('.loading-spinner');

    generateBtn.classList.add('loading');      // Add loading class
    loadingSpinner.style.display = 'block';      // Show spinner

    // Simulate API call or processing
    setTimeout(() => {
        // Assuming you have a function to get the generated code
        const generatedCode = generateCode(prompt); // Replace with your actual code generation logic

        // Display the generated code
        const generatedCodeElement = document.getElementById('generated-code');
        generatedCodeElement.textContent = generatedCode; // Set the generated code

        // Hide loading animation
        generateBtn.classList.remove('loading');   // Remove loading class
        loadingSpinner.style.display = 'none';       // Hide spinner
    }, 2000); // Simulating a delay of 2 seconds for demonstration
});
document.getElementById('generate-btn').addEventListener('click', function() {
    const buttonText = document.querySelector('.button-text');
    const spinner = document.querySelector('.loading-spinner');

    // Show loading spinner and hide button text
    buttonText.style.display = 'none';
    spinner.style.display = 'inline-block';

    // Perform the fetch request (adjust as needed)
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: document.getElementById('prompt').value })
    })
    .then(response => response.json())
    .then(data => {
        // Hide loading spinner and show button text
        spinner.style.display = 'none';
        buttonText.style.display = 'inline';

        // Handle the response (update your UI as needed)
        document.getElementById('generated-code').textContent = data.response;
    })
    .catch(error => {
        console.error('Error:', error);
        // Hide loading spinner and show button text even in case of error
        spinner.style.display = 'none';
        buttonText.style.display = 'inline';
    });
});
