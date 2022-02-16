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

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`____________  j is: ${j}`)
//     }
// }

const seatingChart = [
    ['Kristen', 'Jeff', 'Namita'],
    ['Eric', 'Juan', 'Antonio', 'Kevin'],
    ['John', 'Shelby', 'Ian', 'Becca', 'Michaela', 'RJ']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log("     " + row[j]);
    }
}