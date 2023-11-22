
//declaring all the variables 
let display=document.querySelector('[data-display]')
//that is 365.24 because we are including the leap year amount of days
let daysInYear=365.25
let btnMulti=document.querySelector('[data-calc]')

//function that will be performing the calculation
function convert(){
    let input= document.querySelector('[data-input]').value
    //backticks are used to access the variables and to display the data more neatly
    let answer=eval(`${input} * ${daysInYear}`)
    answer=answer.toFixed(2);
    display.value=Math.round(answer)
}
//calling a click function. so that when the button is clicked that it accesses the convert function
btnMulti.addEventListener('click',convert)


//makes that so that the input is only readable
document.querySelector("[data-display]").readOnly = true;