class OxoanioComp {
  constructor(e) {
    this.e = e;

    var element2 = {};
    json.elements.forEach((el) => {
      if (el.name.symbol == this.e[0]) {
        element2 = el;
      }
    });

    while (!element2.valences.includes(this.e[6])) {
      if (this.e[6] > element2.valences[element2.valences.length - 1]){
        $(".procediment-div").hide();
        $(".procediment").hide();
        Toast("La valencia no és correcta");
        throw "La valencia no és correcta--OxoanioComp";
      }
      this.e[1] *= 2;
      this.e[6] *= 2;
    }
    console.log(
      "passant al oxoanio->",
      [this.e[2], this.e[3], this.e[4], this.e[5]],
      this.e[1]
    );
    this.father = new Oxoanio(
      [this.e[2], this.e[3], this.e[4], this.e[5]],
      this.e[1]
    );
  }

  resolve() {
    var element1 = {};
    json.elements.forEach((el) => {
      if (el.name.symbol == this.e[2]) {
        element1 = el;
      }
    });
    var element2 = {};
    json.elements.forEach((el) => {
      if (el.name.symbol == this.e[0]) {
        element2 = el;
      }
    });

    return [this.e[1], element1, "oxoaniocomp", this.e[6], element2];
  }
}
