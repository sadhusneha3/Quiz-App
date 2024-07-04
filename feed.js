document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const ratingInputs = document.querySelectorAll('input[name="rate"]');
    const headerElement = document.querySelector('form header');

    // Update header text based on selected rating
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            const rating = this.id.split('-')[1];
            updateHeaderText(rating);
        });
    });

    function updateHeaderText(rating) {
        const texts = {
            '1': "I just hate it",
            '2': "I don't like it",
            '3': "It's awesome",
            '4': "I just like it",
            '5': "I just love it"
        };
        headerElement.textContent = texts[rating] || '';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get selected rating
        const selectedRating = document.querySelector('input[name="rate"]:checked');
        const rating = selectedRating ? selectedRating.id.split('-')[1] : null;

        // Get feedback text
        const feedbackText = document.querySelector('textarea').value;

        // Here you would typically send this data to a server
        console.log('Rating:', rating);
        console.log('Feedback:', feedbackText);

        // Show a thank you message
        alert('Thank you for your feedback!');

        // Redirect to index.html after a short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});