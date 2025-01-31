// Handle sign-up form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userType = document.getElementById("userType").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Simple sign-up logic (can be enhanced)
    if (firstName && lastName && email && password) {
        alert("Account created successfully! Please login.");
        window.location.href = "login.html"; // Redirect to login page after successful sign-up
    } else {
        alert("Please fill in all fields.");
    }
});
