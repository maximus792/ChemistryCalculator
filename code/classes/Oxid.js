class Oxid {
  constructor(arr /*addMissingValences*/) {
    this.e = arr;
  }

  static findVal(a) {
    return (a[3] * 2) / a[1];
  }

  resolve() {
    let val = Oxid.findVal(this.e);

    var element = {};

    json.elements.forEach((el) => {
      if (el.name.symbol == this.e[0]) {
        element = el;
      }
    });

    if (element == {}) {
      //comprovar que si no troba l'element si tira un undefinded
      $(".procediment-div").hide();
      $(".procediment").hide();
      alert("L'element no existeix.");

      throw "L'element no existeix.";
    } else if (
      element.valences.indexOf(val) == -1 &&
      this.e[3] == 2 &&
      (element.group == 1 || element.group == 2)
    ) {
      console.log("peroxid-1");

      if ((element.group == 1 || element.group == 2) && this.e[3] == 2) {
        console.log("peroxid");
        var peroxid = new Peroxid(element, val);
        return peroxid.resolve();
      } else {
        $(".procediment-div").hide();
        $(".procediment").hide();
        alert("La valencia no és correcta");

        throw "La valencia no és correcta";
      }
    } else {
      if (!element.valences.includes(val)) {
        $(".procediment-div").hide();
        $(".procediment").hide();
        alert("La valencia no és correcta");

        throw "La valencia no és correcta";
      }
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
