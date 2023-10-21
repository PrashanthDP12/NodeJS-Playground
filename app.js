// const getNotes = require("./notes.js");
// const validator = require("validator");
import chalk from "chalk";
import yargs from "yargs";

// const message = getNotes();

// console.log(message);

// console.log(validator.isEmail("12@example.com"));
// console.log(validator.isURL("http://example.com"));
// console.log(chalk.blue.inverse("Hello world!"));
// console.log(chalk.red("Hello", "World!", "Foo", "bar", "biz", "baz"));
console.log(process.argv);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

