	let firstNumber = prompt('What is your 1st number');
	let secondNumber = prompt('What is your 2nd number');
	let question = prompt('What do u want to do?\nAdd, Minus, Divide or Multiply?');
	let sum = question.toUpperCase();

		if (sum == 'ADD') {
				let sumAdd = Number(firstNumber) + Number(secondNumber);
				 alert(`${firstNumber} + ${secondNumber} =` + ' ' + sumAdd);
		} else if (sum == 'MINUS') {
				let sumMinus = Number(firstNumber) - Number(secondNumber);
				 alert(`${firstNumber} - ${secondNumber} =` + ' ' + sumMinus);
		} else if (sum == 'DIVIDE') {
				let sumDivide = Number(firstNumber) / Number(secondNumber);
				 alert(`${firstNumber} / ${secondNumber} =` + ' ' + sumDivide);
		} else if (sum == 'MULTIPLY') {
				let sumMultiply = Number(firstNumber) * Number(secondNumber);
				 alert(`${firstNumber} * ${secondNumber} =` + ' ' + sumMultiply);
		} else {
				 alert('Stupid🤬🤬🤬🤬');
		}
