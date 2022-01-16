function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function loadQuestion(index) {
	//A
	var q = [{
		question: "What is 2*5?",
		choices: shuffle([2, 5, 10, 15, 20]),
		correctAnswer: 10
	}, {
		question: "What is 5*3?",
		choices: shuffle([2, 5, 10, 15, 20]),
		correctAnswer: 15
	}];
	
	var p = "123";
	var qs = { ask: q, pass: p }
	
	question_bank.push(qs);
	
	//B
	q = [{
		question: "What is 8*9?",
		choices: shuffle([0,9,72,21,50]),
		correctAnswer: 72
	}, {
		question: "What is 6*4?",
		choices: shuffle([9,23,24,10,-1]),
		correctAnswer: 24
	}];
	
	p = "456";
	qs = { ask: q, pass: p }
	
	question_bank.push(qs);
	
	return question_bank[index];
}