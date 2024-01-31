document.addEventListener('DOMContentLoaded', function () {
    let countdownValue = 5; // Initial countdown value in seconds
  
    // Function to update the countdown
    function updateCountdown() {
      const countdownElement = document.getElementById('countdown');
      countdownElement.textContent = formatTime(countdownValue);
  
      if (countdownValue > 0) {
        countdownValue--;
      } else {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Time's up!";
        disableExtension();
      }
    }
  
    // Function to format time in MM:SS format
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  
    // Function to send a message to background script to disable the extension
    function disableExtension() {
      chrome.runtime.sendMessage({ action: "disableExtension", extensionId: chrome.runtime.id });
    }
  
    // Initial update
    updateCountdown();
  
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
  });
  