"use strict";

// 33. Functions

// function logger() {
//     console.log("I'm inside a function!");
// }

// logger();

// function fruitProcessor(numApples, numOranges) {
//     const juice = `Juice with ${numApples} apples and ${numOranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3, 4));

// Assignment

// 1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity) {
//     return (`${country} has ${population / 1000000} million people and it's capital city is ${capitalCity}.`)
// }

// const data1 = describeCountry("India", 1407600000, "New Delhi");
// console.log(data1);

// const data2 = describeCountry("China", 1412400000, "Beijing");
// console.log(data2);

// const data3 = describeCountry("Unites States", 331900000, "Washington DC");
// console.log(data3);

/////

// 34. Functions declaratoins and expressions

// const currentAge = function (birthYear, currentYear) {
//     console.log(`Your current age is ${currentYear - birthYear} years.`);
// }

// const birthYear = Number(prompt("Enter your year of birth: "));
// const date = new Date();
// const currentYear = date.getFullYear();
// currentAge(birthYear, currentYear);

// Assignemnt

// 1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
// 3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
// 4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// const percentageOfWorld1 = function (country, population, worldPopulation) {
//     console.log(`${country} has ${population / 1000000} million people, so it's about ${(population / worldPopulation) * 100}% of the world's population.`);
// }

// const country = prompt("Enter your country: ");
// const population = Number(prompt("Enter your country's population (all in exact figures): "));
// const worldPopulation = 7900000000;
// percentageOfWorld1(country, population, worldPopulation);

/////

// 35. Arrow functions

// const currentAge = (currentYear, birthYear) => console.log(`Your current age is ${currentYear - birthYear} years.`);

// const birthYear = Number(prompt("Enter your birth year: "));
// const date = new Date();
// const currentYear = date.getFullYear();

// currentAge(currentYear, birthYear);

// Assignment

// 1. Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
//    'percentageOfWorld3'

// const percentageOfWorld3 = (country, population, worldPopulation) => {
//     console.log(`${country} has ${population / 1000000} million people, so it's about ${(population / worldPopulation) * 100}% of the world's population.`);
// }

// const country = prompt("Enter your country: ");
// const population = Number(prompt("Enter your country's population (exact in figures): "));
// const worldPopulation = 7900000000;

// percentageOfWorld3(country, population, worldPopulation);

/////

// 36. Functions calling other functions

// const cutFruit = (fruit, numFruit) => {
//     const fruitPieces = Number(prompt(`Enter the number of pieces for the ${fruit} to be cut into: `)) * numFruit;

//     return (fruitPieces);
// }

// const fruitJuiceProcessor = (fruit1, fruit2) => {
//     const numFruit1 = Number(prompt(`Enter the number of ${fruit1}: `));
//     const numFruit2 = Number(prompt(`Enter the number of ${fruit2}: `));
//     const fruit1Pieces = cutFruit(fruit1, numFruit1);
//     const fruit2Pieces = cutFruit(fruit2, numFruit2);

//     console.log(`Your juice is ready with ${fruit1Pieces} pieces of ${fruit1} and ${fruit2Pieces} pieces of ${fruit2}.`);
// }

// const fruit1 = prompt("Enter fruit 1: ");
// const fruit2 = prompt("Enter fruit 2: ");

// fruitJuiceProcessor(fruit1, fruit2);

// Assignment

// 1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
// 3. Call'describePopulation'withdatafor3countriesofyourchoice

// const percentageOfWorld1 = (population, worldPopulation) => {
//     return (population / worldPopulation) * 100;
// }

// const describePopulation = (country, population) => {
//     const worldPopulation = 7900000000;
//     const percentage = percentageOfWorld1(population, worldPopulation);
//     console.log(`${country} has ${population / 1000000} million people, which is about ${percentage}% of the world.`);
// }

// const country = prompt("Enter your country: ");
// const population = Number(prompt("Enter the population of your country (exact in figures): "));

// describePopulation(country, population);

// Coding challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// ?? Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 ?? Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// ?? To calculate average of 3 values, add them all together and divide by 3
// ?? To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores ???? GOOD LUCK ????

// const checkWinner = (avgD, avgK) => {
//     if (avgD >= 2 * avgK) {
//         console.log(`Dolhpins win (${avgD} vs ${avgK})!`);
//     }
//     else if (avgK >= 2 * avgD) {
//         console.log(`Koalas win (${avgK} vs ${avgD})!`);
//     }
//     else {
//         console.log(`No team wins :(`)
//     }
// }

// const calcAverage = (d1, d2, d3, k1, k2, k3) => {
//     const avgDolphins = (d1 + d2 + d3) / 3;
//     const avgKoalas = (k1 + k2 + k3) / 3;
//     checkWinner(avgDolphins, avgKoalas);
// }

// const dolphinScore1 = Number(prompt("Enter the first score of dolhphins: "));
// const dolphinScore2 = Number(prompt("Enter the second score of dolhphins: "));
// const dolphinScore3 = Number(prompt("Enter the third score of dolhphins: "));

