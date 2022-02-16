console.log("Hello JS!")

let rand = Math.random()

if (rand < 0.5) {
    console.log("your number is less than 0.5")

} else {
    console.log("your number is greater or equal than 0.5")

}
console.log(rand)


// beware - we are not actually checking to see if the day the user enters is valid

const dayOfWeek = prompt('enter a day').toLowerCase()

if (dayOfWeek === 'monday') {
    console.log("fuck mondays")
} else if (dayOfWeek === 'saturday') {
    console.log("i love saturdays")
} else if (dayOfWeek === 'friday') {
    console.log("work week crushed!")
}
// this is redundant
// else if (dayOfWeek === 'Tuesday') {
//     console.log("meh")
// } else if (dayOfWeek === 'Wednesday') {
//     console.log("meh")
// } else if (dayOfWeek === 'Thursday') {
//     console.log("meh")
// }
else {
    console.log("meh")
}


// 0-5 - free
// 5-10 child $10
// 10-65 adult $20
// 65+ senior $10

const age = 70;

if (age < 5) {
    console.log("baby - free")

} else if (age < 10) {
    console.log("child - $10")

} else if (age < 65) {
    console.log("adult - $20")

} else {
    console.log("senior - $10")
}
