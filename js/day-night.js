// Function to toggle between day and night mode
function toggleMode() {
  const html = document.getElementsByTagName("html")[0];

  // Toggle the night-mode class
  html.classList.toggle("night-mode");

  // Save the current mode to localStorage
  if (html.classList.contains("night-mode")) {
    localStorage.setItem("theme", "night-mode"); // Save 'night-mode'
  } else {
    localStorage.setItem("theme", "day-mode"); // Save 'day-mode'
  }
}

// Initialize the mode on page load
function initializeMode() {
  const savedTheme = localStorage.getItem("theme"); // Retrieve the saved theme

  // Apply the saved theme if it exists
  if (savedTheme) {
    document.getElementsByTagName("html")[0].classList.add(savedTheme);
  }
}

// Run initializeMode when the page loads
document.addEventListener("DOMContentLoaded", initializeMode);
