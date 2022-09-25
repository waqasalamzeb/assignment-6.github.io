//Console quiz game//
var user = prompt("Enter your name")
var score = 0
var answer = 0
var totalque = 10


var question1 = "A for what?"
var ans1 = prompt("Enter your ans1")
var question2 = "B for what?"
var ans2 = prompt("Enter your ans2")
var question3 = "C for what?"
var ans3 = prompt("Enter your ans3")
var question4 = "D for what?"
var ans4 = prompt("Enter your ans4")
var question5 = "E for what?"
var ans5 = prompt("Enter your ans5")
var question6 = "F for what?"
var ans6 = prompt("Enter your ans6")
var question7 = "G for what?"
var ans7 = prompt("Enter your ans7")
var question8 = "H for what?"
var ans8 = prompt("Enter your ans8")
var question9 = "I for what?"
var ans9 = prompt("Enter your ans9")
var question10 = "J for what?"
var ans10 = prompt("Enter your ans10")


if (ans1 == "Apple") {
    ++score
    ++answer

}



if (ans2 == "Ball") {
    ++score
    ++answer
}


if (ans3 == "Cat") {
    ++score
    ++answer
}


if (ans4 == "Dog") {
    ++score
    ++answer
}




if (ans5 == "Egg") {
    ++score
    ++answer
}




if (ans6 == "Fish") {
    ++score
    ++answer
}


if (ans7 == "Golden") {
    ++score
    ++answer
}



if (ans8 == "Hallowen") {
    ++score
    ++answer
}



if (ans9 == "Ice") {
    ++score
    ++answer
}



if (ans10 == "Jacket") {
    ++score
    ++answer
}

console.log("username is " + user + " correct answers are " + answer + " score is " + score)

var per=(answer/totalque*100)
console.log("percentage of "+ user+ " is "+ per+"%")