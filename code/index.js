'use strict';

$(".procediment-div").hide()
$(".procediment").hide()

var MQ = MathQuill.getInterface(2);
var enteredMath = "H_2SO_4";
var answerSpan = document.getElementById('math-input');

var answerMathField = MQ.MathField(answerSpan, {
	handlers: {
		edit: function () {
			enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
		}
	}
});
document.querySelector("#sub").addEventListener("click",()=>{
	answerMathField.cmd("_")
	answerMathField.focus()
})
document.querySelector("#sup").addEventListener("click",()=>{
	answerMathField.cmd("^")
	answerMathField.focus()
})
document.querySelector("#sub2").addEventListener("click",()=>{
	answerMathField.write("_2")
	answerMathField.focus()
})
document.querySelector("#sup2").addEventListener("click",()=>{
	answerMathField.write("^2")
	answerMathField.focus()
})

document.getElementById('send').addEventListener(
	'click',
	() => {
		//const element = new Element(document.getElementById('elementInput').value); //crea element a partir de input
		console.log(enteredMath);
		const element = new Element(enteredMath);
		element.findGroup();
		console.log(element);
		writeDocument(element)

		element.proced.forEach(a => {
			console.log(findName(a));
		});
	},
	false
);

// fer catalogador d'elements en funció de la seva estructura de string. Posar abans en una imatge i fer un esquema
