'use strict';

document.getElementById('send').addEventListener(
	'click',
	() => {
		const element = new Element(document.getElementById('elementInput').value); //crea element a partir de input
		element.findGroup();
		console.log(element);
	},
	false
);

// fer catalogador d'elements en funció de la seva estructura de string. Posar abans en una imatge i fer un esquema
