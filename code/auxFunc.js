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

function findName(arr) {//arr resolve del oxid ex
	var valence = arr[0];
	var element = arr[1];

	totalValences = element.valences.filter(function (x) { return x > -1; });
    console.log(totalValences);
    return {
        stock: (element.name.fullName+" ("+roman(valence).toString()+")"),
        tradicional: traditionalNamer(valence, element, terms[0], totalValences),
        sistematica: sistematicNamer(valence, element, terms[0], totalValences)
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

function sistematicNamer(val, element){
    //("Òxid de " + element.name.fullName+" ("+valence.toString()+")")
    
    if(val%2 == 0){
        return (prefix[(val/2)-1] + "òxid de " + element.name.fullName)
    }
    else{
        return (prefix[(val)-1] + "òxid de " + prefix[1] + element.name.fullName)
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