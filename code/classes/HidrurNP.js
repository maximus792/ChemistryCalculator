//classe per als hidrurs que tenen nom propi
class HidrurNP{
    constructor(e){
        this.e = e;
    }

    resolve(){

        var element = {};
        
		json.elements.forEach((el) => {
			if (el.name.symbol == this.e[0]) {
				element = el;
			}
		}); 

        return [this.e[3], element, "hidrurNP"];
    }
}