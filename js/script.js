document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Stop default browser form navigation

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('http://127.0.0.1:5000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok) {
                    alert('Success! Your message has been sent and saved to Supabase.');
                    contactForm.reset(); // Clear form inputs
                } else {
                    alert('Failed to send message: ' + (result.message || 'Unknown error'));
                }
            } catch (error) {
                console.error('Connection error:', error);
                alert('Could not connect to the Flask server. Make sure python app.py is running in your terminal!');
            }
        });
    }
});



document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop page reload

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Your message was successfully sent and saved!'); // Popup notification
            document.getElementById('contactForm').reset(); // Clear form fields
        } else {
            alert('Error sending message: ' + result.message);
        }
    } catch (error) {
        console.error('Connection error:', error);
        alert('Could not connect to the server. Make sure Python Flask is running!');
    }
});