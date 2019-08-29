function startQuiz() {
	document.getElementById('btn').style.display = "none";
	document.getElementById('start-form').style.display = "none";
	return displayQuestion();
}

var pos = 0, test, test_status, question, option, options, opA, opB, opC, opD, score = 0;
var questions = [
["Enunciado 1", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "A"],
["Enunciado 2", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "B"],
["Enunciado 3", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "C"],
["Enunciado 4", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "D"],
["Enunciado 5", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "A"],
["Enunciado 6", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "B"],
["Enunciado 7", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "C"],
["Enunciado 8", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "D"],
["Enunciado 9", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "A"],
["Enunciado 10", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "B"],
["Enunciado 11", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "C"],
["Enunciado 12", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "D"],
["Enunciado 13", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "A"],
["Enunciado 14", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "B"],
["Enunciado 15", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "C"],
["Enunciado 16", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "D"],
["Enunciado 17", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "A"],
["Enunciado 18", "Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "B"]
];

function $(arg) {
return document.getElementById(arg);
}

function displayQuestion() {
    test = $("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>Você acertou " + score + " de " + questions.length + " questões!</h2>";
        $("test_status").innerHTML = "Questionário finalizado.";
        pos = 0;
        score = 0;
        return false;
    }

    $("test_status").innerHTML = "Pergunta " + (pos + 1) + " de " + questions.length;
    question = questions[pos][0];
    opA = questions[pos][1];
    opB = questions[pos][2];
    opC = questions[pos][3];
    opD = questions[pos][4];
    test.innerHTML = "<h5>" + question + "</h5>";
    test.innerHTML += "<p><label><input type='radio' name='options' value='A'><span>" + opA + "</span></label></p>";
    test.innerHTML += "<p><label><input type='radio' name='options' value='B'><span>" + opB + "</span></label></p>";
    test.innerHTML += "<p><label><input type='radio' name='options' value='C'><span>" + opC + "</span></label></p>";
    test.innerHTML += "<p><label><input type='radio' name='options' value='D'><span>" + opD + "</span></label></p>";
    test.innerHTML += "<button class='btn waves-effect waves-light center-align' id='btn' type='button' onclick='checkAnswer()'>Próxima Questão<i class='material-icons right'>chevron_right</i></button>";
}

function checkAnswer() {
    options = document.getElementsByName("options");

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            option = options[i].value;
    	} 
	}

	if (option == undefined || null) {
		M.toast({html: 'Você precisa escolher um item da lista.'})
	} else {
		if (option == questions[pos][5]) {
    	score++;
    }
    pos++;
    option = null;
    displayQuestion();
	}
}

function checkForm() {
	var contactName = document.getElementById('name'),
		contactEmail = document.getElementById('email'),
		companyName = document.getElementById('company_name');

	if (contactName.value !== "" && contactEmail.value !== "" && companyName.value !== "" && contactEmail.className.indexOf('invalid') == -1) {
		document.getElementById('btn').classList.remove('disabled');
 		} else {
 		document.getElementById('btn').classList.add('disabled');
 		}
}