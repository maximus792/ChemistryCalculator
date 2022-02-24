class Element {
  constructor(formula) {
    this.formula = formula;
    this.proced = [];
  }

  discomposeElements(s) {
    let result = [];
    let el = s.match(/[A-Z][a-z]?[0-9]*/g);
    if (el == null || el.length == 0) throw "L'element descomposat està buit.";

    el.forEach((element) => {
      result = result.concat(
        element.match(/([A-Z][a-z]?)+|[0-9]+(?:\.[0-9]+|)/g)
      );
    });

    if (result.join("") != s)
      throw "L'element descomposat i el donat no coincideixen.";

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
    console.log(this.formula);
    let e = this.addMissingValences(this.formula);
    console.log("ARRAY: " + e);
    if (e.length / 2 == 2 && e.indexOf("O") > 0) {
      console.log("oxid");
      const oxid = new Oxid(e);
      this.proced.push(oxid.resolve());
      return oxid.resolve(e);

    } 
    else if (
      e.length / 2 == 2 &&
      (e.indexOf("F") >= 0 ||
        e.indexOf("Cl") >= 0 ||
        e.indexOf("Br") >= 0 ||
        e.indexOf("I") >= 0 ||
        e.indexOf("S") >= 0 ||
        e.indexOf("Se") >= 0 ||
        e.indexOf("Te") >= 0)
    ) {
      console.log("hidracid");
    } 
    
    else if (e.length / 2 == 2 && e.indexOf("H") >= 0) {
      /*
      console.log(e);
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
    } else if (e.length / 2 == 3 && e.indexOf("H") == 0 && e.indexOf("O") > 0) {
      console.log("oxoacid");
    }
  }
}

//declarar classes