// const koalaScore1 = Number(prompt("Enter the first score of koalas: "));
// const koalaScore2 = Number(prompt("Enter the second score of koalas: "));
// const koalaScore3 = Number(prompt("Enter the third score of koalas: "));

// calcAverage(dolphinScore1, dolphinScore2, dolphinScore3, koalaScore1, koalaScore2, koalaScore3);

/////

// 39. Introduction to arrays

// const friends = ["Avishek", "Ishank", "Aadarsh"];
// console.log(typeof (friends));

// const numbers = new Array(123, 124, 125);
// console.log(typeof (numbers));

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "Aashish";
// console.log(friends);

// const arr1 = ["Hello", 123 - 13, friends];
// console.log(arr1);

// Assignment

// 1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
// 3. Createanarraycalled'percentages'containingthepercentagesofthe
// world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

// const populations = [1000000, 40000000, 3000000, 32423234];
// const worldPopulation = 7900000000;
// const percentages = [`${(populations[0] / worldPopulation) * 100}%`, `${(populations[1] / worldPopulation) * 100}%`, `${(populations[2] / worldPopulation) * 100}%`, `${(populations[3] / worldPopulation) * 100}%`];

// console.log(percentages[0]);
// console.log(percentages[1]);
// console.log(percentages[2]);
// console.log(percentages[3]);

/////

// 40. Basic array operations (methods)

// const friends = ["Tim", "Kay", "Alex"];
// const newLength = friends.push("Jimmie"); // push method returns the new length of the updated array after pushing and element at the end of the array
// console.log(friends);
// console.log(newLength);

// friends.unshift("Heroku"); // adds an element to the start of the array and also returns the new length of the array
// console.log(friends);

// const deletedElement = friends.pop(); // removes an element from the end of the array and also returns the removed element
// console.log(friends);
// console.log(deletedElement);

// const removedElement = friends.shift(); // removes an element from the start of the array and also returns the removed element
// console.log(friends);
// console.log(removedElement);

// console.log(friends.indexOf("Tim")); // returns the index number of an element of the array

// console.log(friends.includes("Tim")); // return true if the element exists in the array else returns false

// Assignment

// 1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// 2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
// 4. Ifthe'neighbours'arraydoesnotincludethecountry???Germany???,logtothe console: 'Probably not a central European country :D'
// 5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// const neighbours = ["China", "Pakistan", "Sri Lanka", "Bangladesh", "Maldives", "Myanmar", "Bhutan", "Nepal"];
// neighbours.push("Utopia");
// neighbours.pop();

// if (!neighbours.includes("Germany")) {
//     console.log("Probably not a central european country :D");
// }

// const countryIndex = neighbours.indexOf("China");
// neighbours[countryIndex] = "Republic of China";
// console.log(neighbours);

// Coding challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) ????
// GOOD LUCK ????

// const calcTip = (bill) => {
//     bills.push(bill);
//     let tip = 0;
//     let totalBill = 0;
//     if (50 < bill < 300) {
//         tip = 0.15 * bill;
//     }
//     else {
//         tip = 0.2 * bill;
//     }

//     tips.push(tip);
//     totalBills.push(bill + tip);
// }

// let bills = [];
// let tips = [];
// let totalBills = [];

// const bill1 = Number(prompt("Enter bill 1: "));
// const bill2 = Number(prompt("Enter bill 2: "));
// const bill3 = Number(prompt("Enter bill 3: "));

// calcTip(bill1);
// calcTip(bill2);
// calcTip(bill3);

// console.log(bills);
// console.log(tips);
// console.log(totalBills);

/////

// 42. Introduction to objects

// const date = new Date();
// const currentYear = date.getFullYear();

// const myProfile = {
//     firstName: "Anshu",
//     lastName: "Sinha",
//     age: currentYear - 2003,
//     job: "Student"
// };

// console.log(myProfile);

// Assignment

// 1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     language: ["Hindi", "English"],
//     population: `${1407600000 / 1000000} million`,
//     neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Maldives", "Sri Lanka", "Bangladesh", "Myanmar"]
// }

// console.log(myCountry);

/////

// 43. Dot vs bracket notation

// const date = new Date();
// const currentYear = date.getFullYear();

// const myProfile = {
//     firstName: "Anshu",
//     lastName: "Sinha",
//     age: currentYear - 2003,
//     job: "Student"
// };

// console.log(myProfile.firstName);
// console.log(myProfile['firstName']);

// myProfile.firstName = 'Sahil';
// console.log(myProfile.firstName);
// console.log(myProfile);

// myProfile.firstName = 'Anshu';
// console.log(myProfile.firstName);

// myProfile.twitter = 'https://twitter.com/anshusinha_20';
// console.log(myProfile);

// console.log(`${myProfile.firstName} is a ${myProfile.job} and his age is ${myProfile.age} years.`);

// Assignment

// 1. Usingtheobjectfromthepreviousassignment,logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// 2. Increasethecountry'spopulationbytwomillionusingdotnotation,andthen decrease it by two million using brackets notation.

// const myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     population: 1407600000 / 1000000,
//     language: ["Hindi", "English"],
//     neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka", "Maldives"]
// }

