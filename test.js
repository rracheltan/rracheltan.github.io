// Questions will be asked
const Questions = [{
		id: 0,
		q: "Who was the first ever KPOP group?",
		a: [{text:'Seo Taiji and Boys', isCorrect: true},
    {text:'H.O.T', iscCorrect: false},
    {text:'Shinhwa', isCorrect: false},
    {text:'Diva', isCorrect: false},
		]

	},
	{
		id: 1,
		q: "Who was the first KPOP group to have a lightstick?",
		a: [{text:'EXO', isCorrect: false},
    {text:'BigBang', isCorrect: true},
    {text:'Super Junior', isCorrect: false},
    {text:'2pm', isCorrect: false},
		]

	},
	{
		id: 2,
		q: "Which was the first KPOP group to perform at the GRAMMYs?",
		a: [{text:'Blackpink', isCorrect: false},
    {text:'Seventeen', isCorrect: false},
    {text:'BTS', isCorrect: true},
    {text:'Stray Kids',isCorrect: false},
		]

	},

]


var start = true;


function iterate(id) {


	var result = document.getElementsByClassName("result");
	result[0].innerText = "";


	const question = document.getElementById("question");



	question.innerText = Questions[id].q;


	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');



	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;


	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var selected = "";


	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})


	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})


	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})


	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})


	const evaluate = document.getElementsByClassName("evaluate");


	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

let currentQuestionIndex= 0;
let score = 0;

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id < 2) {
		id++;
		iterate(id);
		console.log(id);
	}

})
