const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function procedOxid(el) {
  symbol = el[1].name.symbol;
  val = el[0];
  text = `
    Per tal de trobar l'element final, primer necessitem formar l'Òxid:
    <br><br>
    <div class="proced-box">
    ${symbol}<sup>${val}</sup> + O<sup>2</sup> &rarr; ${symbol}<sub>2</sub>O<sub>${
    val == 1 ? "" : val
  }</sub>

    ${
      val % 2 != 0
        ? "<br><b>" +
          capitalize(findName(el).sistematica) +
          "<br> Òxid de " +
          findName(el).stock +
          "<br>Òxid " +
          findName(el).tradicional +
          "</b>"
        : ""
    }
    </div>
    `;
  if (val % 2 == 0) {
    text += `
        <br><br>
        Com que l'òxid es pot simplificar, dividim tot entre 2:
        <br><br>
        <div class="proced-box">
        <span>${symbol}<sub></sub>O<sub>${
      val / 2 == 1 ? "" : val / 2
    }</sub> </span><br>
        <b>${capitalize(findName(el).sistematica)} <br>Òxid de ${
      findName(el).stock
    } <br>Òxid ${findName(el).tradicional}</b></div>
        `;
    console.log(findName(el));
  }

  if(el[1].name.symbol == "H"){
    text+= `
    <br><br>
    El nom més comú d'aquest compost:
    <br><br>
    <div class="proced-box">
    <span>H<sub>2</sub>O</span>
    <br>
    <b>Aigua</b>
    </div>
    `

  }
  procedEstructure("Formem l'Òxid", text);
}

function procedOxoacid(el) {
  symbol = el[1].name.symbol;
  if (el[0] % 2 == 0) simp = true;
  else simp = false;

  val = el[0] % 2 == 0 ? el[0] / 2 : el[0];
  text = `
    
    A partir de l'òxid formem l'oxoàcid, afegint una aigua:
    <br><br>
    <div class="proced-box">
    ${symbol}<sub>${simp ? "" : "2"}</sub>O<sub>${
    val == 1 ? "" : val
  }</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>${symbol}<sub>${
    simp ? "" : 2
  }</sub>O<sub>${val + 1}</sub>
    ${
      simp
        ? "<br> <b>" +
          capitalize(findName(el).sistematica) +
          "<br> Àcid " +
          findName(el).tradicional +
          "</b>"
        : ""
    }
    </div>
        `;
  if (!simp)
    text += `
    <br><br>
    Simplifiquem dividint tot entre 2:<br><br>
    <div class="proced-box">
    <span>H${symbol}</sub>O<sub>${
      (val + 1) / 2 == 1 ? "" : (val + 1) / 2
    }</sub></span>

    ${
      !simp
        ? "<br> <b>" +
          capitalize(findName(el).sistematica) +
          "<br> Àcid " +
          findName(el).tradicional +
          "</b>"
        : ""
    }
    </div>
    `;

  procedEstructure("Formem l'Oxoàcid", text);
}

function procedOxoanió(el) {
  console.log("ELEMEN OXOANIO");
  console.log(el);
  symbol = el[1].name.symbol;
  if (el[0] % 2 == 0) simp = true;
  else simp = false;

  val = el[0] % 2 == 0 ? el[0] / 2 : el[0];
  text = `
    
    A partir de l'oxoàcid formem l'oxoanió, treient els dos hidrogens:
    <br><br>
    
     `;
  if (!simp)
    text += `
    <div class="proced-box">
    H${symbol}O<sub>${
      (val + 1) / 2 == 1 ? "" : (val + 1) / 2
    }</sub> &rarr; (${symbol}O<sub>${
      (val + 1) / 2 == 1 ? "" : (val + 1) / 2
    }</sub>)<sup>-1</sup>

    ${!simp ? "<br><b> Anió " + findName(el).tradicional + "</b>" : ""}

    </div>
    `;
  else
    text += `<div class="proced-box">
    H<sub>2</sub>${symbol}<sub>${simp ? "" : 2}</sub>O<sub>${
      val + 1 == 1 ? "" : val + 1
    }</sub> &rarr; (${symbol}<sub>${simp ? "" : 2}</sub>O<sub>${
      val + 1 == 1 ? "" : val + 1
    }</sub>)<sup>-2</sup>
    ${simp ? "<br><b>Anió " + findName(el).tradicional + "</b>" : ""}
    
    </div>
    `;

  procedEstructure("Formem l'Oxoanió", text);
}