// console.log(`${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neigbouring countries and a capital city called ${myCountry.capital}.`);
// myCountry.population += 2;
// console.log(myCountry);
// myCountry['population'] -= 2;
// console.log(myCountry);

/////

// 44. Object methods

// const date = new Date();
// const currentYear = date.getFullYear();

// const myProfile = {
//     firstName: "Anshu",
//     lastName: "Sinha",
//     job: "Student",
//     birthyear: 2003,

//     calcAge: function () {
//         this.age = currentYear - this.birthyear; // this keyword is not used in arrow functions
//     }
// };

// myProfile.calcAge();
// console.log(myProfile);

// console.log(`${myProfile.firstName} is ${myProfile.age} years old.`);

// Assignment

// 1. Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 2. Callthe'describe'method
// 3. Addamethodcalled'checkIsland'tothe'myCountry'object.This
// method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// const myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     population: 1407600000 / 1000000,
//     language: ["Hindi", "English"],
//     neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka", "Maldives"],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language[0]} as well as ${this.language[1]} speaking people, ${this.neighbours.length} neigbouring countries and a capital city called ${this.capital}.`);
//     },

//     checkIsIsland: function () {
//         this.neighbours.length == 0 ? this.isIsland = true : this.isIsland = false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsIsland();

// console.log(myCountry);

// Coding challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK ????

// const person1 = {
//     firstName: "Mark",
//     lastName: "Miller",
//     weight: 78,
//     height: 1.69,

//     calcBmi: function () {
//         this.BMI = this.weight / (this.height ** 2);
//     }
// };

// const person2 = {
//     firstName: "John",
//     lastName: "Smith",
//     weight: 92,
//     height: 1.95,

//     calcBmi: function () {
//         this.BMI = this.weight / (this.height ** 2);
//     }
// };

// person1.calcBmi();
// person2.calcBmi();

// if (person1.BMI > person2.BMI) {
//     console.log(`${person1.firstName}'s BMI (${Math.round(person1.BMI)}) is higher than ${person2.firstName}'s (${Math.round(person2.BMI)})!`);
// }
// else {
//     console.log(`${person2.firstName}'s BMI (${Math.round(person2.BMI)}) is higher than ${person1.firstName}'s (${Math.round(person1.BMI)})!`);
// }

/////

// 46. Iteration: the for loop

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Assignment

// 1. Thereareelectionsinyourcountry!Inasmalltown,thereareonly50voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter no.${i} is currently voting.`);
// }

/////

// 47. Looping arrays, breaking and continuing

// const myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     population: 1407600000 / 1000000,
//     language: ["Hindi", "English"],
//     neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka", "Maldives"]
// }

// for (let i = 0; i < myCountry.neighbours.length; i++) {
//     console.log(myCountry.neighbours[i]);
// }

// Assignment

// 1. Let'sbringbackthe'populations'arrayfromapreviousassignment
// 2. Useaforlooptocomputeanarraycalled'percentages2'containingthe
// percentages of the world population for the 4 population values.Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirmthat'percentages2'containsexactlythesamevaluesasthe
// 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

// const myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     population: 1407600000 / 1000000,
//     language: ["Hindi", "English"],
//     neighbours: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka", "Maldives"],
//     neighboursPopulationPercentage: {},

//     calcPopulationPercentage: function (country, poulation) {
//         this.neighboursPopulationPercentage[country] = `${(poulation / worldPopulation) * 100}%`;
//     }
// }

// const populations = [1453810875, 232071607, 30502612, 782455, 168968066, 54179306, 21832143, 523787];
// const worldPopulation = 8046949318;

// for (let i = 0; i < myCountry.neighbours.length; i++) {
//     myCountry.calcPopulationPercentage(myCountry.neighbours[i], populations[i]);
// }

// console.log(myCountry);

/////

// 48. Looping backwards and loops in loops

// Assignment

// 1. Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Logonlytheneighbouringcountriestotheconsole,onebyone,nottheentire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. Youwillneedaloopinsidealoopforthis.Thisisactuallyabittricky,sodon't worry if it's too difficult for you! But you can still try to figure this out anyway ????

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

/////

// 49. The while loop

// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// let dice = Math.trunc((Math.random() * 6) + 1);

// while (dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc((Math.random() * 6) + 1);
// }

// Coding challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ???calcTip ???in the loop and use the push method to add values to the
// tips and totals arrays ???? Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK ????

// const calcTip = (bill) => {
//     let tip = 0;
//     let total = 0;
//     if (50 < bill && bill < 300) {
//         tip = 0.15 * bill;
//         total = bill + tip;
//     }
//     else {
//         tip = 0.2 * bill;
//         total = tip + bill;
//     }
//     tips.push(tip);
//     totalBills.push(total);
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totalBills = []

// for (let i = 0; i < bills.length; i++) {
//     calcTip(bills[i]);
// }

// let sum = 0;
// for (let i = 0; i < totalBills.length; i++) {
//     sum += totalBills[i];
// }

// const avg = sum / totalBills.length;

// console.log(tips);
// console.log(totalBills);
// console.log(avg);