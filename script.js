let buttonStart = document.getElementById("button-start");
let buttonSend = document.getElementById("button-send");
let buttonNext = document.getElementById("button-next");
let questionAuthor = document.getElementById("question-author");
let questionBody = document.getElementById("question-body"); 

let questionCurrent;
let questionList = [];

buttonStart.addEventListener("click", nextHandler);
buttonSend.addEventListener("click", sendHandler);
buttonNext.addEventListener("click", nextHandler);

class Question {
	constructor(author, body, answer) {
		this.author = author;
		this.body = body;
		this.answer = answer;
	}
}

function nextHandler() {
	buttonStart.classList.add("hidden");
	buttonSend.classList.remove("hidden");
	buttonNext.classList.add("hidden");
	let random = Math.floor(Math.random() * questionList.length);
	questionCurrent = questionList[random]();
	questionAuthor.innerText = `Autor der Frage: ${questionCurrent.author}`;
	questionBody.innerHTML = questionCurrent.body;
}

function sendHandler() {
	buttonStart.classList.add("hidden");
	buttonSend.classList.add("hidden");
	buttonNext.classList.remove("hidden");
	[...document.getElementsByTagName("input")].forEach((e,i) => {
		let value = e.value;
		switch(e.type) {
			case "checkbox":
				value = e.checked;
			default:
				break;
		}
		if (questionCurrent.answer[i].toString().toLowerCase() != value.toString().toLowerCase()) {
			e.style.borderColor = "#ff0000";
			let span = document.createElement("span");
			span.classList.add("answer-text");
			span.innerText = questionCurrent.answer[i];
			e.after(span);
		} else {
			e.style.borderColor = "#00ff00";
		}
	});
}

Math.randomInt = function(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

Math.randomFloat = function(min, max) {
	return Math.random() * (max - min) + min;
}