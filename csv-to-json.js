const commander = require("commander");
const csv = require("csv-parser");
const fs = require("fs");

commander
  .version("1.0.0", "-v, --version")
  .usage("[OPTIONS]...")
  .option("-f, --file <file>", "CSV file to process")
  .parse(process.argv);

// These csv columns are not currently stored. Maybe we will in the future?
const involvementString =
  "If you would like to, please share about your involvement in DSA and your interest in DSA-LSC:";
const affirmation =
  "Do you affirm that you qualify for membership based on the above?";
const isFollowUpOkay =
  "Can we follow up with you to talk about how you can help with the work of the caucus?";
const isCurrentOrFormerMember =
  "Are you a current or former member of the Democratic Socialists of America, or a member of a local LSC section?";

// CSV columns we actually want to save.
const pronouns = "Pronouns";
const local = "DSA / LSC Local";
const age = "18 or older?";
const email = "Email Address";
const name = "Name";
const discord = "What is your Discord username?";

const results = [];

fs.createReadStream(commander.file)
  .pipe(csv())
  .on("data", (data) =>
    results.push({
      email: data[email],
      email_verified: false,
      name: data[name],
      user_metadata: {
        pronouns: data[pronouns],
        local: data[local],
        isEighteenOrOlder: data[age],
        discord: data[discord],
      },
    })
  )
  .on("end", () => {
    console.log(JSON.stringify(results, null, 2));
  });
