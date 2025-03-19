const validUsername = "user123";
const validPassword = "password123";
let loginAttempts = 0;
let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("loginMessage");

            if (username === validUsername && password === validPassword) {
                message.textContent = "Login successful! Redirecting...";
                message.style.color = "green";
                
                setTimeout(() => {
                    window.location.href = "products.html";
                }, 1000);
            } else {
                loginAttempts++;
                message.textContent = `Invalid credentials. Attempts left: ${3 - loginAttempts}`;
                message.style.color = "red";
                
                if (loginAttempts >= 3) {
                    alert("Too many failed attempts. Redirecting to error page.");
                    window.location.href = "error.html";
                }
            }
        });
    }
});
