// scripts/print.js
document.addEventListener("DOMContentLoaded", () => {
    const ticketDetails = JSON.parse(localStorage.getItem("ticketDetails"));
    if (ticketDetails) {
        document.getElementById("source").textContent = ticketDetails.source;
        document.getElementById("destination").textContent = ticketDetails.destination;
        document.getElementById("ticketType").textContent = ticketDetails.ticketType;
        document.getElementById("paymentMethod").textContent = ticketDetails.paymentMethod;
        document.getElementById("bookingTime").textContent = ticketDetails.bookingTime;
    } else {
        alert("No ticket details found.");
    }
});

function printReceipt() {
    window.print();
}
