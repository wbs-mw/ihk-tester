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

class Answer {
	constructor(value, unit = "", points = 0) {
		this.value = value;
		this.unit = unit;
		this.points = points;
	}
	toString() {
		return `${this.value} ${this.unit}`;
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
	let pointsCurrent = 0;
	let pointsMax = 0;
	
	buttonStart.classList.add("hidden");
	buttonSend.classList.add("hidden");
	buttonNext.classList.remove("hidden");
	
	[...document.getElementsByTagName("textarea")].forEach((ta,i) => {
		let correct = 0;
		let incorrect = 0;
		let missing = [];
		let eResult = document.createElement("div");
		
		if (i >= questionCurrent.answer.length) {
			return;
		}
		
		questionCurrent.answer[i].forEach(a => {
			let regex = new RegExp(`${a.value}|${a.toString()}`);

			pointsMax += a.points;
			
			if (regex.test(ta.value)) {
				correct += 1;
				pointsCurrent += a.points;
			} else {
				incorrect += 1;
				missing.push(a);
			}
		});
		
		if (correct > 0 && incorrect > 0) {
			eResult.innerText = missing.toString();
			eResult.style.color = "orange";
			ta.style.borderColor = "orange";
			ta.after(eResult);
		} else if (correct > 0 && incorrect == 0) {
			ta.style.borderColor = "green";
		} else {
			eResult.innerText = missing.toString();
			eResult.style.color = "red";
			ta.style.borderColor = "red";
			ta.after(eResult);
		}
	});

	let pointsElement = document.createElement("div");
	pointsElement.innerText = `${pointsCurrent} von ${pointsMax} Punkten erreicht!`;
	questionBody.appendChild(pointsElement);
}

Math.randomInt = function(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

Math.randomFloat = function(min, max) {
	return Math.random() * (max - min) + min;
}