# A simple conversion script for transforming responses to our signup sheet to an Auth0 JSON object.

## Usage

Install all the requirements. You'll need node + yarn (you can also use npm)

```
git clone <repo>
yarn install
```

Then run the script with the csv file you want to use.

```
node index.js --file <name of file>
```

This will output a JSON string. You can send this JSON string to a file by piping it:

```
node index.js --file data/users.csv > output.json
```

Then you can use the Auth0 import extension to import users.
