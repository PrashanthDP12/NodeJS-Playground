import yargs from "yargs";

// Define command-line options
const argv = yargs(process.argv.slice(2))
  .option("title", {
    alias: "t",
    describe: "Title of the item",
    type: "string",
  })
  .option("description", {
    alias: "d",
    describe: "Description of the item",
    type: "string",
  })
  .help().argv;

// Access the parsed options
const title = argv.title;
const description = argv.description;

console.log(`Title: ${title}`);
console.log(`Description: ${description}`);
