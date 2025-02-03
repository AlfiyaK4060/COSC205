document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the email and password values from the form
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Stop further form submission
    }

    // Validate password (at least 6 characters, at least one digit, and at least one special character)
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long, contain at least one digit, and one special character.");
        return; // Stop further form submission
    }

    // If both email and password are valid, proceed with the login
    window.location.href = "pathfinder.html"; // Redirect to the homepage (or your desired page)
});
