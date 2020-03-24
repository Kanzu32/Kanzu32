let main;

let projects = [
	{name: "Snake Game", link: "https://kanzu32.github.io/snakeGame/", img: "img/snakeGame.png"},
	{name: "Timer", link: "https://kanzu32.github.io/TIMER/", img: "img/timer.png"},
	{name: "Room Text Game", link: "https://kanzu32.github.io/roomGame/", img: "img/roomGame.png"},
];

window.onload = function() {

	main = document.getElementsByTagName("main")[0];

	for (let item of projects) {
		let link = main.appendChild( document.createElement('a') );
		link.href = `${item.link}`;

		let div = link.appendChild( document.createElement('div') );
		div.className = 'item';
		div.style.backgroundImage = `url(${item.img})`;

		let divAfter = div.appendChild( document.createElement('div') );
		divAfter.className = 'name';
		divAfter.textContent = item.name;

	};
	console.log(document.getElementsByTagName("main"));

};