let noteBlock;
let input;

class Note {
	constructor(text) {
		this.text = text;
		this.finished = false;
		this.date = new Date();
	}

	static do() {
		this.finished = !this.finished;

		if (this.finished) {
			this.className = 'item checked';
		} else {
			this.className = 'item';
		}
	}

	static delete() {
		let delItem = this.parentNode;
		noteBlock.removeChild(delItem);

		Note.checkChilds();
	}

	static createNote(text) {
		let note = new Note(text);
		let newItem = noteBlock.appendChild( document.createElement('div') );
		newItem.className = 'item';
		newItem.textContent = text;
		newItem.onclick = Note.do;
		Note.drawDelBut(newItem);
		Note.checkChilds();
	}

	static drawDelBut(item) {
		let delButBack = item.appendChild( document.createElement('div') );
		delButBack.className = 'delButBack';
		let delBut = delButBack.appendChild( document.createElement('div') );
		delBut.className = 'deleteButton';
		delButBack.onclick = Note.delete;
	}

	static checkChilds() {
		let emptyAlert = document.querySelector(".emptyAlert");
		if (noteBlock.childElementCount == 0) {
			emptyAlert.style.visibility = 'visible';
		} else {
			emptyAlert.style.visibility = 'hidden';
		}
	}

	static getInput(key) {
		if (key.code == 'Enter' && this.value != "") {
			Note.createNote(this.value);
			this.value = "";
		}
	}
};

window.onload = function() {
	noteBlock = document.querySelector(".notes");

	input = document.querySelector("input");
	input.onkeydown = Note.getInput;

};