// Set the countdown date (format: "month day, year hour:minute:second")
const countdownDate = new Date("September 1, 2023 00:00:00").getTime();

// Update the countdown every second
const countdownElement = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
