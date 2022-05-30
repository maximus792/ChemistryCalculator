class Hidrur{
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
        if (!element.valences.includes(this.e[3])){
            $(".procediment-div").hide();
        $(".procediment").hide();
        Toast("La valencia no és correcta")
            throw 'La valencia no és correcta';}

        return [this.e[3], element, "hidrur"];
    }
}