function procedOxoanióComp(el, valprin) {
  valcomp = el[0];
  symbol = el[1].name.symbol;
  if (valprin % 2 == 0) simp = true;
  else simp = false;

  val = valprin % 2 == 0 ? valprin / 2 : valprin;
  console.log("ELEMENT");
  console.log(el, "MARCEL GAY");
  text = `
    
    A partir de l'oxoanió formem el compost afegint l'element:
    <br><br>
    
     `;
  //codi Marcel
  var d;
  if (el[4].valences.length > 1)
    d =" ("+roman(el[3])+")";
  else
    d = "";

  if (!simp)
    text += `
    <div class="proced-box">
    ${el[4].name.symbol}<sup>${el[3]}</sup>
    (${symbol}O<sub>${
      (val + 1) / 2 == 1 ? "" : (val + 1) / 2
    }</sub>)<sup>-1</sup> &rarr; ${el[4].name.symbol}(${symbol}O<sub>${
      (val + 1) / 2 == 1 ? "" : (val + 1) / 2
    }</sub>)<sub>${el[3]}</sub>
    

    ${
      !simp
        ? "<br><b>" +
          capitalize(findName([valprin, el[1], "oxoanio"]).tradicional) +
          " de " +
          capitalize(el[4].name.fullName) +d+
          "</b>"
        : ""
    }

    </div>
    `;
  else
    text += `<div class="proced-box">  
    ${el[4].name.symbol}<sup>${el[3]}</sup>
    (${symbol}<sub>${simp ? "" : 2}</sub>O<sub>${
      val + 1
    }</sub>)<sup>-2</sup> &rarr;${
      el[4].name.symbol
    }<sub>2</sub>(${symbol}O<sub>${simp ? val + 1 : (val + 1) / 2}</sub>)<sub>${
      el[3]
    }</sub>
    </div>
    <br> ${el[3] % 2 == 0 ? "Simplifiquem:" : ""} <br>
    <div class="proced-box">  
    <span>${el[4].name.symbol}<sub>${
      el[3] % 2 == 0 ? "" : 2
    }</sub>(${symbol}O<sub>${simp ? val + 1 : (val + 1) / 2}</sub>)<sub>${
      el[3] % 2 == 0
        ? el[3] / 2 == 1
          ? ""
          : el[3] / 2
        : el[3] == 1
        ? ""
        : el[3]
    }</sub></span>
    ${
      simp
        ? "<br><b>" +
          capitalize(findName([valprin, el[1], "oxoanio"]).tradicional) +
          " de " +
          capitalize(el[4].name.fullName) + d +
          "</b>"
        : ""
    }
    
    </div>
    `;

  procedEstructure("Formem el Compost", text);
  //Mg\left(ClO\right)2
  //Mg\left(SO_4\right)
}

function procedHidrur(el) {
  symbol = el[1].name.symbol;
  val = el[0];
  text = `
    Formem l'hidrur:
    <br><br>
    <div class="proced-box">
    H<sup>-1</sup> + ${symbol}<sup>${val}</sup> &rarr; ${symbol}H<sub>${
    val == -1 || val == 1 ? "" : Math.abs(val)
  }</sub><br>
    ${capitalize(findName(el).stock)}
    </div>
    `;
  procedEstructure("Formem l'Hidrur", text);
}

function procedEstructure(title, text) {
  $(".procediment-div").append(`<div id=${title}class='simplify-div'>
<h3 style="margin: 2rem 0;">${title}</h3>
<p>${text}</p>


</div>`);
}
function procedCombbin(el) {
  symbol = el[1].name.symbol;
  val = el[0];
  text1 = `
    Formem l'hidrur:
    <br><br>
    <div class="proced-box">
    H<sup>1</sup> + ${symbol}<sup>-${val}</sup> &rarr; H<sub>${
    val == -1 || val == 1 ? "" : Math.abs(val)
  }</sub>${symbol}<br>
    <b>${(el[4].name.symbol != "H")?"":capitalize(findName(el).tradicional)}
    </div>
    `;
  procedEstructure("Formem l'Hidrur", text1);
if(el[4].name.symbol != "H"){
  text2 = `
    Formem l'Anió:
    <br><br>
    <div class="proced-box">
    H<sub>${
      val == -1 || val == 1 ? "" : Math.abs(val)
    }</sub>${symbol} &rarr; ${symbol}<sup>-${val}</sup></div>
    <br><br>
    Formem el compost binari:
    <br><br>
    <div class="proced-box">
    ${symbol}<sup>-${val}</sup> + ${el[4].name.symbol}<sup>${
    el[3]
  }</sup> &rarr; ${el[4].name.symbol}<sub>${
    val == 1 ? "" : val
  }</sub>${symbol}<sub>${el[3] == 1 ? "" : el[3]}</sub><br>
    <br>
    ${
      !(val % 2 == 0 && el[3] % 2 == 0)
        ? "<b>" + capitalize(findName(el).tradicional) + "</b>"
        : ""
    }
    </div>
    `;

  if (val % 2 == 0 && el[3] % 2 == 0) {
    val = val / 2;
    val2 = el[3] / 2;
    text2 += `<br><br>
Simplifiquem:
<div class="proced-box">
${el[4].name.symbol}<sub>${val == 1 ? "" : val}</sub>${symbol}<sub>${
      val2 == 1 ? "" : val2
    }</sub><br>
<b>${capitalize(findName(el).tradicional)}</b>
</div>
`;
  }


  procedEstructure("Formem el Compost Binari", text2);}
}


