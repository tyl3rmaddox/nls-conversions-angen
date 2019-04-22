var x = document.getElementById("i_narr_id");

var optionVal = new Array();

for (i = 0; i < x.children.length; i++) {
    optionVal.push(x.children[i].text);
};

// // Finding unneeded spaces in narrator last names
// for (i of optionVal) {
//     if(i.includes(' , ')) {
//         // console.log(i);
//     }
// };

// // Name comparisons to track down doubles
// let firstNames = new Array();
// let lastNames = new Array();
// for (i = 0; i < optionVal.length + 1; i++) {
//     let namesSplit = optionVal[i].split(', ');
//     firstNames.push(namesSplit[1]);
//     lastNames.push(namesSplit[0]);
    
//     // All double last names
//     if (lastNames[i] === lastNames[i-1]) {
//         // console.log(lastNames[i])
//     }

//     // All character-for-character doubles
//     if(lastNames[i] == lastNames[i-1] && firstNames[i] == firstNames[i-1]) {
//         console.log(lastNames[i] + ", " + firstNames[i]);
//     }
// }


// When you redo this, refactor these into an array and do work over them with a for loop
var hindNarrs = "";
var narr1 = document.getElementById("narr1");
var narr2 = document.getElementById("narr2");
var narr3 = document.getElementById("narr3");
var narr4 = document.getElementById("narr4");
var narr5 = document.getElementById("narr5");
var narr6 = document.getElementById("narr6");
// var narrName = []
// var narrFirsts = [];
// var narrLasts = [];

function checkNarr1(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr1").value;
        var narr1Span = document.getElementById("narr1name");
        var narrName = [];
        narrName.push(input);
        var nameSplit = narrName.toString().split(', ');
        narr1Span.innerHTML = nameSplit[1] + ' ' + nameSplit[0];

        

        narr1.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr1").setAttribute("class", "narrExists")
            narr1.append(input);
        } else {
            document.getElementById("checkNarr1").setAttribute("class", "narrMissing")
            var missingNarr = '<u>' + input + '</u>'
            narr1.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}

function checkNarr2(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr2").value;
        var narr2Span = document.getElementById("narr2name");
        var narrName = [];
        narrName.push(input);
        var nameSplit = narrName.toString().split(', ');
        narr2Span.innerHTML = ' and ' + nameSplit[1] + ' ' + nameSplit[0];

        narr2.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr2").setAttribute("class", "narrExists")
            narr2.append('; ' + input);
        } else {
            document.getElementById("checkNarr2").setAttribute("class", "narrMissing")
            var missingNarr = '; ' + '<u>' + input + '</u>'
            narr2.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}

function checkNarr3(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr3").value;

        var narr2Span = document.getElementById("narr2name");
        var narr2SpanString = document.getElementById("narr2name").textContent;
        if (narr2SpanString.indexOf(' and ') > -1) {
            var newNarr2 = narr2SpanString.replace(' and ', ', ');
            narr2Span.innerHTML = newNarr2;
        }

        var narr3Span = document.getElementById("narr3name");
        var narrName = [];
        narrName.push(input);
        var nameSplit = narrName.toString().split(', ');
        narr3Span.innerHTML = ' and ' + nameSplit[1] + ' ' + nameSplit[0];

        narr3.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr3").setAttribute("class", "narrExists")
            narr3.append('; ' + input);
        } else {
            document.getElementById("checkNarr3").setAttribute("class", "narrMissing")
            var missingNarr = '; ' + '<u>' + input + '</u>'
            narr3.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}

function checkNarr4(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr4").value

        var narr3Span = document.getElementById("narr3name");
        var narr3SpanString = document.getElementById("narr3name").textContent;
        if (narr3SpanString.indexOf(' and ') > -1) {
            var newNarr3 = narr3SpanString.replace(' and ', ', ');
            narr3Span.innerHTML = newNarr3;
        }

        var narr4Span = document.getElementById("narr4name");
        var narrName = [];
        narrName.push(input);
        var nameSplit = narrName.toString().split(', ');
        narr4Span.innerHTML = ' and ' + nameSplit[1] + ' ' + nameSplit[0]; 
        
        narr4.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr4").setAttribute("class", "narrExists")
            narr4.append('; ' + input);
        } else {
            document.getElementById("checkNarr4").setAttribute("class", "narrMissing")
            var missingNarr = '; ' + '<u>' + input + '</u>'
            narr4.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}

function checkNarr5(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr5").value
        narr5.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr5").setAttribute("class", "narrExists")
            narr5.append('; ' + input);
        } else {
            document.getElementById("checkNarr5").setAttribute("class", "narrMissing")
            var missingNarr = '; ' + '<u>' + input + '</u>'
            narr5.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}

function checkNarr6(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById("checkNarr6").value
        narr6.innerHTML = "";
        if (optionVal.indexOf(input) > -1) {
            document.getElementById("checkNarr6").setAttribute("class", "narrExists")
            narr6.append('; ' + input);
        } else {
            document.getElementById("checkNarr6").setAttribute("class", "narrMissing")
            var missingNarr = '; ' + '<u>' + input + '</u>'
            narr6.insertAdjacentHTML('beforeend', missingNarr);
        }
    }
}
