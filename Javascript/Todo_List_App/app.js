// new - add a do to
// list - list all todos
// delete - remove specific todo
// quit - quit app

let userInput = prompt('welcome to Task Master! What would you like to do today?')

const taskList = ['break shit', 'fuck bitches'];

while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'list') {
        console.log('**********');
        for (let i = 0; i < taskList.length; i++) {
            console.log(`${i}: ${taskList[i]}`)
        }
        console.log('**********');
    } else if (userInput === 'new') {
        const newTask = prompt('what is your new task');
        taskList.push(newTask);
        console.log(`${newTask} has been added to your list`)

    } else if (userInput === 'delete') {
        const index = parseInt(prompt('please note which index youd like to delete'));
        if (!Number.isNaN(index)) {
            const deleted = taskList.splice(index, 1);
            console.log(`Okay, I deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    userInput = prompt('welcome to Task Master! What would you like to do today?')
}
console.log('okay you quit the app');




// if (userInput === 'new') {
//     userInput = prompt('what task would you like to add to the list?')
//     console.log(`${ userInput } has been added to your list`)
//     taskList.push(userInput)
//     userInput = prompt('what else today?')

// }


// else if (userInput === 'list') {
//     for (let task = 0; task < taskList.length; task++) {
//         console.log(`${ task }: ${ taskList[task]} `)
//     }

// }
// }

