class Combbin{
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

        while (this.e[1] != Math.abs(element.valences[0])){
            if (this.e[0]>=10){
                $(".procediment-div").hide();
        $(".procediment").hide();
            Toast("La valencia no és correcta")
                throw "La valencia no és correcta";}
            var arr = [];
            this.e.forEach(element => {
                if (!isNaN(element))
                    arr.push(element*2)
                else
                    arr.push(element)
            });
            this.e=arr;
        }

        var element2={};
        json.elements.forEach((el) => {
            if (el.name.symbol == this.e[0])
                element2 = el
        });

        if (!element2.valences.includes(this.e[3])){
            $(".procediment-div").hide();
        $(".procediment").hide();
            Toast("La valencia no és correcta")
            throw "La valencia no és correcta"}

        return [this.e[1],element,"combbin", this.e[3], element2]
    }
}