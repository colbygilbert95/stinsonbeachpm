require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
const cors = require("cors");
const { google } = require("googleapis");
const googleCredentials = require("./credentials.json");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);


const client_id = process.env.XERO_CLIENT_ID;
const client_secret = process.env.XERO_CLIENT_SECRET;
const redirectUrl = process.env.XERO_REDIRECT_URI;
const scopes =
  "openid profile email accounting.settings accounting.transactions offline_access";

const authenticationData = (req, res) => {
  return {
    decodedIdToken: req.session.decodedIdToken,
    decodedAccessToken: req.session.decodedAccessToken,
    tokenSet: req.session.tokenSet,
    allTenants: req.session.allTenants,
    activeTenant: req.session.activeTenant,
  };
};

const db = mysql.createConnection({
  host: process.env.SERVER_SQL_HOST,
  database: process.env.SERVER_SQL_DATABASE,
  user: process.env.SERVER_SQL_USER,
  password: process.env.SERVER_SQL_PASSWORD,
  // Must be uncommented for production 
  socketPath: process.env.SERVER_SQL_SOCKET_PATH, 
});

db.connect(function (err) {
  if (err) throw err;
});

const sessionStore = new MySQLStore({}, db);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: true }));
app.use(
  session({
    secret: "something crazy",
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);


app.get("/connect", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  const { XeroClient } = require("xero-node");
  const xero = new XeroClient({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: [redirectUrl],
    scopes: scopes.split(" "),
  });
  xero.initialize();
  try {
    const consentUrl = await xero.buildConsentUrl();
    res.redirect(consentUrl);
  } catch (err) {
    console.log(err);
    res.send("Sorry, something went wrong in connect");
  }
});

app.get("/callback", async (req, res) => {
  const jwtDecode = require("jwt-decode");
  const { XeroClient, BankTransaction } = require("xero-node");
  const xero = new XeroClient({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: [redirectUrl],
    scopes: scopes.split(" "),
  });
  await xero.initialize();
  try {
    const tokenSet = await xero.apiCallback(req.url);
    console.log(tokenSet)
    await xero.updateTenants();

    const decodedIdToken = jwtDecode(tokenSet.id_token);
    const decodedAccessToken = jwtDecode(tokenSet.access_token);

    req.session.decodedIdToken = decodedIdToken;
    req.session.decodedAccessToken = decodedAccessToken;
    req.session.tokenSet = tokenSet;
    req.session.allTenants = xero.tenants;
    // XeroClient is sorting tenants behind the scenes so that most recent / active connection is at index 0
    req.session.activeTenant = xero.tenants[0];

    const authData = authenticationData(req, res);
    //console.log(authData)
    res.send("Connected to Xero!");
  } catch (err) {
    console.log(err);
    res.send("Sorry, something went wrong in callback");
  }
});

app.get("/uploadMgmtInvoices", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  const { XeroClient, Invoices } = require("xero-node");
  const { TokenSet } = require('openid-client');
  const xero = new XeroClient({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: [redirectUrl],
    scopes: scopes.split(" "),
  });
  
  await xero.initialize();
  await xero.setTokenSet(new TokenSet(req.session.tokenSet));

  const tokenSet = await xero.readTokenSet();
  
  if (!tokenSet.expired()) {
    try {
      const rawXeroData = await getXeroInvoiceData();
      const invoices = parseXeroData(rawXeroData);
      
      const newInvoices = new Invoices();
      newInvoices.invoices = invoices;
      
      const response = await xero.accountingApi.createInvoices(
        "15a0a407-e2d1-48e3-9255-f8d61cef5c93",
        newInvoices,
        false, 4
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      res.send(
        "Sorry, something went wrong in uploadInvoices, try reconnecting by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
      );
    }
  } else {
    res.send(
      "Access to xero has expired, reconnect by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
    );
  }
});

// Uploads invoices for reservations booked with units directly operated by Stinson Beach PM
app.get("/uploadCompanyInvoices", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  const { XeroClient, Invoices } = require("xero-node");
  const { TokenSet } = require('openid-client');
  const xero = new XeroClient({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: [redirectUrl],
    scopes: scopes.split(" "),
  });
  
  await xero.initialize();
  await xero.setTokenSet(new TokenSet(req.session.tokenSet));

  const tokenSet = await xero.readTokenSet();
  
  if (!tokenSet.expired()) {
    try {
      const rawXeroData = await getXeroInvoiceData();
      const invoices = parseXeroData(rawXeroData);
      
      const newInvoices = new Invoices();
      newInvoices.invoices = invoices;
      
      const response = await xero.accountingApi.createInvoices(
        "ac018c2b-d7ac-4fa6-b3c9-54559fdac216",
        newInvoices,
        false, 4
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      res.send(err)
      // res.send(
      //   "Sorry, something went wrong in uploadInvoices, try reconnecting by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
      // );
    }
  } else {
    res.send(
      "Access to xero has expired, reconnect by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
    );
  }
});

app.get("/getActiveUnits", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  db.query(
    `  SELECT L.Id, L.Name, L.WeekdayRate, L.Title, L.NumReviews, L.AvgReviews, I.URL, L.Latitude, L.Longitude
                FROM Listing L
                JOIN Property P
                JOIN ClientAccount C 
                JOIN ListingImage I
                WHERE L.Property = P.Id 
                AND P.ClientAccount = C.Id 
                AND C.Active = 1
                AND L.Id = I.Listing
                AND I.ImgOrder = 1;`,
    (err, result) => {
      console.log(result);
      if (err) throw console.log("getActiveUnits: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnit", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getUnit");
  db.query(
    `SELECT * , C.Name AS PolicyName, C.Description AS PolicyDescription, L.Latitude As Latitude, L.Longitude As Longitude 
    FROM CancellationPolicy C
    JOIN Property P
    JOIN Listing L
    WHERE L.Name = ${db.escape(req.query.unitName)}
    AND L.Property = P.Id 
    AND C.Id = L.CancellationPolicy`,
    (err, result) => {
      if (err) throw console.log("getUnit: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitReviews", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getUnitReviews");
  db.query(
    `SELECT R.FirstName, R.PublicFeedback,  R.AddedOn
    FROM Listing L
    JOIN Guest G
    JOIN Review R
    WHERE L.Id = R.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}`,
    (err, result) => {
      if (err) throw console.log("getUnit: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitHeaderImgs", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getUnitHeaderImgs");
  db.query(
    `SELECT I.URL
    FROM Listing L
    JOIN ListingImage I
    WHERE L.Id = I.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    ORDER BY I.ImgOrder ASC
    LIMIT 5`,
    (err, result) => {
      if (err) throw console.log("getUnitHeaderImgs: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitAllImgs", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getAllUnitImgs");
  db.query(
    `SELECT I.ImgOrder, I.Description, I.URL, R.Name
    FROM Listing L
    JOIN RoomType R
    JOIN ListingImage I
    WHERE L.Id = I.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    AND I.RoomType = R.Id
    ORDER BY Name, ImgOrder DESC`,
    (err, result) => {
      if (err) throw console.log("getAllUnitImgs: " + err);
      res.send(result);
    }
  );
});

app.get("/getRoomHeaderImgs", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getRoomHeaderImgs");
  db.query(
    `SELECT I.URL, R.Name
    FROM ListingImage I
    JOIN RoomType R
    JOIN Listing L
    JOIN (SELECT  MIN(I.ImgOrder) AS Ord, I.RoomType
      FROM Listing L
      JOIN RoomType R
      JOIN ListingImage I
      WHERE L.Id = I.Listing 
      AND L.Name = ${db.escape(req.query.unitName)}
      AND R.Id = I.RoomType
      GROUP BY I.RoomType
      LIMIT 9) O
    WHERE O.Ord = I.ImgOrder
    AND L.Id = I.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    AND R.Id = I.RoomType`,
    (err, result) => {
      if (err) throw console.log("getUnitHeaderImgs: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitAmenities", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getUnitAmenities");
  db.query(
    `SELECT A.Name, A.IconURL
    FROM Listing L
    JOIN Amenity A
    JOIN ListingAmenity LA
    WHERE L.Id = LA.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    AND A.Id = LA.Amenity
    LIMIT 7`,
    (err, result) => {
      if (err) throw console.log("getUnitAmenities: " + err);
      res.send(result);
    }
  );
});

app.get("/getAllUnitAmenities", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getAllUnitAmenities");
  db.query(
    `SELECT A.Name, A.IconURL
    FROM Listing L
    JOIN Amenity A
    JOIN ListingAmenity LA
    WHERE L.Id = LA.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    AND A.Id = LA.Amenity`,
    (err, result) => {
      if (err) throw console.log("getAllUnitAmenities: " + err);
      res.send(result);
    }
  );
});

app.get("/getBlockedDays", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");

  console.log(req.query);
  console.log("/getBlockedDays");

  const ical = require("ical.js");
  const axios = require("axios");

  db.query(
    `SELECT LP.CalendarURL
  FROM Listing L
  JOIN ListingPlatform LP
  WHERE L.Id  = LP.Listing
  AND L.Name = ${db.escape(req.query.unitName)}`,
    (err, result) => {
      if (err) throw console.log("getBlockedDays: " + err);
      let blockedDays = {};
      Promise.all(
        result.map((calURL) => {
          return new Promise((resolve, reject) => {
            if (calURL.CalendarURL !== "") {
              console.log(calURL.CalendarURL);
              axios
                .get(calURL.CalendarURL)
                .then((response) => {
                  const events = ical.parse(response.data)[2];

                  for (let i = 0; i < events.length; i++) {
                    const startDate = moment(getVeventStartDate(events[i]));
                    const endDate = moment(getVeventEndDate(events[i]));

                    if (endDate.isSameOrAfter(moment())) {
                      blockedDays[startDate.format("YYYY-MM-DD")] = "highlight";
                      blockedDays[endDate.format("YYYY-MM-DD")] = "highlight";
                      startDate.add(1, "days");

                      for (
                        let j = startDate;
                        j.isBefore(endDate, "day");
                        j.add(1, "days")
                      ) {
                        blockedDays[j.format("YYYY-MM-DD")] = "blocked";
                      }
                    }
                  }

                  resolve();
                })
                .catch((err) => {
                  reject(err);
                });
            } else {
              resolve();
            }
          });
        })
      ).then(() => {
        res.send(blockedDays);
      });
    }
  );
});

app.get("/getOwnerInfoByListing", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getOwnerInfoByListing");
  db.query(
    `SELECT C.FirstName, C.LastName, C.PictureURL, C.Bio, C.AddedOn
    FROM Client C
    JOIN ClientAccount CA
    JOIN Property P
    JOIN Listing L
    WHERE L.Property = P.Id
    AND P.ClientAccount = CA.Id
    AND C.ClientAccount = CA.Id
    AND L.Name = ${db.escape(req.query.unitName)}
    AND C.PrimaryContact = 1`,
    (err, result) => {
      if (err) throw console.log("getOwnerInfoByListing: " + err);
      res.send(result);
    }
  );
});

app.get("/chargePreview", (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const nights = endDate.diff(startDate, "days");

  db.query(
    `SELECT * FROM Listing WHEREId = ${db.escape(Id)}`,
    (err, listing) => {
      if (err) reject(console.log("getListing: " + err));
      let rent = 0;
      for (
        let j = moment(startDate);
        j.isBefore(endDate, "day");
        j.add(1, "days")
      ) {
        if (j.day() <= 4) {
          rent += listing[0].WeekdayRate;
        } else if (j.day() >= 5) {
          rent += listing[0].WeekendRate;
        }
      }
      const rate = rent / nights;

      const tax =
        Math.round(
          (rent + this.props.listing.CleaningFee) * listing[0].RaxRate * 100
        ) / 100;
      const total = tax + rent + listing[0].CleaningFee;
      res.send({
        rate: rate,
        nights: nights,
        tax: tax,
        rent: rent,
        total: total,
      });
    }
  );

  l;
});

app.post("/charge", (req, res) => {
  const stripe = require("stripe")(
    "sk_test_0WDf0azcNEORL3fzFr84q3Ty00CJ90FvWS"
  );
  const chargeAmount = req.body.chargeAmount;
  const paymentIntent = stripe.paymentIntents
    .create({
      amount: chargeAmount,
      currency: "usd",
      metadata: { integration_check: "accept_a_payment" },
    })
    .then((intent) => {
      res.json({ client_secret: intent.client_secret });
    });
});

app.post("/smartbnbWebhook", async (req, res) => {
  try {
    await uploadReservation(req.body)
    res.send(console.log("smartbnbWebhook: Success"));
  } catch (err) {
    res.send(console.log("smartbnbWebhook: " + err));
  }
  
  
});


function getVeventStartDate(vevent) {
  const event = vevent[1];

  for (let i = 0; i < event.length; i++) {
    if (event[i][0] == "dtstart") {
      return event[i][3];
    }
  }
  return;
}

function getVeventEndDate(vevent) {
  const event = vevent[1];
  for (let i = 0; i < event.length; i++) {
    if (event[i][0] == "dtend") {
      return event[i][3];
    }
  }
  return;
}

function getXeroInvoiceData() {
  return new Promise(function (resolve, reject) {
    const jwt = new google.auth.JWT(
      googleCredentials.service_account.client_email,
      null,
      googleCredentials.service_account.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const request = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: "1G9KgXCYGKI_fbo2w3iRJH5BQ_HsZRyjhbuLgkI4Yt-Y", // TODO: Update placeholder value.

      // The A1 notation of the values to retrieve.
      range: "Xero Export!A2:AA", // TODO: Update placeholder value.
      auth: jwt,
      key: googleCredentials.api_key,
    };

    const sheets = google.sheets("v4");
    sheets.spreadsheets.values.get(request, (err, res) => {
      if (err) {
        console.log("Rejecting because of error");
        reject(err);
      } else {
        console.log("Request successful");
        resolve(res.data.values);
      }
    });
  });
}

function uploadReservation(req) {
  return new Promise(function (resolve, reject) {
    const jwt = new google.auth.JWT(
      googleCredentials.service_account.client_email,
      null,
      googleCredentials.service_account.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    let data = []
      console.log()
    data.push(req.user_id)
    data.push(req.code)
    data.push(req.channel)
    data.push(req.start_date)
    data.push(req.end_date)
    data.push(req.checkin_time)
    data.push(req.checkout_time)
    data.push(req.nights)
    data.push(req.guests)
    data.push(req.adults)
    data.push(req.children)
    data.push(req.infants)
    data.push(req.status)
    data.push(req.listing.id)
    data.push(req.listing.property_id)
    data.push(req.listing.name)
    data.push(req.listing.address)
    data.push(req.listing.picture_url)
    data.push(req.listing.lat)
    data.push(req.listing.lng)
    data.push(req.guest.id)
    data.push(req.guest.first_name)
    data.push(req.guest.last_name)
    data.push(req.guest.picture_url)
    data.push(req.guest.location)
    data.push(req.guest.phone)
    data.push(req.guest.email)
    data.push(req.currency)
    data.push(req.security_price)
    data.push(req.per_night_price)
    data.push(req.base_price)
    data.push(req.extras_price)
    data.push(req.subtotal)
    data.push(req.tax_amount)
    data.push(req.guest_fee)
    data.push(req.total_price)
    data.push(req.host_service_fee)
    data.push(req.payout_price)
    data.push(req.created_at)
    data.push(req.updated_at)
    data.push(req.sent_at)
      console.log(data)
    const request = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: "1Zk1RRGwL5RgO4moCTDNDK1IRa5SN7x7rEuZ1GO7njWE", // TODO: Update placeholder value.

      // The A1 notation of the values to retrieve.
      range: "Smartbnb Data!A1", 
      valueInputOption: "RAW",
      auth: jwt,
      key: googleCredentials.api_key,
      requestBody: {
        majorDimension: "ROWS",
        //range: "Smartbnb Data!A1",
        values: [data]
      }
    };

    const sheets = google.sheets("v4");
    sheets.spreadsheets.values.append(request, (err, res) => {
      if (err) {
        console.log("Rejecting because of error");
        reject(err);
      } else {
        console.log("Request successful");
        resolve(res.data.values);
      }
    });
  });
}
function parseXeroData(data) {
  let checkExists = {};
  let jsonXeroData = [];
  for (let i = 0; i < data.length; i++) {
    if (checkExists[data[i][10]] === undefined) {
      checkExists[data[i][10]] = i;
      jsonXeroData[i] = {
        type: (data[i][17] >=0 ? "ACCREC" : "ACCPAY"),
        contact: {
          name: data[i][0],
        },

        invoiceNumber: data[i][10],
        reference: data[i][11],
        url: "https://stinsonbeachpm.com",
        currencyCode: "USD",
        status: "DRAFT", //AUTHORISED 
        lineAmountTypes: "NoTax",
        date: moment(data[i][12]).format("YYYY-MM-DD"),
        dueDate: moment(data[i][13]).format("YYYY-MM-DD"),
        lineItems: [
          {
            item: data[i][14],
            description: data[i][15],
            quantity: data[i][16],
            unitAmount: (data[i][17] >=0 ? data[i][17] : data[i][17].substring(1)),
            accountCode: data[i][19],
            tracking: [
              {
                name: data[i][21],
                option: data[i][22],
              },
              {
                name: data[i][23],
                option: data[i][24],
              }
            ],
          },
        ]
      };
      
    } else {
      jsonXeroData[checkExists[data[i][10]]].lineItems.push({
        item: data[i][14],
        description: data[i][15],
        quantity: data[i][16],
        unitAmount: data[i][17],
        accountCode: data[i][19],
        tracking: [
          {
            name: data[i][21],
            option: data[i][22],
          },
          {
            name: data[i][23],
            option: data[i][24],
          }
        ],
      });
     
    }
  }
  
  return jsonXeroData;
}




exports.app = functions.https.onRequest(app);

// app.get("/billableExpenses", async (req, res) => {
//   res.set("Cache-Control", "public, max-age=300, s-maxage=600");
//   const { XeroClient, Invoices  , LinkedTransaction,  Invoice} = require("xero-node");
//   const { TokenSet } = require('openid-client');
//   const xero = new XeroClient({
//     clientId: client_id,
//     clientSecret: client_secret,
//     redirectUris: [redirectUrl],
//     scopes: scopes.split(" "),
//   });
  
//   await xero.initialize();
//   await xero.setTokenSet(new TokenSet(req.session.tokenSet));

//   const tokenSet = await xero.readTokenSet();
  
//   if (!tokenSet.expired()) {
//     try {
//       let checkExists = []
//       let jsonXeroData = []

//       const linkedTransactionresponse = await xero.accountingApi.getLinkedTransactions("ac018c2b-d7ac-4fa6-b3c9-54559fdac216", null, null, null, null, "APPROVED");
//       const linkedTrans = linkedTransactionresponse.body.linkedTransactions
//       //console.log(await xero.accountingApi.getBankTransaction("ac018c2b-d7ac-4fa6-b3c9-54559fdac216","c9ffce74-6135-4908-af28-5009c6a76f51"));
//       console.log(linkedTrans.length)
//       res.send(linkedTrans)
//       // for(let i = 0; i < linkedTrans.length; i++) {
//       //   const bankTransactionsGetResponse = await xero.accountingApi.getBankTransaction("ac018c2b-d7ac-4fa6-b3c9-54559fdac216",linkedTrans[i].sourceTransactionID );
//       //   const trxn = bankTransactionsGetResponse.body.bankTransactions[0]
//       //   if (checkExists[linkedTrans[i].customerID] === undefined) {
//       //     checkExists[linkedTrans[i].customerID] = i;
//       //     jsonXeroData[i] = {
//       //       type: "ACCREC",
//       //       contact: {
//       //         contactID: linkedTrans[i].contactID,
//       //       },    
//       //       reference: trxn.lineItems[0].tracking[0].option + " Expenses " + moment().subtract(1,'months').format("MMM, YYYY") ,
//       //       url: "https://stinsonbeachpm.com",
//       //       currencyCode: "USD",
//       //       status: "DRAFT",
//       //       lineAmountTypes: "NoTax",
//       //       date: moment().subtract(1,'months').endOf('month').format('YYYY-MM-DD'),
//       //       dueDate: moment().date(15).format('YYYY-MM-DD'),
//       //       lineItems: [
              
//       //       ]
//       //     };
          
//       //   } 
//       //     jsonXeroData[checkExists[linkedTrans[i].customerID]].lineItems.push({
//       //       item: (trxn.lineItems[0].item != undefined ? "; " + trxn.lineItems[0].item: ""),
//       //       description: trxn.contact.name + (trxn.lineItems[0].description != undefined ? "; " + trxn.lineItems[0].description: ""),
//       //       quantity: (trxn.lineItems[0].quantity != undefined ? "; " + trxn.lineItems[0].quantity: ""),
//       //       unitAmount: (trxn.lineItems[0].unitAmount != undefined ? "; " + trxn.lineItems[0].unitAmount: ""),
//       //       accountCode: (trxn.lineItems[0].accountCode != undefined ? "; " + trxn.lineItems[0].accountCode: ""),
//       //       tracking: [
//       //         {
//       //           name: trxn.lineItems[0].tracking[0].name,
//       //           option: trxn.lineItems[0].tracking[0].option,
//       //         }
//       //       ],
//       //     });
//       // }
      
      
//       //res.send(jsonXeroData);
//     } catch (err) {
//       console.log(err);
//       res.send(
//         "Sorry, something went wrong in billableExpenses, try reconnecting by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
//       );
//     }
//   } else {
//     res.send(
//       "Access to xero has expired, reconnect by <a href='https://us-central1-stinsonbeachpm.cloudfunctions.net/app/connect'>clicking here</a>"
//     );
//   }
// });
