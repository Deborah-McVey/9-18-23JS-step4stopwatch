/* STEP 4: STOPWATCH
Aim: Create a stopwatch using JavaScript with start, stop, and reset buttons

| ./stopwatch.html |

[ ] Build out the HTML
Create a section to display the timer's time
Create a section that holds the three buttons (start, stop, reset)
<!-- * MAIN CONTENT * -->
<main class="container">
  <h1>Stopwatch!</h1>

  <article>
    <!-- Timer Display -->
    <section class="timer">
      <p>
        <span class="minutes">0 0</span> : <span class="seconds">0 0</span>
      </p>
    </div>

    <!-- Timer Buttons -->
    <section class="timer-buttons">
      <div>
        <button data-action="start" class="btn btn-start">Start</button>
        <button data-action="stop" class="btn btn-stop">Stop</button>
      </div>

      <button data-action="reset" class="btn-reset">Reset</button>
    </section>
  </article>
</main>

| ./stopwatch.js |

[ ] Establish the Element Selectors
Grab all the elements we need from the HTML and store them in their respective variables
// * ========== HTML Element Selectors ========== * \\
const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const resetButton = document.querySelector("[data-action='reset']");
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

[ ] Initiate the Event Listeners
Create event listeners for the start, stop, and reset buttons that call their respective functions on "click"
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for a click on the start button to start the timer
startButton.addEventListener('click', startTimer);

// EVENT LISTENER: TSListens for a click on the stop button to stop the timer
stopButton.addEventListener('click', stopTimer);

// EVENT LISTENER: Listens for a click on the reset button to reset the timer
resetButton.addEventListener('click', resetTimer);

[ ] Declare the Functions
// * ========== Function Declarations ========== * \\
// FUNCTION: Starts the timer
function startTimer() {}

// FUNCTION: Stops the timer
function stopTimer() {}

// FUNCTION: Resets the timer
function resetTimer() {}

[ ] Define the Global Variables
// * ========== Global Variables ========== * \\
let currTime = 0;

[ ] Start an Interval when the startTimer function is called
// FUNCTION: Starts the timer
function startTimer() {
	setInterval(() => {
		// Increment the current time variable
		currTime++;

		// Get the formatted seconds and minutes based on the current time
		const { minutes, seconds } = getFormattedTime(); // { minutes: 1, seconds: 30 }

		// Display the time to the screen
		displayFormattedTime(minutes, seconds);
	}, 1000);
}

[ ] Calculate & Display the formatted time in the browser
// FUNCTION: Helper Function to format time into proper text
function getFormattedTime() {
	let min = Math.floor(currTime / 60);
	let sec = currTime % 60;

	return {
		minutes: min < 10 ? `0 ${min}` : min,
		seconds: sec < 10 ? `0 ${sec}` : sec,
	};
}

// FUNCTION: Helper function ot display the formatted time to the correct HTML element
function displayFormattedTime(minutes, seconds) {
	minutesDisplay.innerText = minutes;
	secondsDisplay.innerText = seconds;
}

[ ] Refactor your solution
// FUNCTION: Start an Interval that increases the global timer variable by 1 every second
function incrementTime() {
	// Increment the current time variable
	currTime++;

	// Get the formatted seconds and minutes based on the current time
	const { minutes, seconds } = getFormattedTime(); // { minutes: 1, seconds: 30 }

	// Display the time to the screen
	displayFormattedTime(minutes, seconds);
}

[ ] Add Logic to the Functions
Create two new global variables
Check if the timer is running and have code dependant on that state
Set and Clear the interval in the start and stop functions
Have the reset function stop the timer and reset the inputs
// * ========== Global Variables ========== * \\
let currTime = 0;
let isRunning = false;
let timerInterval;

// * ========== Function Declarations ========== * \\
// FUNCTION: Starts the timer
function startTimer() {
	// If there was a previous timer, don't create another new timer
	if (isRunning) return;

	isRunning = true;
	timerInterval = setInterval(incrementTime, 1000);
}

// FUNCTION: Stops the timer
function stopTimer() {
	// If there wasn't a previous timer, don't do anything
	if (!isRunning) return;

	isRunning = false;
	clearInterval(timerInterval);
}

// FUNCTION: Resets the timer
function resetTimer() {
	stopTimer();

	currTime = 0;
	displayFormattedTime('0 0', '0 0');
}

Check: Ensure the stopwatch works as intended

Can you start the stopwatch?
When you pause a running stopwatch and start again, does the counter increase at a normal pace?
When you click the reset button, does the input look the same as if you refreshed the page? */

const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
const resetButton = document.querySelector("[data-action='reset']");
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let currTime = 0;
let isRunning = false;
let timerInterval;

setInterval(function() {
	currTime++;

	const numOfMinutes = Math.floor(currTime / 60);
	const numOfSeconds = currTime % 60;
	
	minutes.innerText = pad(numOfMinutes);
	minutes.innerText = pad(numOfSeconds);
}, 1000);

/* function getFormattedTime() {
	let min = Math.floor(currTime / 60);
	let sec = currTime % 60;

	return {
		minutes: min < 10 ? `0 ${min}` : min,
		seconds: sec < 10 ? `0 ${sec}` : sec,
	};
}

function displayFormattedTime(minutes, seconds) {
	minutesDisplay.innerText = minutes;
	secondsDisplay.innerText = seconds;
} 

function incrementTime() {
	currTime++;

	const numOfMinutes = math.floor(currTime / 60);
	const numOfSeconds = currTime % 60;

	minutes.innerText = pad(numOfMinutes);
	minutes.innerText = pad(numOfSeconds);
} */

function startTimer() {
	if (isRunning) return;
	isRunning = true;
	interval = setInterval(incrementTime, 1000);
}

function stopTimer() {
	if (!isRunning) return;
	isRunning = false;
	clearInterval(timerInterval);
}

function resetTimer() {
	stopTimer();

	currTime = 0;
	minutes.innerText = '0 0';
	seconds.innerText = '0 0';
}

function pad(number) {
	return (number < 10) ? '0' + number : number;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);