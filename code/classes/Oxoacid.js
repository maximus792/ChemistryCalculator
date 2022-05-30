class Oxoacid {
  constructor(arr) {
    /*addMissingValences*/
    this.e = arr;
  }

  getOxidResolve() {
    if (["C", "N", "S", "Se", "Te", "Cl", "Br", "I"].indexOf(this.e[2]) == -1) {
      $(".procediment-div").hide();
      $(".procediment").hide();
      Toast("No es pot fer un oxoacid amb aquest element");
      throw "No es pot fer un oxoacid amb aquest element";
    }
    this.e[1] = Math.abs(this.e[1]);
    var mult = 1;
    if (this.e[1] == 1) mult = 2;
    if (this.e[5] == 1) {
      this.e[3] += 1;
      this.e[5] += 1;
    }

    console.log("passant al oxid:", [
      this.e[2],
      this.e[3] * mult,
      this.e[4],
      this.e[5] * mult - 1,
    ]);
    return new Oxid([
      this.e[2],
      this.e[3] * mult,
      this.e[4],
      this.e[5] * mult - 1,
    ]).resolve();
  }

  resolve() {
    return [this.getOxidResolve()[0], this.getOxidResolve()[1], "oxoacid"];
  }
}
