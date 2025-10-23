//your JS code here. If required.
// Function to format the date and time
function updateTime() {
    const timerElement = document.getElementById('timer');

    // Get the current date and time
    const now = new Date();

    // Format the date and time to display it in the desired format
    const formattedTime = now.toLocaleString(); // This will use the system's locale and format

    // Update the timer element with the formatted date and time
    timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTime, 1000); // 1000 milliseconds = 1 second

// Initial call to set the time immediately when the page loads
updateTime();
