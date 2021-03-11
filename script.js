let main;

let projects = [
	{name: "Snake Game", link: "snakeGame/index.html", img: "img/snakeGame.png"},
	{name: "Timer", link: "TIMER/index.html", img: "img/timer.png"},
	{name: "Room Text Game", link: "roomGame/index.html", img: "img/roomGame.png"},
	{name: "ToDo", link: "todo/index.html", img: "img/todo.png"},
	{name: "cssDraw#1", link: "cssDraw1/index.html", img: "img/cssDraw1.png"},
	{name: "Breakout", link: "Breakout/index.html", img: "img/Breakout.png"},
	{name: "Slider", link: "Slider/index.html", img: "img/Slider.png"},
	{name: "SiteEx#1", link: "SiteEx1/index.html", img: "img/SiteEx1.png"},
	{name: "SiteEx#2", link: "SiteEx2/index.html", img: "img/SiteEx2.png"},
	{name: "Matrix(not work on mobile)", link: "matrix/index.html", img: "img/matrix.png"},
	{name: "HypnoSphere", link: "HypnoSphere/index.html", img: "img/hypnosphere.png"},
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