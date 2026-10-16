const movieSelect = document.getElementById("movie");
const ticketInput = document.getElementById("tickets");
const totalPrice = document.getElementById("totalPrice");
const bookingForm = document.getElementById("bookingForm");
const bookingDetails = document.getElementById("bookingDetails");
const message = document.getElementById("message");
const themeButton = document.getElementById("themeButton");

const colours = ["#203b68", "#187341", "#7a3e9d", "#ad5425"];
let colourNumber = 0;


function updateTotal() {
  const price = Number(movieSelect.selectedOptions[0].dataset.price || 0);
  const numberOfTickets = Number(ticketInput.value || 0);

  totalPrice.textContent = `₹${price * numberOfTickets}`;
}

movieSelect.addEventListener("change", updateTotal);
ticketInput.addEventListener("input", updateTotal);

 
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const movie = movieSelect.value;
  const showtime = document.getElementById("showtime").value;
  const email = document.getElementById("email").value;
  const tickets = Number(ticketInput.value);

  bookingDetails.innerHTML = `
    <p><strong>Movie:</strong> ${movie}</p>
    <p><strong>Show time:</strong> ${showtime}</p>
    <p><strong>Tickets:</strong> ${tickets}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Total:</strong> ${totalPrice.textContent}</p>
  `;

  message.textContent = "Your booking is complete!";
});


themeButton.addEventListener("click", function () {
  colourNumber = (colourNumber + 1) % colours.length;
  document.querySelector("header").style.backgroundColor = colours[colourNumber];
});


bookingForm.addEventListener("reset", function () {
  setTimeout(function () {
    updateTotal();
    message.textContent = "";
  });
});

updateTotal();