function blender(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} and ${oranges}.`
    return juice;
}

appleJuice = blender(5, 0);
console.log(appleJuice);

const num = Number("52");

//AGE CALCULATOR (declaration)
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(1995)

//Expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1995)

//Arrow Function 
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1995);


console.log(age1, age2, age3);


//Years until retirement
yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age; 
    return `${firstName} retires in ${retirement} years.`;
}
const retirement = yearsUntilRetirement(1995, "bob");
const retirement2 = yearsUntilRetirement(1990, "alice");
console.log(retirement, retirement2);


//Functions calling other functions

function cutFruitPiecec(fruit){
    return fruit * 4;
}

function blender(apples, oranges){
    const applePiecec = cutFruitPiecec(apples);
    const orangePiecec = cutFruitPiecec(oranges);
    const juice = `Juice with ${applePiecec} piecec of apples and ${orangePiecec} piecec of orange.`
    return juice;
}   

console.log (blender(2, 3));




