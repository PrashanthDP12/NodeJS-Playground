import yargs from "yargs";

// Define your command with ESM syntax
yargs.command(
  "add",
  "Add a new note",
  (yargs) => {
    yargs.options({
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    });
  },
  (argv) => {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  }
);

// Parse the command-line arguments
yargs.parse();
