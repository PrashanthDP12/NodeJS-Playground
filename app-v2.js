import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
// const notes = require('./notes.js')
import { addNote, removeNote, listNotes, readNote } from "./notes.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
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
    },
    handler: function (argv) {
      addNote(argv.title, argv.body);
    },
  })
  .demandCommand()
  .parse();

// Create remove command
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      removeNote(argv.title);
    },
  })
  .demandCommand()
  .parse();

// Create list command
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "List your notes",
    handler() {
      listNotes();
    },
  })
  .demandCommand()
  .parse();

// Create read command
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      readNote(argv.title);
    },
  })
  .demandCommand()
  .parse();
