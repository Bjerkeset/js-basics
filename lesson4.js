// LESSON TASK 4 https://github.com/NoroffFEU/lesson-task-pf-module2-lesson4

//LESSON 1
function logString(string) {
    console.log(string)
}
logString("What the func is this nonesence..")

//LESSON 2
function firstAndLastName(firstName, lastName) {
    const wholeName = firstName + lastName;
    const wholeNameWithSpace = (firstName + " " + lastName)
    return wholeNameWithSpace
}
console.log(firstAndLastName("bendik" ,"bjerkeset"))

//LESSON 3
function addNums (firstNum, secondNum){
    if (typeof firstNum === "number" && typeof secondNum === "number")  {
        const sum = firstNum * secondNum 
        return sum;
    } else {
        console.warn("Please supply number values")
    }
}
// const result = addNums(3, 5); 
// console.log(result);




//LESSON 4
function addNumbers(arg1, arg2, arg3) {
    var num1 = parseFloat(arg1);
    var num2 = parseFloat(arg2);
    var num3 = parseFloat(arg3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return "Invalid argument types";
    } else {
        return num1 + num2 + num3;
    }
}

var result = addNumbers("5", 20, "20");
console.log(result)
document.querySelector("p").innerHTML = result;


//LESSON 5
let buttonClick = document.querySelector("button")
let h1Change = document.querySelector("h1")

buttonClick.addEventListener("click", () => {
    h1Change.innerHTML += " hello"
})






//LESSON 6
let changeTitle = document.getElementById("btn-change-title")
changeTitle.addEventListener("click", () => {
    document.title = "new titel"
})


//LESSON 7
let changeBackground = document.getElementById("red")
changeBackground.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
})