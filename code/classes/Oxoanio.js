class Oxoanio{
    constructor(e, n){
        this.e = e;
        this.n = n;
        console.log("passant al oxoaciod->", ['H',Math.abs(this.n*-1)].concat(this.e))
        this.father = new Oxoacid(['H',this.n*-1].concat(this.e))
    }


    getOxoacidResolve(){
        return this.father.resolve();
    }


    resolve(){
        var element = {};
        
		json.elements.forEach((el) => {
			if (el.name.symbol == this.e[0]) {
				element = el;
			}
		});
        return [this.father.getOxidResolve()[0], element, "oxoanio"];
    }
}