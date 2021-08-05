let projects = [
  {type: "img", name: "Snake Game", link: "snakeGame/index.html", img: "img/snakeGame.png"},
	{type: "img", name: "Timer", link: "TIMER/index.html", img: "img/timer.png"},
	{type: "img", name: "Room Text Game", link: "roomGame/index.html", img: "img/roomGame.png"},
	{type: "img", name: "ToDo", link: "todo/index.html", img: "img/todo.png"},
	{type: "img", name: "cssDraw#1", link: "cssDraw1/index.html", img: "img/cssDraw1.png"},
	{type: "img", name: "Breakout", link: "Breakout/index.html", img: "img/Breakout.png"},
	{type: "img", name: "Slider", link: "Slider/index.html", img: "img/Slider.png"},
	{type: "img", name: "SiteEx#1", link: "SiteEx1/index.html", img: "img/SiteEx1.png"},
	{type: "img", name: "SiteEx#2", link: "SiteEx2/index.html", img: "img/SiteEx2.png"},
	{type: "img", name: "Matrix(not work on mobile)", link: "matrix/index.html", img: "img/matrix.png"},
	{type: "img", name: "HypnoSphere", link: "HypnoSphere/index.html", img: "img/hypnosphere.png"},
	{type: "text", name: "fox.", link: "fox/index.html", description: "Just a fox."},
	{type: "img", name: "Spaceship", link: "spaceship/index.html", img: "img/spaceship.png"},
	{type: "img", name: "Rock Scissors Paper", link: "rps/index.html", img: "img/rps.png"},
];


window.onload = () => {
  let projectsBlock = document.getElementsByClassName("projects-block")[0];
	let side;
  for (let i = 0; i < projects.length; i++)
  {
		if (i%2 == 0)
		{
			side = "right";
		} else
		{
			side = "left"
		}

    if (projects[i].type == "img")
    {
      projectsBlock.innerHTML += `<a class="border-wrapper" href="${projects[i].link}"><div><div class="project-name">${projects[i].name.toLowerCase()}</div><div class="project-img" style="background-image: url('${projects[i].img}')"></div></div></a>`;
    } else
    {
      projectsBlock.innerHTML += `<a class="border-wrapper" href="${projects[i].link}"><div><div class="project-name">${projects[i].name.toLowerCase()}</div><div class="project-description">${projects[i].description.toLowerCase()}</div></div></a>`;
    };
  };
}
