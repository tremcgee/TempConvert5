function uname(){
    var name = prompt("What is your name?")
    return name
}
function tempt(){
    var temp4 = prompt("Are you going from f or c")
    return temp4
}
function tempe(){
    var temp5 = prompt("What is the temperature")
    return temp5
}
function ftoc(a){
    var temp = ((a-32)*5)/9
    return temp
}
function ctof(a){
    var temp = ((a*9)/5)+32
    return temp
}
var name2 = uname()
var temp1 = tempt()
if (temp1 == "f"){
    var temp2 = tempe()
    var temp3 = ftoc(temp2)    
    alert(`${name2}, ${temp2}F is ${temp3}C`)
}else if (temp1 == "c"){
    var temp2 = tempe()
    var temp6 = ctof(temp2)
    alert(`${name2}, ${temp2}C is ${temp6}F`)
}