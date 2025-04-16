// scripts/booking.js
function bookTicket() {
    const ticketData = {
        source: document.getElementById("source").value,
        destination: document.getElementById("destination").value,
        ticketType: document.getElementById("ticketType").value,
        paymentMethod: document.getElementById("paymentMethod").value,
        bookingTime: new Date().toLocaleString()
    };

    // Store ticket data in local storage
    localStorage.setItem("ticketDetails", JSON.stringify(ticketData));
    alert("Ticket booked successfully!");

    // Redirect to the receipt page
    window.location.href = "PaymentReceiptPage.html";
}
// scripts/booking.js
function bookTicket() {
    const ticketData = {
        source: document.getElementById("source").value,
        destination: document.getElementById("destination").value,
        ticketType: document.getElementById("ticketType").value,
        paymentMethod: document.getElementById("paymentMethod").value,
        bookingTime: new Date().toLocaleString()
    };

    // Store ticket data in local storage
    localStorage.setItem("ticketDetails", JSON.stringify(ticketData));
    alert("Ticket booked successfully!");

    // Redirect to the receipt page
    window.location.href = "PaymentReceiptPage.html";
}
