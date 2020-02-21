let timer = document.querySelector('.timer');
let startstamp;
let currentstamp;
let state;   // stop, play, reset

let timerPlay;

let button = document.querySelector('.button');
button.addEventListener("click", changeState, false);


function tik() {
	currentstamp = Date.now();
	setTime();
};

function setTime() {
	let time = new Date(currentstamp - startstamp);
	timer.textContent = `${("00" + time.getUTCHours()).slice(-2)}:${("00" + time.getUTCMinutes()).slice(-2)}:${("00" + time.getUTCSeconds()).slice(-2)}`;
};

function changeState() {
	if (state == 'stop') {
		state = 'reset';
	} else if (state == 'reset') {
		state = 'play';
	} else if (state == 'play') {
		state = 'stop';
	} else if (state == undefined) {
		state = 'play';
	};
	
	changeTimerMode();
};

function changeTimerMode() {

	if (state == 'play') {
		startstamp = Date.now();
		timerPlay = setInterval(tik, 1);
		button.textContent = 'stop';
	} else if (state == 'stop') {
		clearInterval(timerPlay);
		button.textContent = 'reset';
	} else if (state == 'reset') {
		timer.textContent = "00:00:00";
		button.textContent = 'start';
	}

};
