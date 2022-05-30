class Peroxid{
    constructor(e, v){
        this.e = e;
        this.v = v
    }

    resolve(){
        return [this.e.valences[0], this.e, "peroxid"];
    }
}