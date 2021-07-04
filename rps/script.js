// 0 rock 1 paper 2 scissors

function play(playerСhoice, comChoise) {

	if (comChoise == playerСhoice){
		return 'draw';
	}

	if (playerСhoice == 0 && comChoise == 2 || playerСhoice == 1 && comChoise == 0 || playerСhoice == 2 && comChoise == 1) {
		return 'win';
	} else {
		return 'lose';
	};

};

window.onload = function() {
	let colors = {
		'draw': '#000000',
		'win': '#0000ff',
		'lose': '#ff0000'
	};

	let figures = ['✊', '✋', '✌']; 
	let button1 = document.getElementsByClassName('rock')[0];
	let button2 = document.getElementsByClassName('paper')[0];
	let button3 = document.getElementsByClassName('scissors')[0];
	let state = document.getElementsByClassName('state')[0];
	let player = document.getElementsByClassName('player')[0];
	let com = document.getElementsByClassName('computer')[0];

	button1.onclick = function() {
		let comChoise = Math.floor(Math.random()*3);
		let res = play(0, comChoise);
		state.style.color = colors[res];
		state.textContent = res;
		player.textContent = figures[0];
		com.textContent = figures[comChoise];

	};

	button2.onclick = function() {
		let comChoise = Math.floor(Math.random()*3);
		let res = play(1, comChoise);
		state.style.color = colors[res];
		state.textContent = res;
		player.textContent = figures[1];
		com.textContent = figures[comChoise];
	};

	button3.onclick = function() {
		let comChoise = Math.floor(Math.random()*3);
		let res = play(2, comChoise);
		state.style.color = colors[res];
		state.textContent = res;
		player.textContent = figures[2];
		com.textContent = figures[comChoise];
	};
	
};