class Hidroxid{
    constructor(e){
        this.e = e;
    }

    resolve(){
        console.log("Hidroxid->",this.e)
        var element = {};

        json.elements.forEach((el) => {
            if (el.name.symbol == this.e[0]) {
                element = el;
            }
        });


        return [this.e[6], element ,"hidroxid"];
    }
}