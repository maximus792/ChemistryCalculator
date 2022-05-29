class Element {
  constructor(formula) {
    this.original = formula.replaceAll("\\right", "").replaceAll("\\left", "");
    this.formula = formula
      .replaceAll(/\s/g, "")
      .replace("Aq", "aq")
      .replace("AQ", "aq")
      .replace("aQ", "aq")
      .replaceAll("_", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("\\left", "")
      .replaceAll("\\right", "")
      .split("^")[0];
    this.proced = [];
    this.aq = false;
    if (formula.split("^").length > 1)
      this.superIndex = parseInt(
        formula.split("^")[1].substring(1, formula.length - 2)
      );
    else this.superIndex = 0;
  }

  discomposeElements(s) {
    console.log(s);
    let result = [];

    let el = s.match(/[A-Z][a-z]?[0-9]*/g);
    if (el == null || el.length == 0) {
      $(".procediment-div").hide();
      $(".procediment").hide();
      alert("Error al calcular :(");
      throw "L'element descomposat està buit.";
    }
    el.forEach((element) => {
      result = result.concat(
        element.match(/([A-Z][a-z]?)+|[0-9]+(?:\.[0-9]+|)/g)
      );
    });

    if (s.toLowerCase().indexOf("(aq)") > 0) this.aq = true;
    else this.aq = false;

    if (result.join("") != s && !this.aq) {
      $(".procediment-div").hide();
      $(".procediment").hide();
      alert("Error al calcular :(");
      throw "L'element descomposat i el donat no coincideixen.";
    }

    return integrifyNumbers(result);
  }

  addMissingValences(s) {
    let arr = this.discomposeElements(s);
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++) {
      if (typeof arr[i] == "string") {
        if (i == arr.length - 1 || typeof arr[i + 1] == "string")
          result.push(arr[i], 1);
        else result.push(arr[i], arr[i + 1]);
      }
    }
    return result;
  }

  findGroup() {
    let e = this.addMissingValences(this.formula);
    console.log("e", e);
    console.log("------", this.original[this.original.indexOf("O") + 1]);
    if (this.original[this.original.indexOf("O") + 1] == ")") {
      let arr = [];
      e.forEach((element) => {
        arr.push(element);
        if (element == "O") arr.push(1);
      });
      e = arr;
      console.log("arr", arr);
    }
    if (e[5] > 10) {
      let a = e[5];
      e[5] = parseInt(a.toString()[0]);
      e.push(parseInt(a.toString()[1]));
    }

    if (e[e.length - 1] >= 10) {
      console.log(e.slice(0, e.length - 2));
      var e1 = e.slice(0, e.length - 3);
      console.log(e1);
      e1.push(parseInt(e[e.length - 1].toString()[0]));
      e1.push(parseInt(e[e.length - 1].toString()[1]));
      e = e1;
    }

    console.log(e);
    console.log(e.join(""));

    if (this.superIndex != 0) {
      console.log("oxoanió");

      var oxoanio = new Oxoanio(e, this.superIndex);
      this.proced.push(oxoanio.father.getOxidResolve());
      this.proced.push(oxoanio.getOxoacidResolve());
      this.proced.push(oxoanio.resolve());
    } else if (e.length / 2 == 2 && e.indexOf("O") > 0) {
      console.log("oxid");
      const oxid = new Oxid(e);
      this.proced.push(oxid.resolve());
    } else if (
      e[0] == "H" &&
      e.length / 2 == 2 &&
      (e.indexOf("F") >= 0 ||
        e.indexOf("Cl") >= 0 ||
        e.indexOf("Br") >= 0 ||
        e.indexOf("I") >= 0 ||
        e.indexOf("S") >= 0 ||
        e.indexOf("Se") >= 0 ||
        e.indexOf("Te") >= 0)
    ) {
      if (this.aq == true) {
        console.log("sals  d'hidracid");
        const hidracid = new Hidracid(e);
        this.proced.push(hidracid.resolve());
      }
    } else if (
      e.length / 2 == 2 &&
      e.indexOf("H") >= 0 &&
      (e.join("") == "B1H3" ||
        e.join("") == "C1H4" ||
        e.join("") == "Si1H4" ||
        e.join("") == "N1H3" ||
        e.join("") == "P1H3" ||
        e.join("") == "As1H3" ||
        e.join("") == "Sb1H3" ||
        e.join("") == "Bi1H3")
    ) {
      console.log("hidrurs amb nom propi");
      const hidrurNP = new HidrurNP(e);
      this.proced.push(hidrurNP.resolve());

      /*console.log(e);
      switch (e[0]) {
        case "B":
          console.log("Borà");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Borà"));
          break;
        case "C":
          console.log("Metà");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Metà"));
          break;
        case "Si":
          console.log("Silà");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Silà"));
          break;
        case "N":
          console.log("Amoniac");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Amoniac"));
          break;
        case "P":
          console.log("Fosfina");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Fosfina"));
          break;
        case "As":
          console.log("Arsina");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Arsina"));
          break;
        case "Sb":
          console.log("Estibina");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Estibina"));
          break;
        case "Bi":
          console.log("Bismutina");
          document
            .querySelectorAll(".res-p")
            .forEach((a) => (a.innerHTML = "Bismutina"));
          break;
        default:
          console.log("hidrur");

          break;
      }*/
    } else if (e[2] == "H" && this.aq == false && e.length / 2 == 2) {
      console.log("hidrur");
      const hidrur = new Hidrur(e);
      this.proced.push(hidrur.resolve());
    } else if (
      e.length / 2 == 2 &&
      (e.indexOf("F") > 0 ||
        e.indexOf("Cl") > 0 ||
        e.indexOf("Br") > 0 ||
        e.indexOf("I") > 0 ||
        e.indexOf("S") > 0 ||
        e.indexOf("Se") > 0 ||
        e.indexOf("Te") > 0)
    ) {
      console.log("combBin");
      var combbin = new Combbin(e);
      this.proced.push(combbin.resolve());
    } else if (e.length / 2 == 3 && e[0] == "H" && e[4] == "O") {
      console.log("oxoacid");
      var oxoacid = new Oxoacid(this.addMissingValences(this.formula));
      this.proced.push(oxoacid.getOxidResolve());
      this.proced.push(oxoacid.resolve());
    } else if (e.length / 2 >= 3 && !e.includes("H")) {
      console.log("OxoaniodComp");
      console.log(e);
      if (e[6] == undefined) e.push(1);
      var oxoaniocomp = new OxoanioComp(e);
      this.proced.push(oxoaniocomp.father.father.getOxidResolve());
      this.proced.push(oxoaniocomp.father.father.resolve());
      this.proced.push(oxoaniocomp.father.resolve());
      this.proced.push(oxoaniocomp.resolve());
    } else {
      console.log("asdjsafhjfdagjsfadkf", e.length / 2);
      console.log(!e.includes("H"));
      $(".procediment-div").hide();
      $(".procediment").hide();
      alert("Encara no es pot resoldre aquest compost :(");
      throw "No se que cohone e issom!";
    }
  }
}
