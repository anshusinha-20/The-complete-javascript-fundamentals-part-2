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
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉 GOOD LUCK 😀

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