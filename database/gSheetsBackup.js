const path = require("path");
const mysql = require("mysql");
const fs = require("fs");
const readline = require("readline");
const { google } = require("../node_modules/googleapis");
const bodyParser = require("body-parser");
const authorize = require("./google-auth");

var db = mysql.createConnection({
  host: "35.243.138.96",
  database: "mgmt",
  //port: '3306',
  user: "root",
  password: "March1995"
  //socketPath: '/cloudsql/stinsonbeachpm:us-east1:stinsonbeachpm'
});

db.connect(function(err) {
  if (err) throw err;
});

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), main);
});

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function main(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  sheets.spreadsheets.get(
    {
      spreadsheetId: "1pBsxeCdj_eNPb3LjOgIZKX-qIse7V4qGMy0Yqed_O3g"
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      rows = res.data.sheets;
      if (rows.length) {
        console.log("Inserting Data\n");
       
        for(let i = 0; i < rows.length; i++){
            const sheet = rows[i]
            setTimeout(() => {
                console.log(sheet.properties.title);
                insertData(sheet.properties.title, sheets);
                console.log("Done")}, i*5555)
        }
        // rows.(sheet => {
        //   // Check if any data in sheet to insert
        //   if (sheet.properties.gridProperties.rowCount > 1) {
        //     console.log(sheet.properties.title);
        //     insertData(sheet.properties.title, sheets);
        //     console.log("Done")
        //     return
        //   }
        //});
      } else {
        console.log("No data found.");
      }
    }
  );
}

function insertData(title, sheets) {
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1pBsxeCdj_eNPb3LjOgIZKX-qIse7V4qGMy0Yqed_O3g",
      range: title
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const rows = res.data.values;
      //console.log(rows)
      const header = formatHeader(rows[0]);
     
      for (let i = 1; i < rows.length; i++) {
        const values = formatValues(rows[i]);
        db.query(
          "INSERT INTO " + title +" (" + header + ") VALUES (" + values +")",
          err => {
            if (err) throw err;
          }
        );
      }
    }
  );
}

function formatHeader(row) {
  let str = "";
  for(let i = 0; i < row.length; i++){
      if(i === row.length - 1) {
        str += '\n' + row[i]
      } else {
        str += '\n' + row[i] + ',';
      }
  }
  return str;
}

function formatValues(row) {
    let str = "";
    for(let i = 0; i < row.length; i++){
        const val = db.escape(row[i])
        if(i === row.length - 1) {
          str += '\n' + val
        } else {
          str += '\n' + val + ',';
        }
    }
    return str;
  }

