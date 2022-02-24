class Oxid {
	constructor(arr /*addMissingValences*/) {
		this.e = arr;
	}

	findVal(a) {
		return (a[3] * 2) / a[1];
	}
	
	resolve() {
		let val = this.findVal(this.e);
		var element = {};
		json.elements.forEach((el) => {
			if (el.name.symbol == this.e[0]) {
				element = el;
			}
		});
		if (element == {}) {
			//comprovar que si no troba l'element si tira un undefinded
			throw "L'element no existeix.";
			
			
		}
		else if (element.valences.indexOf(val) == -1) {
			
			throw 'La valencia no és correcta';
		}
		else{
			return [val, element, "oxid"];
		}
	}
}

/*

SyOz

0 = x*y + z*(-2)

x = (z*2) / y


findVal(a) {
		x = ;


	}
	Name(e) {
		let val = this.FindVal(e);
		let element = json.find((el) => el.name.symbol == e[0]);
		console.log(element);
	}


*/
