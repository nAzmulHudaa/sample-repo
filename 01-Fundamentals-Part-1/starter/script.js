// let js = 'amazing';
// if(js='amazing') alert('js is fun');

// let name = "Nazmul Huda Rimon";
// console.log(name);
// console.log(48+542+23);
/*
console.log('javascript');
console.log(23);

let firstName = 'Jonas'; //declaring or initalizing a variable
console.log(firstName);

firstName = 'Nazmul';
console.log(firstName);

const birthYear = 1998;

console.log(birthYear)

const myName = 'MD Nazmul Huda Rimon'
console.log(typeof myName);
console.log(typeof birthYear);   */

// const currentYear = 2023;

// const ageNazmul = currentYear- 2001;
// const ageJonas = currentYear - 1998;
// console.log(ageNazmul,ageJonas);


// const firstName = "Nazmul Huda";
// const lastName = "Rimon";

// console.log(firstName +' '+ lastName);

// let x = 10+5; // x = 15
// x+=10; // x = x + 10;
// x-=10 // x = x - 10;
// x++; // x = x + 1;
// x--; // x = x - 1;
// console.log(x);

// console.log(25-10-5);

// let x, y ;
// x= y= 25-10-5;
// console.log(x,y);


// coding challenge 1

/*
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI,johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); */


// Done successfully


// 5 falsy values : 0, '', undefined, null, NaN;

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;
// if(money){
//     console.log("Don't spend it all");
// }
// else{
//     console.log('You should get a job');
// }

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1996;
// const year = 2023;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " +job;

// const jonas = `I am ${firstName}, a ${year-birthYear} years old ${job}`;

// console.log(jonas);

// console.log(`Let's write 
// a multiline
// string`);

// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log("You're old enough to get a driving license😍😍");
// }
// else{
//     console.log("You're not old enough😒");
// }


/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;


const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);




console.log(markBMI,johnBMI)

if(markBMI>= johnBMI){
    // console.log("Mark's BMI is higher than John's BMI");
    console.log(`Mark's BMI ${markBMI.toFixed(1)} is higher than John's BMI ${johnBMI.toFixed(1)}`)
}
else{
    // console.log("John's BMI is higher than Mark's BMI");
    console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's BMI ${markBMI.toFixed(1)}`);
} */

// const inputYear = "1991"
// console.log(Number(inputYear)+10);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// there are 5 falsy values in js : 0, '', undefined, NaN, null;

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));


// const hasDriversLicense = true;
// const hasGoodVision = false;  

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log("Sarah is a able to drive");
// }
// else{
//     console.log("Someone else should drive!!!!");
// }

/*
const teamDolphin = 97 + 102 + 101;
const teamKoalas = 109 + 95 + 123;

const avgDolphin = teamDolphin/3;
const avgKoalas = teamKoalas/3;

const minScore = 100;
if(avgDolphin > avgKoalas && avgDolphin >= minScore){
    console.log('Team Dolphin Wins');
}
else if(avgKoalas > avgDolphin && avgKoalas >= minScore){
    console.log('Team Koalas Wins');
}
else if(avgDolphin >= minScore && avgKoalas >= minScore && avgDolphin === avgKoalas){
    console.log('match drawen & no teams wins the trophy!!!');
}
else{
    console.log('No one wins the trophy!');
}





const age = 16;
age >= 18 ? console.log("You're allowed in the Bar😍😍") :
console.log('Not allowed to drink at the bar 😢😢😢')

*/



// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? (bill*( 15/100)) :
// (bill *(20/100));

// // const subTotalBill = bill + tip;

// console.log(`The bill is ${bill}, the tip is ${tip} and the total bill is ${bill+tip}`);
//this statement has to be the very first statement in the javascript
//by default we always should use const

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log("You can drive!!!!");

// function logger(){
//     console.log('My name is Rimon');
// }

//calling or invoking / running the function
// logger();
/*
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice =  `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleAndOrangeJuice = fruitProcessor(3,4);
console.log(appleAndOrangeJuice);



function fruitJuice(fruitOne, fruitTwo){
    console.log(fruitOne,fruitTwo)
    const juicy = `Let's make a juice with ${fruitOne} & ${fruitTwo}!!!!!!!!`;
    return juicy;
}

const makingJuice = fruitJuice('Apple','Oranges');
console.log(makingJuice);


function calcAge1(birthYear){
    return 2023 - birthYear ;
}

const myAge = calcAge1(2001);
console.log(myAge)


// let's declare an anonymous function

const calcAge2 = function(birthYear){
    return 2023-birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);

*/



/*
const calcAge2 = function(birthYear){
    return 2023-birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);

// let's write a arrow function
const calcAge3 = birthYear => 2023 - birthYear;

const age3 = calcAge3(1998);
console.log(age3);


const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Nazmul'));

*/


// function cutFruitPiece(fruit){
//     return fruit * 4;
// }


// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPiece(apples);
//     const orangePieces = cutFruitPiece(oranges);
//     const juice =  `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

/*
const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg = calcAverage(85,54,41);
const koalasAvg = calcAverage(23,34,27);


// console.log(dolphinsAvg,koalasAvg);

function checkWinner(avgDolphin,avgKoalas){
    if(avgDolphin >= avgKoalas * 2){
        console.log("Team Dolphin Wins!!!!!");
    }
    else if(avgKoalas >= avgKoalas * 2){
        console.log("Team koalas wins!!!!")
    }
    else{
        console.log("No one wins😢😢😢");
    }
}


checkWinner(dolphinsAvg,koalasAvg);

*/

// const friend1 = "Michael";
// const friend2 = "Peter";
// const friend3 = "Steven";

// const friends = ['Micheal','Steven', 'Peter'];
// console.log(friends[1]);
// console.log(friends.length);

// const years = new Array(1991,1984,2008,2020);

// console.log(years);
// console.log(years.length);


// console.log(friends[friends.length-1]);
// console.log(years[years.length-1]);
// friends[2] = 'Nazmul';
// friends[3] = 'Nazmuillla';
// console.log(friends);


// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }


// console.log(calcAge(years));




const friends = ['Micheal','Steven', 'Peter'];
friends.push('Nazmul'); //adds item in the array
friends.unshift('John')// adds item in the first of the array
const shifted = friends.shift() // remove first item
const popped = friends.pop() // remove last item

console.log(friends);
console.log(popped,shifted)

console.log(friends.includes('Steven'));








































































