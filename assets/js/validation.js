document.getElementById("contact-form").addEventListener("submit", function(event) {
    var recaptchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response

    if (recaptchaResponse === "") {
        event.preventDefault(); // Prevent form submission
        alert("Please complete the reCAPTCHA.");
    }
});