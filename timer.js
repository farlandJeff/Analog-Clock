var totalTime, userHours, userMinutes, userSeconds, timeInterval;
var song = new Audio("Samba De Uma Nota So.mp3");

// timerStart() is called when the user clicks the Start Timer button
function timerStart() {
	// Clear out and create a new interval.
	clearInterval(timeInterval);
	timeInterval = setInterval(timerCountdown, 1000);

	// Obtain hours, change to 0 if nothing is entered.
	// Same with the next 3 except with minutes and seconds.
	userHours = parseInt(document.getElementById("timerHours").value, 0);
	if (isNaN(userHours)) {
		userHours = 0;
	}

	userMinutes = parseInt(document.getElementById("timerMinutes").value, 0);
	if (isNaN(userMinutes)) {
		userMinutes = 0;
	}

	userSeconds = parseInt(document.getElementById("timerSeconds").value, 0);
	if (isNaN(userSeconds)) {
		userSeconds = 0;
	}

	// Calculate total time, if it's 0 then give an alert.
	totalTime = ((userHours * 3600) + (userMinutes * 60) + userSeconds);
	if (totalTime == 0) {
		alert("enter in time before starting the timer");
	}

	// Can't have over 59 seconds or minutes, have to use the next unit.
	else if ((userSeconds > 59) || (userMinutes > 59)) {
		alert("must be under 60 seconds or minutes entered, try adding a minute or hour instead")
	}

	// Print initial time.
	else {
		document.getElementById("timer").innerHTML =
		("0" + userHours).slice(-2) + ":" +
		("0" + userMinutes).slice(-2) + ":" +
		("0" + userSeconds).slice(-2);
	}

}

// This is called in the interval and it contains the logic to accurately show the
// remaining time.
function timerCountdown() {
	totalTime--;

	if ((userSeconds == 0) && (totalTime != 0)) {
		if (userMinutes == 0) {
			userHours--;
			userMinutes = 59;
		}

		else {
			userMinutes--;
		}

		userSeconds = 59;
	}

	else {
		userSeconds--;
	}

	document.getElementById("timer").innerHTML =
	("0" + userHours).slice(-2) + ":" +
	("0" + userMinutes).slice(-2) + ":" +
	("0" + userSeconds).slice(-2);

	// If the time hits 0, it goes to timerStop()
	if (totalTime == 0) {
		timerStop();
	}

}

// The music will begin to play and the interval will be cleared.
function timerStop() {
	song.play();

	clearInterval(timeInterval);

}

// This stops the music from playing.
function stopAudio() {
  song.pause();
}


function periodChange() {
	var date = new Date();

	var hours = date.getHours();
	document.getElementById("whichPeriod").innerHTML = "AM";
	if (hours => 12) {
        document.getElementById("whichPeriod").innerHTML = "PM";
    }

}
