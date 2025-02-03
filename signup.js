document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userType = document.getElementById("userType").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Stop further form submission
    }

    // Validate password (at least 6 characters, at least one digit, and one special character)
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long, contain at least one digit, and one special character.");
        return; // Stop further form submission
    }

    // Check if all required fields are filled
    if (firstName && lastName && email && password) {
        alert("Account created successfully! Please login.");
        window.location.href = "login.html"; // Redirect to login page after successful sign-up
    } else {
        alert("Please fill in all fields.");
    }
});
