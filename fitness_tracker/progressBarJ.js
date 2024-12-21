const goalValue = 100; // Set your goal value here

document.getElementById('goal-value').innerText = goalValue;

function updateProgress() {
    const userValue = parseInt(document.getElementById('userInput').value);
    if (isNaN(userValue) || userValue < 0) {
        alert("Please enter a valid number.");
        return;
    }

    // Ensure userValue does not exceed goalValue
    const progressValue = Math.min(userValue, goalValue);
    const percentage = (progressValue / goalValue) * 100;

    // Update the progress bar
    document.getElementById('progress-bar').style.width = percentage + '%';
    document.getElementById('user-value').innerText = progressValue;
}