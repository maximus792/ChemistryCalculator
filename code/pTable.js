var pTable = document.getElementById("periodic-table");
for (let i=1; i<=7; i++){
    document.getElementById("periodic-table-group-0").innerHTML += `<div class='periodic-table-line'>${i}</div>`;
}

for (let i=1; i<=18; i++){
    var result = "";
    result += `<div class='periodic-table-group-${i}'><div class='periodic-table-group'>${i}</div>`
    if ([2, 13, 14, 15, 16, 17].includes(i))
        result+="<div class='periodic-table-blank-element'></div>"
    if ([3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(i))
        for (let i2 = 0; i2<3; i2++)
            result+="<div class='periodic-table-blank-element'></div>"
    json.elements.concat(gnJson.elements).forEach(element => {
        if (element.group == i){
            result+=`<div class='periodic-table-element'><h2>${element.name.symbol}</h2><p>${element.name.fullName.charAt(0).toUpperCase() + element.name.fullName.slice(1)}</p><p class="val">`;
            element.valences.forEach(v => {
                result+=`${v}, `;
            });
            result = result.substring(0, result.length-2)
            result+=`</p></div>`;  
        }  
    });
    result += `</div>`;
    pTable.innerHTML += result;
}
/* document.querySelectorAll(".val")[47].addEventListener("click",() => {
    document.querySelector("body").innerHTML='<h1 style="z-inex:99; position: fixed; top:50%; left:50%;  transform: translate(-50%, -50%);color: #FFFFFF; text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;font-size: 5rem;">INFINTE PUYOL</h1><img class="javi" style="height: 100%; width: 100%;" src="./images/javi.jpeg" alt="">'
    for(let i = 0; i<100;i++){
        document.querySelector("body").innerHTML+='<img class="javi" style="height: 100%; width: 100%;" src="./images/javi.jpeg" alt="">'
    }
    console.log("IE2");
})*/

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert("Si us plau utilitzeu la pàgina en horitzontal")
}