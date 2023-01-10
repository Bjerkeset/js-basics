
// let bob = "human" + " " + "man";
// console.log(bob);
// let alice = "human" + " " + "woman";
// console.log(alice);
// var humans = bob + alice;
// console.log(humans);
// console.log(alice + bob);


// var titleSelector = "get element by query selector";
// var titleId = "get element by id";
// document.querySelector("h1").innerHTML = titleSelector;
// document.getElementById("h1").innerHTML = titleId;



//LOOPS
//ONE TO SEVEN
for (let oneToSeven = 1; oneToSeven <= 7; oneToSeven++) {
    console.log(oneToSeven);
  }

//10 TO 1
for(let tenToOne = 10; tenToOne >= 1; tenToOne--) {
    console.log(tenToOne)
}

// 10 TO 20
for(let tenToTwenty = 10; tenToTwenty <=20; tenToTwenty++){
    
    if (tenToTwenty % 2 === 1) {
        console.log(tenToTwenty)
    } else {}
}

//Function (arrow)
fastCars = (car1, car2, car3) => {
    console.log(` The ${car1} is faster then  the ${car2}. a ${car3} is faster then both`)
}
fastCars("bmw", "merc", "tesla")
// fastCars("ferrari", "fiat");
// fastCars("volvo", "telsa");


function ageCalc(born, year){
    const sum = born - year
}


function coldDay(todaysTemp) {
    if (todaysTemp < 5) {
        console.log("today is a cold day")
    } else {
        console.log("today its not to cold")
    }
}
coldDay(2);




