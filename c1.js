// Import yargs
import yargs from "yargs";
// Also import hideBin helper
import { hideBin } from "yargs/helpers";

// Initialize yargs with hideBin
yargs(hideBin(process.argv))
  // Define command
  .command({
    command: "hello",
    describe: "Greets the user",
    handler: () => {
      console.log("Hello!");
    },
  })

  // Require command
  .demandCommand()

  // Parse arguments
  .parse();
