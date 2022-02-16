// Password must be 6+ characters

// const password = prompt("please enter a password")

// if (password.length >= 6) {
//     // this if statement only runs if the password is long enough
//     if (password.indexOf(' ') === -1) {
//         console.log('valid password')
//     } else {
//         console.log('password cant have spaces')
//     }
// } else {
//     console.log("too short")
// }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('password valid')
// } else {
//     console.log('invalid')
// }

// 0-5 free
// 5-10 10
// 10-65 20
// 65+ free

// const age = 78;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("free")
// } else if (age >= 5 && age < 10) {
//     console.log("10")
// } else if (age >= 10 && age < 65) {
//     console.log("20")
// } else {
//     console.log("invalid age")
// }

// let firstName = prompt('enter your first name');

// if (!firstName) {
//     firstName = prompt('try again')
// }

const day = 6;

switch (day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('weds');
        break;
    case 4:
        console.log('thurs');
        break;
    case 5:
        console.log('fri');
        break;
    case 6:
    case 7:
        console.log('weekend');
        break;
    default:
        console.log('idfk')
}

// if (day === 1) {
//     console.log('monday')
// }
// else if (day === 2) {
//     console.log('tuesday')
// }
// else if (day === 3) {
//     console.log('wednesday')
// }
// else if (day === 4) {
//     console.log('thursday')
// }
// else if (day === 5) {
//     console.log('friday')
// }
// else {
//     console.log('idk man')
// }