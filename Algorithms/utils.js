function addNumbers(num1, num2) {
    return num1 + num2
}

//console.log(addNumbers(1, 2));
//console.log(addNumbers(7, 3));
//console.log(addNumbers(11, 253));
//console.log(addNumbers(332, 345));

function minutesToSeconds(min){
    return (min + ' minutes is ' + min * 60 + ' seconds');
 }
 
 //console.log(minutesToSeconds(40))
 //console.log(minutesToSeconds(180))

 function ageToSeconds(age){
     return (age + ' years is ' + age * 365 * 86400 + ' seconds');
 }
 
//console.log(ageToSeconds(28))
//console.log(ageToSeconds(38))

function getFirstItem(items){
    return items[0]
}

items = ['banana', 'pikle', 'guitar']

console.log(getFirstItem())
