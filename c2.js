// import yargs from "yargs";
// import { hideBin } from "yargs/helpers";

// yargs(hideBin(process.argv))
//   .command(
//     "curl <url>",
//     "fetch the contents of the URL",
//     () => {},
//     (argv) => {
//       console.log("hello");
//       console.info(argv.url);
//     }
//   )
//   .demandCommand(1)
//   .parse();

// //   options object approach
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command({
    command: "curl",
    describe: "Fetch the contents of a URL",

    builder: {
      url: {
        describe: "The URL to fetch",
        demandOption: true,
        type: "string",
      },
    },

    handler(argv) {
      console.info(argv.url);
    },
  })
  .demandCommand()
  .parse();