function procedPeroxid(el) {
    console.log("peroxid");
    symbol = el[1].name.symbol;
    val = el[0];
    text = `
    En els peròxids, hem de tenir en compte que l'oxigen actúa diferent que en un òxid normal:
    <div class="proced-box">
    ${symbol}<sup>${val}</sup> + O<sub>2</sub><sup>-2</sup> &rarr; ${symbol}<sub>2</sub>(O<sub>2</sub>)<sub>${val}</sub>
    <br>
    <b>${(val%2==0)?"":("Peròxid de " + findName(el).stock)}</b>
    
    </div>
    
    `;
    if(val%2==0)
    text+=`
    <br>Simplifiquem:<br>
    <div class="proced-box">
    ${symbol}<sub>2</sub>(O<sub>2</sub>)<sub>${val}</sub> &rarr; ${symbol}(O<sub>2</sub>)<sub>${(val/2==1 || val==1)?"":val/2}</sub>
    <br>
    <b>${(val%2!=0)?"":("Peròxid de " + findName(el).stock)}</b>
    </div>`
    
    if(el[1].name.symbol == "H"){
      text+= `
      <br><br>
      El nom més comú d'aquest compost:
      <br><br>
      <div class="proced-box">
      <span>H<sub>2</sub>O<sub>2</sub></span>
      <br>
      <b>Aigua oxigenada</b>
      </div>
      `
  
    }

    procedEstructure("Formem el Peròxid", text);
  }

function procedSalHidracid(el){
  symbol = el[1].name.symbol;
  val = el[0];
  text = `Formem l'hidrur:
  <br><br>
  <div class="proced-box">
  H<sup>-1</sup> + ${symbol}<sup>${val}</sup> &rarr; H<sub>${val==1||val==-1?"":val}</sub>${symbol}<sub>${
  val == -1 || val == 1 ? "" : Math.abs(val)
}</sub><sub>(aq)</sub><br>
<b>${capitalize(findName(el).tradicional)}</b>
  </div>
    `;

  procedEstructure("Sals d'Hidràcid", text);
}

function procedHidroxid(el){
  symbol = el[1].name.symbol;
  val = el[0];
  text = `
  Formem l'Hidròxid afegint (OH)<sup>-1</sup>:
    <div class="proced-box">
        ${symbol}<sup>${val}</sup> + (OH)<sup>-1</sup> &rarr; ${symbol}(OH)<sub>${val==1?"":val}</sub>
        <br>
        <b>Hidròxid de ${capitalize(findName(el).stock)}<br>${capitalize(findName(el).sistematica)}</b>
    </div>
    `;

  procedEstructure("Formem l'Hidròxid", text);
}

function procedNP(el) {
  symbol = el[1].name.symbol;
  val = el[0];
  text = `
    <div class="proced-box">
        ${symbol}<sup>${val}</sup> + H<sup>-1</sup> &rarr; ${symbol}H<sub>${val}</sub>
        <br>
        <b>${capitalize(findName(el).tradicional)}</b>
    </div>
    `;

  procedEstructure("Elements amb nom propi", text);
}

function procedEstructure(title, text) {
  $(".procediment-div").append(`<div id=${title}class='simplify-div'>
<h3 style="margin: 2rem 0;">${title}</h3>
<p>${text}</p>


</div>`);
}

function writeDocument(e) {
  //Borrar Procediment
  $(".procediment-div").empty();

  if (e.proced[0][1].valences.includes(e.proced[0][0])) {
    e.proced.forEach((el) => {
      if (el[2] == "oxid") procedOxid(el);
      else if (el[2] == "oxoacid") procedOxoacid(el);
      else if (el[2] == "oxoanio") procedOxoanió(el);
      else if (el[2] == "oxoaniocomp") procedOxoanióComp(el, e.proced[0][0]);
      else if (el[2] == "hidrur") procedHidrur(el);
      else if (el[2] == "combbin") procedCombbin(el);
      else if (el[2] == "hidrurNP") procedNP(el);
      else if (el[2] == "peroxid") procedPeroxid(el);
      else if(el[2]=="salHidracid") procedSalHidracid(el)
      else if(el[2] == "hidroxid") procedHidroxid(el)
    });
    $(".procediment-div").slideDown();
    $(".procediment").show();
  }
  else {
    $(".procediment-div").hide();
    $(".procediment").hide();
    Toast("La valencia no és correcta!")
  }
}
