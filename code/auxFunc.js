function stringIsNumber(s) {
	return s.match(/[0-9]*/g)[0] === s;
}

function integrifyNumbers(arr) {
	var result = [];
	arr.forEach((element) => {
		if (stringIsNumber(element)) result.push(parseInt(element));
		else result.push(element);
	});
	return result;
}

function Toast(text){
    document.querySelector(".toast-body").innerHTML = text
    $(".toast").toast("show")
}

function findName(arr) {//arr resolve del oxid ex
	var valence = arr[0];
	var element = arr[1];
    var t = terms[0];

    if (arr[2] == "salHidracid")
        return {
            tradicional: `Àcid ${element.name.lexeme+"hídric"}`
        }

    else if (arr[2] == "hidrur")
        return {
            stock: `Hidrur de ${element.name.fullName} (${roman(valence)})`
        }
    

    else if (arr[2] == "hidrurNP")
        return {
            tradicional: hidrurNPnamer(element.name.symbol)
        }

    else if (arr[2] == "oxoanio")
        t = terms[1];

    else if (arr[2] == "oxoaniocomp")
        return "aqui ha de retornar sulfat de coure";
    
    else if (arr[2] == "combbin")
        return {
            tradicional: combbinNamer(arr)
        }
    
	totalValences = element.valences.filter(function (x) { return x > -1; }); //array totes les valències de cada element central sense el negatiu
    return {
        stock: (element.name.fullName+" ("+roman(valence).toString()+")"),
        tradicional: traditionalNamer(valence, element, t, totalValences).replace("sulfós", "sulfurós").replace("sulfic", "sulfúric"),
        sistematica: sistematicNamer(valence, element, totalValences, arr[2]).replace("oxid","òxid").replace("hidroxid, hidròxid").replace("monh","monoh")
    };
}


function traditionalNamer(val, element, termsToUse, totalValences){

    if (totalValences.length == 1)
        return element.name.lexeme+termsToUse[1];

    else if (totalValences.length == 2){
        switch (val){
            case totalValences[0]:
                return element.name.lexeme+termsToUse[0];
            case totalValences[1]:
                return element.name.lexeme+termsToUse[1];
        }
    }
    else if (totalValences.length == 3){
        switch (val){
            case totalValences[0]:
                return "hipo"+element.name.lexeme+termsToUse[0];
            case totalValences[1]:
                return element.name.lexeme+termsToUse[0];
            case totalValences[2]:
                    return element.name.lexeme+termsToUse[1];
        }
    }
    else if (totalValences.length == 4){
        switch (val){
            case totalValences[0]:
                return "hipo"+element.name.lexeme+termsToUse[0];
            case totalValences[1]:
                return element.name.lexeme+termsToUse[0];
            case totalValences[2]:
                return element.name.lexeme+termsToUse[1];
            case totalValences[3]:
                return "per"+element.name.lexeme+termsToUse[1];
        }
    }
    
}


function sistematicNamer(val, element, totalValences, type){
    if (type == "oxoacid"){
        var itoat=0;
        if (totalValences.indexOf(val)+1 >= (totalValences.length+1)/2)
            itoat=1;
        return (prefix[totalValences.indexOf(val)+1]+"oxo"+element.name.lexeme+terms[1][itoat]+" (" +roman(val)+ ") " + " d'hidrògen");
    }
    else if (type=="hidroxid")
        return (prefix[val-1] + `${type} de ` + element.name.fullName)
    // per a òxids
    else if(val%2 == 0){
        return (prefix[(val/2)-1] + `${type} de ` + element.name.fullName)
    }
    else{
        return (prefix[(val)-1] + `${type} de ` + prefix[1] + element.name.fullName)
    }

}



function roman(num) {
    if (typeof num !== 'number') 
    return false; 
    
    var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman_num = "",
    i = 3;
    while (i--)
    roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}


function hidrurNPnamer(s){
    switch (s){
        case "B":
            return "Borà";
        case "C":
            return "Metà";
        case "Si":
            return "Silà";
        case "N":
            return "Amoníac";
        case "P":
            return "Fosfina";
        case "As":
            return "Arsina";
        case "Sb":
            return "Estibina";
        case "Bi":
            return "Bismutina";
    }
}

function combbinNamer(arr){
    console.log("arr", arr)
    result ="";
    var element = arr[1];

    var element2 = arr[4];

    result += element.name.lexeme+"ur de ";
    result+= element2.name.fullName+` (${roman(arr[3])})`;
    return result;

    
}