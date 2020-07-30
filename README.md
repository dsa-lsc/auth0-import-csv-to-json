# A simple conversion script for transforming responses to our signup sheet to an Auth0 JSON object.

## Usage

Install all the requirements. You'll need node + yarn (you can also use npm)

```
git clone <repo>
yarn install
```

## CSV To JSON

Then run the script with the csv file you want to use.

```
node csv-to-json.js --file <name of file>
```

This will output a JSON string. You can send this JSON string to a file by piping it:

```
node csv-to-json.js --file data/users.csv > output.json
```

Then you can use the Auth0 import extension to import users.

## CSV To Emails

This is useful for if you have a CSV and just want the e-mails to, for example, send everyone an email.

```
node csv-to-emails.js --file data/users.csv
```
