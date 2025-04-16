// Import Firebase functions from the SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Firebase configuration for your app
const firebaseConfig = {
    apiKey: "AIzaSyD_VCPVwnDGVm8PVTMHAYLxye2cVBK_hY0",
    authDomain: "ticketease-acb85.firebaseapp.com",
    projectId: "ticketease-acb85",
    storageBucket: "ticketease-acb85.appspot.com",
    messagingSenderId: "1083921482996",
    appId: "1:1083921482996:web:0a64b8807088887930caa1",
    databaseURL: "https://ticketease-acb85-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

// Function to handle admin login
function adminLogin() {
    const email = document.getElementById('admin-login-email').value;
    const password = document.getElementById('admin-login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Admin login successful:', user);
            localStorage.setItem('adminEmail', user.email);
            window.location.href = "admin-dashboard.html";
        })
        .catch((error) => {
            console.error('Admin login failed:', error.message);
            alert("Invalid admin email or password. Please try again.");
        });
}

// Function to handle admin registration
function adminRegister() {
    const email = document.getElementById('admin-register-email').value;
    const password = document.getElementById('admin-register-password').value;
    const confirmPassword = document.getElementById('admin-register-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Admin registered:', user);

            // Store admin data in Realtime Database
            set(ref(db, 'admins/' + user.uid), { email });

            alert("Admin registration successful! Please log in.");
            document.getElementById('show-admin-login').click();
        })
        .catch((error) => {
            console.error('Admin registration failed:', error.message);
            alert("Error during registration: " + error.message);
        });
}

// Attach functions to buttons
document.getElementById('admin-login-btn').addEventListener('click', adminLogin);
document.getElementById('admin-register-btn').addEventListener('click', adminRegister);

// Toggle between login and registration forms
document.getElementById('show-admin-register').addEventListener('click', () => {
    document.getElementById('admin-login-form').classList.remove('active-form');
    document.getElementById('admin-register-form').classList.add('active-form');
    document.getElementById('admin-form-title').textContent = "Admin Register";
});

document.getElementById('show-admin-login').addEventListener('click', () => {
    document.getElementById('admin-register-form').classList.remove('active-form');
    document.getElementById('admin-login-form').classList.add('active-form');
    document.getElementById('admin-form-title').textContent = "Admin Login";
});
