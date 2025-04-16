// scripts/firebase-auth.js
document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("User authenticated:", user.email);
        } else {
            // If user is not authenticated, redirect to login page
            window.location.href = "index.html";
        }
    });
});
