class Hidrur{
    constructor(e){
        this.e = e;
    }

    resolve(){
        var element = {};
        
		json.elements.forEach((el) => {
			if (el.name.symbol == this.e[2]) {
				element = el;
			}
		}); 
        if (this.e[1] != Math.abs(element.valences[0]))
            throw 'La valencia no és correcta';

        return [element.valences[0], element, "hidrur"];
    }
}