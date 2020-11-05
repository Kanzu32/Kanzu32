let katakana = ['ン', 'ワ', 'ラ', 'ヤ', 'マ', 'ハ', 'ナ', 'タ', 'サ', 'カ',
						'ア', 'リ', 'ミ', 'ヒ', 'ニ', 'チ', 'シ', 'キ', 'イ', 'ル',
						'ユ', 'ム', 'フ', 'ヌ', 'ツ', 'ス', 'ク', 'ウ', 'レ', 'メ',
						'ヘ', 'ネ', 'テ', 'セ', 'ケ', 'エ', 'ヲ', 'ロ', 'ヨ', 'モ',
						'ホ', 'ノ', 'ト', 'ソ', 'コ', 'オ'];
let arr = [];


let green_begin = '#005b00';
let green_mid = '#008000';
let green_progressive = '#00aa00';
let green_light = '#00d300';

let scrWidth = 0;
let scrHeight = 0; 


let text = document.getElementById('textArea');
text.style.fontSize = window.innerWidth/100 + "px";

window.addEventListener('resize', function() {
	text.style.fontSize = window.innerWidth/100 + "px";
	arr.length = 0;
	while (text.firstChild) {
		text.removeChild(text.firstChild);
	};
	generate();
}, false);

function generate() {
	let i =0;
	let j=0;

	for (i=0; i <= window.innerHeight/parseInt(text.style.fontSize); i++) {
		arr.push([]);
		let lineEl = document.createElement('div');
		text.appendChild(lineEl);
		for (j=0; j <= window.innerWidth/parseInt(text.style.fontSize); j++) {
			arr[i][j] = katakana[Math.round(Math.random()*(katakana.length-1))];
			let el = document.createElement('span');
			el.textContent = arr[i][j]
			if (j == Math.trunc(window.innerWidth/parseInt(text.style.fontSize))) el.textContent += '\n';
			if (Math.round(Math.random()*20) > 14) el.style.color = "black";
			lineEl.appendChild(el);
		};
	};

	scrWidth = j;
	scrHeight = i;
}

function change() {
	let i = Math.floor(Math.random()*scrHeight);
	let j = Math.floor(Math.random()*scrWidth);

	arr[i][j] = katakana[Math.round(Math.random()*(katakana.length-1))];
	let oldEl = text.children[i].children[j];
	let el = oldEl;
	el.textContent = arr[i][j];
	oldEl.replaceWith(el);
	time = setTimeout(change, Math.random());
}

function move() {
	let el = text.lastChild;
	text.removeChild(text.lastChild);
	text.prepend(el);
	let timeMove = setTimeout(move, Math.random()*600);
}

generate();
let timeChange = setTimeout(change, Math.random());
let timeMove = setTimeout(move, Math.random()*600);

console.log(arr);