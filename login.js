// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // You can get the email and password values if needed, 
    // but we're not checking them in this case.
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Since we are not validating the credentials, we immediately redirect
    window.location.href = "pathfinder.html"; // Redirect to the homepage (or your desired page)
});
