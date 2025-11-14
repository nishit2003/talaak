document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;
        const amount = document.getElementById('amount').value;
        
        // Validate (basic validation)
        if (!cardNumber || !expiry || !cvv || !cardName || !amount) {
            alert('Arey yaar, sab kuch bharo! Kya chutiyaap hai yeh? Fill all fields, you bewakoof!');
            return;
        }
        
        // Show sarcastic success message
        const messages = [
            'Bohot badhiya! Your credit card info has been "securely" stored. Just kidding, we sold it already! 😂',
            'Congratulations! You\'ve been scammed! Welcome to Talaak.com, you chutiya! 🎉',
            'Payment processed! Just kidding, we don\'t actually process anything. But thanks for the card details, bhenchod! 💳',
            'Success! Your information is now in the hands of Nigerian princes. Kya baat hai! 🇳🇬',
            'Divorce application submitted! (Not really, but we got your money, so who cares?) Enjoy being single, yaar! 🎊'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        alert(randomMessage);
        
        // Reset form (because why not)
        form.reset();
        
        // Add some visual feedback
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Scammed Successfully! 😈';
        submitBtn.style.background = 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 3000);
    });
    
    // Add some interactive hover effects
    const sarcasticTexts = document.querySelectorAll('.sarcastic-text');
    sarcasticTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Random color change on title hover
    const mainTitle = document.querySelector('.main-title');
    const colors = ['#764ba2', '#d32f2f', '#667eea', '#c62828', '#7b1fa2'];
    
    mainTitle.addEventListener('mouseenter', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.color = randomColor;
        this.style.transition = 'color 0.3s ease';
    });
    
    mainTitle.addEventListener('mouseleave', function() {
        this.style.color = '#764ba2';
    });
});

