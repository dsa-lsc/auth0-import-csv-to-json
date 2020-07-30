const commander = require("commander");
const csv = require("csv-parser");
const fs = require("fs");

commander
  .version("1.0.0", "-v, --version")
  .usage("[OPTIONS]...")
  .option("-f, --file <file>", "CSV file to process")
  .parse(process.argv);

const email = "Email Address";

const results = [];

fs.createReadStream(commander.file)
  .pipe(csv())
  .on("data", (data) => results.push(data[email]))
  .on("end", () => {
    console.log(results.join(", "));
  });
