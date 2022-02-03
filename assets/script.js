
// First, tell us your name
let yourName = "Alejandro Martinez the Improviser" // HINT: Replace this with your own name!

//Generic cookie count changing function
function t(target)
{
    var element = target.target //avoids confusion caused by myself
    var cookieIndex = parseInt(element.parentNode.getAttribute('class').split("")[0]);
    if(element.getAttribute('class') == "add") cookieArr[cookieIndex] += 1
    else cookieArr[cookieIndex] -= 1
    if(cookieArr[cookieIndex] < 0) cookieArr[cookieIndex] = 0
    //Update given cookie
    cookieCounts[cookieIndex].querySelectorAll("td")[1].textContent = cookieArr[cookieIndex]
    console.log(cookieCounts[cookieIndex].childNodes)
    //Get total cookies
    var totalCt = 0
    for (let index = 0; index < cookieArr.length; index++) totalCt += cookieArr[index]
    //Update total count
    tot.textContent = totalCt
    console.log("Cookie count changed to " + cookieArr.toString())
}
//Total count element as variable
const tot = document.querySelector("#qty-total")
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
//how about no?
let cookieArr = [0,0,0]

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`

const buttons = document.querySelectorAll(".button-container")
//Of course im using the function we didn't go over
//Add a bunch of things to every button in those with class 'button-container'
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    //again
    var list = element.querySelectorAll("button")
    //Append add/minus depending on the button
    list[0].addEventListener('click',t)
    list[0].setAttribute('class',"minus")
    list[1].addEventListener('click',t)
    list[1].setAttribute('class',"add")
    //Append cookie's index in array as a class
    var C = element.getAttribute('class')
    element.setAttribute('class',index.toString() + " " + C)
}
//Round of Pain #2
const cookieCounts = document.querySelector(".summary").querySelector("tbody").querySelectorAll("tr")
//Wow only 54 lines?