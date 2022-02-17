// FOR LOOPS
// ******************
// ******************

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// const animals = ["tiger", "dog", "bear", "lion"]

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }
// ******************
// ******************
// ******************



// NESTED FOR LOOPS
// ******************
// ******************

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`____________  j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Jeff', 'Namita'],
//     ['Eric', 'Juan', 'Antonio', 'Kevin'],
//     ['John', 'Shelby', 'Ian', 'Becca', 'Michaela', 'RJ']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log("     " + row[j]);
//     }
// }

// ******************
// ******************
// ******************

// WHILE LOOPS
// ******************
// ******************

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const secret = "BabyHippo";

// let guess = prompt("enter the secret code")

// while (guess !== secret) {
//     guess = prompt("enter the secret code")
// }

// console.log("congrats you got it right")

// let input = prompt("say something");

// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me") {
//         break;
//     }
// }
// alert("okay fine")

// GUESSING GAME, NESTED WHILE AND FOR LOOPS
// ******************
// ******************

// let max = parseInt(prompt("enter your maximum number"));
// while (!max) {
//     max = parseInt(prompt("enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * max) + 1;
// // console.log(targetNum);


// let guess = parseInt(prompt("enter your guess"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high. Guess again.");
//     } else {
//         guess = prompt("Too low. Guess again");
//     }

// }

// console.log(`You got it! It took you ${attempts} guesses`)

// ******************
// ******************
// ******************

// FOR...OF LOOPS
// ******************
// ******************

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

// for (let i = 0; i < subreddits.length; i++)
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

const seatingChart = [
    ['Kristen', 'Jeff', 'Namita'],
    ['Eric', 'Juan', 'Antonio', 'Kevin'],
    ['John', 'Shelby', 'Ian', 'Becca', 'Michaela', 'RJ']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log("     " + row[j]);
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

// for (let char of 'hello world') {
//     console.log(char)
// }

const testScores = {
    keenan: 95,
    alex: 75,
    jade: 76,
    kim: 87,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 63,
    ella: 97,
    diedre: 71,
    adam: 95,
    john: 72

}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

let total = 0;
let scores = Object.values(testScores)
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)
