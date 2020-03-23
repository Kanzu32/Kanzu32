let map = {
	map: [["╔", "═", "═", "╗"], ["║", "@", " ", "║"], ["║", " ", " ", "║"], ["╚", "═", "═", "╝"]],
	height: 4,
	width: 4,
	playerX: 2,
	playerY: 2,
};
let screen;

function generateRoom(x, y) {   //╔╗═║╚╝@
	if (+x < 3 && +y < 3) {
		return generateRoom(3, 3);
	} else if (+x < 3) {
		return generateRoom(3, +y);
	} else if (+y < 3) {
		return generateRoom(+x, 3);
	};
	val = [];
	for (let j = 0; j < y; j++) {
		val.push([])
		for (let i = 0; i < x; i++) {
			if (j == 0 && i == 0) {
				val[j].push("╔");
			} else if (j == 0 && i == x-1) {
				val[j].push("╗");
			} else if (j == y-1 && i == 0) {
				val[j].push("╚");
			} else if (j == y-1 && i == x-1) {
				val[j].push("╝");
			} else if (j == 0 || j == y-1) {
				val[j].push("═");
			} else if (i == 0 || i == x-1) {
				val[j].push("║");
			} else {
				val[j].push(" ");
			}
		}
	}
	let arr = {
		map: val,
		height: y,
		width: x,
	};
	return arr;
};

function addPlayer(map, x, y) {
	if (+x < 2 || +y < 2 || +x >= +map.width || +y >= +map.height) {
		return addPlayer(map, '2', '2');
	};
	map.map[y-1][x-1] = "@";
	map.playerX = x;
	map.playerY = y;
};

function getValues(roomX, roomY, playerX, playerY) {
	map = generateRoom(roomX, roomY);
	addPlayer(map, playerX, playerY);
	update();
	console.log(map);
};

window.onload = function() {
	screen = document.getElementsByClassName("wrapper")[0];
	update();
	console.log(map);
};

document.addEventListener("keyup", movePlayer, false);

function movePlayer(event) {

	if (event.key == 'ArrowDown' && +map.playerY < map.height-1) {

		map.map[map.playerY-1][map.playerX-1] = ' ';
		map.playerY = +map.playerY+1;

	} else if (event.key == 'ArrowUp' && +map.playerY > 2) {

		map.map[map.playerY-1][map.playerX-1] = ' ';
		map.playerY = +map.playerY-1;

	} else if (event.key == 'ArrowRight' && +map.playerX < map.width-1) {

		map.map[map.playerY-1][map.playerX-1] = ' ';
		map.playerX = +map.playerX+1;

	} else if (event.key == 'ArrowLeft' && +map.playerX > 2) {

		map.map[map.playerY-1][map.playerX-1] = ' ';
		map.playerX = +map.playerX-1;

	};

	map.map[map.playerY-1][map.playerX-1] = '@';
	update();
};

function update() {
	let scrMap = '';
	for (let a in map.map) {
		for (let b in map.map[a]) {
			scrMap += map.map[a][b];
		};

		scrMap += "\n";
	};

	screen.textContent = scrMap;
};