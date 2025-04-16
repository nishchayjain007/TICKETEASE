// Import Firebase functions from the SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase configuration for your app
const firebaseConfig = {
    apiKey: "--",
    authDomain: "ticketease-acb85.firebaseapp.com",
    projectId: "ticketease-acb85",
    storageBucket: "ticketease-acb85.appspot.com",
    messagingSenderId: "1083921482996",
    appId: "1:1083921482996:web:0a64b8807088887930caa1"
};

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to handle user login
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Use Firebase's signInWithEmailAndPassword for authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login
            const user = userCredential.user;
            console.log('Login successful:', user);
            localStorage.setItem('username', user.email); // Storing user email locally (or user.uid if you prefer)
            window.location.href = "book-ticket.html"; // Redirect to book ticket page after login
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            console.error('Login failed:', errorMessage);
            alert("Invalid email or password. Please try again.");
        });
}

// Function to handle user registration
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Ensure the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Use Firebase's createUserWithEmailAndPassword for account creation
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful registration
            const user = userCredential.user;
            console.log('User registered:', user);
            alert("Registration successful! Please log in.");
            document.getElementById('show-login').click(); // Automatically switch to login form
        })
        .catch((error) => {
            // Handle registration errors
            const errorMessage = error.message;
            console.error('Registration failed:', errorMessage);
            alert("Error during registration: " + errorMessage);
        });
}

// Attach the functions to buttons in your HTML
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);
