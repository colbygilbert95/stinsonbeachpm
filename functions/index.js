const functions = require('firebase-functions');
require('dotenv').config();
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");
const moment = require("moment");
const cors = require("cors");
const stripe = require("stripe")("sk_test_0WDf0azcNEORL3fzFr84q3Ty00CJ90FvWS");
//const data1 = require('./data1.json')
const axios = require("axios");
const ical = require("ical.js");
//const dotenv = require('dotenv')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set("port", process.env.PORT || 5555);

const db = mysql.createConnection({
  host: process.env.SERVER_SQL_HOST,
  database: process.env.SERVER_SQL_DATABASE,
  user: process.env.SERVER_SQL_USER,
  password: process.env.SERVER_SQL_PASSWORD

 
});

db.connect(function(err) {
  if (err) throw err;
});

// app.post("/", function(req, res) {
//     fs.readFile('./data1.json', 'utf8', (err, jsonString) => {
//         //console.log(jsonString)
//         let data = JSON.parse(jsonString)
//         data.records.push(req.body)
//         const output = JSON.stringify(data);
//         fs.writeFile("data1.json", output, err=>{

//         });
//     })

// });
app.get("/getActiveUnits", (req, res) => {
  db.query(
    `  SELECT L.Id, L.Name, L.WeekdayRate, L.Title, L.NumReviews, L.AvgReviews, I.URL
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
      if (err) throw console.log("getActiveUnits: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnit", (req, res) => {
  console.log(req.query);
  console.log("/getUnit")
  db.query(
    `SELECT * , C.Name AS PolicyName, C.Description AS PolicyDescription 
    FROM CancellationPolicy C
    JOIN Listing L
    WHERE L.Name = ${db.escape(req.query.unitName)}
    AND C.Id = L.CancellationPolicy`,
    (err, result) => {
      if (err) throw console.log("getUnit: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitReviews", (req, res) => {
  console.log(req.query);
  console.log("/getUnitReviews")
  db.query(
    `SELECT R.FirstName, R.PublicFeedback, G.PictureURL AS GuestPic, R.AddedOn
    FROM Listing L
    JOIN Guest G
    JOIN Review R
    WHERE L.Id = R.Listing 
    AND G.Id = R.Guest
    AND L.Name = ${db.escape(req.query.unitName)}`,
    (err, result) => {
      if (err) throw console.log("getUnit: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnitHeaderImgs", (req, res) => {
  console.log(req.query);
  console.log("/getUnitHeaderImgs")
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

app.get("/getRoomHeaderImgs", (req, res) => {
  console.log(req.query);
  console.log("/getRoomHeaderImgs")
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

app.get("/getBlockedDays", (req, res) => {
  //console.log(req.query);
  console.log("/getBlockedDays");
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
        result.map(calURL => {
          return new Promise((resolve, reject) => {
            if (calURL.CalendarURL !== "") {
              //console.log(calURL.CalendarURL);
              axios
                .get(calURL.CalendarURL)
                .then(response => {
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
                .catch(err => {
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


app.post("/charge", (req, res) =>{
  const token = req.body.stripeToken;
  const chargeAmount = req.body.chargeAmount;
  const paymentIntent = stripe.paymentIntents.create({
    amount: chargeAmount,
    currency: 'usd',
  });
})

app.post("/a", function(req, res) {
  //console.log(req.body);
  //console.log(req.body.listing.id);
  console.log(req.body);
  //insertCleaning(req)
  if (req.body.listing.id != null) {
    getListingByAdId(req).then(listingId => {
      if (listingId) {
        checkGuest(req).then(guestExists => {
          console.log("guestExists: " + guestExists);
          if (guestExists) {
            checkReservation(req).then(reservationExists => {
              if (reservationExists) {
                updateReservation(req).then(() => {
                  updateCleaning(req);
                  updateQualityControl(req);
                });
              } else {
                getGuest(req).then(guestId => {
                  getPlatformId(req).then(platformId => {
                    console.log("First insert");
                    insertReservation(req, guestId, listingId, platformId).then(
                      () => {
                        insertCleaning(req);
                        insertQaulityControl(req);
                      }
                    );
                  });
                });
              }
            });
          } else {
            insertGuest(req).then(() => {
              getGuest(req).then(guestId => {
                getPlatformId(req).then(platformId => {
                  console.log("Second insert");
                  insertReservation(req, guestId, listingId, platformId).then(
                    () => {
                      insertCleaning(req);
                      insertQaulityControl(req);
                    }
                  );
                });
              });
            });
          }
        });
      }
    });
  } else {
    saveNull(req);
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
function getListingByAdId(req) {
  return new Promise((resolve, reject) => {
    let adId = req.body.listing.id;
    if (typeof adId === "string") adId = adId.match(/([^.]+$)/)[0];
    db.query(
      `SELECT Listing 
      FROM ListingPlatform 
       AdId = ${db.escape(adId)}`,
      (err, listingId) => {
        if (err) reject(console.log("getListingByAdId: " + err));
        if (listingId[0] != undefined) {
          resolve(listingId[0].Listing);
        }
        resolve(false);
      }
    );
  });
}

function checkGuest(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT EXISTS(SELECT * FROM Guest WHERE ChannelId = ${db.escape(
        req.body.guest.id
      )})`,
      (err, guest) => {
        if (err) reject(console.log("checkGuest: " + err));
        resolve(
          guest[0][
            `EXISTS(SELECT * FROM Guest WHERE ChannelId = ${db.escape(
              req.body.guest.id
            )})`
          ] === 1
        );
      }
    );
  });
}

function getGuest(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT Id FROM Guest WHERE ChannelId = ${db.escape(req.body.guest.id)}`,
      (err, guest) => {
        if (err) reject(console.log("getkGuest: " + err));
        resolve(guest[0].Id);
      }
    );
  });
}

function insertGuest(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO Guest (
                    ChannelId,
                    FirstName, 
                    LastName, 
                    PictureURL, 
                    Phone, 
                    ChannelEmail, 
                    Email, 
                    Location,
                    AddedOn

                )
                VALUES (
                    ${db.escape(req.body.guest.id)},
                    ${db.escape(req.body.guest.first_name)},
                    ${db.escape(req.body.guest.last_name)},
                    ${db.escape(req.body.guest.picture_url)},
                    ${db.escape(req.body.guest.phone)},
                    ${db.escape(req.body.guest.email)},
                    '',
                    ${db.escape(req.body.guest.location)},
                    ${db.escape(moment().format("YYYY-MM-DD HH:mm:ss"))}
                )`,
      (err, res) => {
        if (err) reject(console.log("insertGuest" + err));
        console.log("insertGuest: Success");
        resolve();
      }
    );
  });
}

function checkReservation(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT EXISTS(SELECT * FROM Reservation WHERE ResId = ${db.escape(
        req.body.code
      )})`,
      (err, reservation) => {
        if (err) reject(console.log("checkReservation: " + err));
        resolve(
          reservation[0][
            `EXISTS(SELECT * FROM Reservation WHERE ResId = ${db.escape(
              req.body.code
            )})`
          ] === 1
        );
      }
    );
  });
}

function insertReservation(req, guestId, listingId, platformId) {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO Reservation (
            ResId,
            Platform,
            Guest, 
            Listing, 
            UserId, 
            ListingTitle, 
            Nights, 
            Status, 
            Guests, 
            Adults, 
            Children,
            Infants,
            StartDate,
            Checkintime,
            EndDate,
            CheckoutTime,
            Currency,
            PerNightPrice,
            BasePrice,
            SecurityDeposit,
            Subtotal,
            Tax,
            GuestFee,
            CleaningFee,
            Total,
            HostFee,
            Payout,
            CreatedAt,
            UpdatedAt,
            SentAt
        )
        VALUES (
            ${db.escape(req.body.code)},
            ${db.escape(platformId)},
            ${db.escape(guestId)},
            ${db.escape(listingId)},
            ${db.escape(req.body.user_id)},
            ${db.escape(req.body.listing.name)},
            ${db.escape(req.body.nights)},
            ${db.escape(req.body.status)},
            ${db.escape(req.body.guests)},
            ${db.escape(req.body.adults)},
            ${db.escape(req.body.children)},
            ${db.escape(req.body.infants)},
            ${db.escape(req.body.start_date)},
            ${db.escape(
              moment(req.body.checkin_time).format("YYYY-MM-DD HH:mm:ss")
            )},
            ${db.escape(req.body.end_date)},
            ${db.escape(
              moment(req.body.checkout_time).format("YYYY-MM-DD HH:mm:ss")
            )},
            ${db.escape(req.body.currency)},
            ${db.escape(req.body.per_night_price)},
            ${db.escape(req.body.base_price)},
            ${db.escape(req.body.security_price)},
            ${db.escape(req.body.subtotal)},
            ${db.escape(req.body.tax_amount)},
            ${db.escape(req.body.guest_fee)},
            ${db.escape(req.body.extras_price)},
            ${db.escape(req.body.total_price)},
            ${db.escape(req.body.host_service_fee)},
            ${db.escape(req.body.payout_price)},
            ${db.escape(
              moment.unix(req.body.created_at).format("YYYY-MM-DD HH:mm:ss")
            )},
            ${db.escape(
              moment.unix(req.body.updated_at).format("YYYY-MM-DD HH:mm:ss")
            )},
            ${db.escape(
              moment.unix(req.body.sent_at).format("YYYY-MM-DD HH:mm:ss")
            )}
        )`,
      err => {
        if (err) reject(console.log("insertReservation: " + err));
        console.log("insertReservation: Success");
        resolve();
      }
    );
  });
}

function updateReservation(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Reservation SET   
        Nights = ${db.escape(req.body.nights)}, 
        Status = ${db.escape(req.body.status)}, 
        Guests = ${db.escape(req.body.guests)}, 
        Adults = ${db.escape(req.body.adults)}, 
        Children = ${db.escape(req.body.children)},
        Infants = ${db.escape(req.body.infants)},
        StartDate = ${db.escape(req.body.start_date)},
        EndDate = ${db.escape(req.body.end_date)},
        Currency = ${db.escape(req.body.currency)},
        PerNightPrice = ${db.escape(req.body.per_night_price)},
        BasePrice = ${db.escape(req.body.base_price)},
        Subtotal = ${db.escape(req.body.subtotal)},
        Tax = ${db.escape(req.body.tax_amount)},
        GuestFee = ${db.escape(req.body.guest_fee)},
        CleaningFee = ${db.escape(req.body.extras_price)},
        Payout = ${db.escape(req.body.payout_price)},
        UpdatedAt = ${db.escape(
          moment.unix(req.body.updated_at).format("YYYY-MM-DD HH:mm:ss")
        )},
        SentAt = ${db.escape(
          moment.unix(req.body.sent_at).format("YYYY-MM-DD HH:mm:ss")
        )}
      WHERE ResId = ${db.escape(req.body.code)}`,

      err => {
        if (err) reject(console.log("updateReservation: " + err));
        console.log("updateReservation: Success");
        resolve();
      }
    );
  });
}

function getPlatformId(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT Id FROM Platform WHERE Name = ${db.escape(req.body.channel)}`,
      (err, platformId) => {
        if (err) reject(console.log("getPlatformId: " + err));
        resolve(platformId[0].Id);
      }
    );
  });
}

function getCleanerByListing(listingId) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT Cleaner 
         FROM Listing L 
         INNER JOIN ON ClientAccount C 
         WHERE C.Property = L.Property 
         AND L.Listing = ${db.escape(listingId)}`,
      (err, cleaner) => {
        if (err) reject(console.log("getCleanerByListing: " + err));
        resolve(cleaner[0].Cleaner);
      }
    );
  });
}

function getReservation(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM Reservation WHERE ResId = ${db.escape(req.body.code)}`,
      (err, reservation) => {
        if (err) reject(console.log("getReservation: " + err));
        resolve(reservation[0]);
      }
    );
  });
}

function getListing(Id) {
  return new Promise((resolve, reject) => {
    console.log(Id);
    db.query(
      `SELECT * FROM Listing WHEREId = ${db.escape(Id)}`,
      (err, listing) => {
        if (err) reject(console.log("getListing: " + err));
        resolve(listing[0]);
      }
    );
  });
}

function insertCleaning(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `
            SELECT L.Name, L.Id AS ListingId, R.Id AS ReservationId, C.CleaningCrew, R.StartDate, R.CheckinTime  
            FROM Listing L
            INNER JOIN Reservation R
            INNER JOIN ClientAccount C
            INNER JOIN ListingPlatform LP
            INNER JOIN Property P
            WHERE LP.AdId = ${db.escape(req.body.listing.id)} 
            AND R.ResId = ${db.escape(req.body.code)}  
            AND R.Listing = L.Id
            AND P.Id = L.Property 
            AND P.ClientAccount = C.Id;`,
      (err, res) => {
        const cleaningData = res[0];
        if (err) reject(console.log("insertCleaning a: " + err));
        if (cleaningData != undefined) {
          db.query(
            `INSERT INTO Task (
                        Title, 
                        Description, 
                        Status, 
                        Listing, 
                        Reservation, 
                        CastMember,
                        TaskType, 
                        DueDate, 
                        StartWindow, 
                        AddedOn) 
                     VALUES (
                        ${db.escape(cleaningData.Name + " - Cleaning")},
                        '',
                        ${db.escape("Scheduled")},
                        ${db.escape(cleaningData.ListingId)},
                        ${db.escape(cleaningData.ReservationId)},
                        ${db.escape(cleaningData.CleaningCrew)},
                        1,
                        ${db.escape(
                          moment(cleaningData.StartDate)
                            .add(11, "hours")
                            .format("YYYY-MM-DD HH:mm:ss")
                        )},
                        ${db.escape(cleaningData.CheckinTime)},
                        ${db.escape(moment().format("YYYY-MM-DD HH:mm:ss"))}
                     )`,
            err => {
              if (err) reject(console.log("insertCleaning b: " + err));
              console.log("insertCleaning: Success");
              resolve();
            }
          );
        }
      }
    );
  });
}

function updateCleaning(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Task SET 
        StartWindow = ${db.escape(
          moment(req.body.checkin_time).format("YYYY-MM-DD HH:mm:ss")
        )}, 
        DueDate = ${db.escape(req.body.start_date)}
                WHERE TaskType = 1 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = ${db.escape(
                  req.body.code
                )} LIMIT 1);
            `,
      err => {
        if (err) reject(console.log("insertCleaning a: " + err));
        console.log("updateCleaning: Success");
        resolve();
      }
    );
  });
}

function insertQaulityControl(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `
              SELECT L.Name, L.Id AS ListingId, R.Id AS ReservationId, R.StartDate, R.CheckinTime  
              FROM Listing L
              INNER JOIN Reservation R
              INNER JOIN ClientAccount C
              INNER JOIN ListingPlatform LP
              INNER JOIN Property P
              WHERE LP.AdId = ${db.escape(req.body.listing.id)} 
              AND R.ResId = ${db.escape(req.body.code)}  
              AND R.Listing = L.Id
              AND P.Id = L.Property 
              AND P.ClientAccount = C.Id;`,
      (err, res) => {
        const qualityControlData = res[0];
        if (err) reject(console.log("insertQaulityControl a: " + err));
        if (qualityControlData != undefined) {
          db.query(
            `INSERT INTO Task (
                          Title, 
                          Description, 
                          Status, 
                          Listing, 
                          Reservation, 
                          CastMember,
                          TaskType, 
                          DueDate, 
                          StartWindow, 
                          AddedOn) 
                       VALUES (
                          ${db.escape(
                            qualityControlData.Name + " - Quality Control"
                          )},
                          '',
                          ${db.escape("Scheduled")},
                          ${db.escape(qualityControlData.ListingId)},
                          ${db.escape(qualityControlData.ReservationId)},
                          1,
                          2,
                          ${db.escape(
                            moment(qualityControlData.StartDate)
                              .add(11, "hours")
                              .format("YYYY-MM-DD HH:mm:ss")
                          )},
                          ${db.escape(qualityControlData.CheckinTime)},
                          ${db.escape(moment().format("YYYY-MM-DD HH:mm:ss"))}
                       )`,
            err => {
              if (err) reject(console.log("insertQaulityControl b: " + err));
              console.log("insertQaulityControl: Success");
              resolve();
            }
          );
        }
      }
    );
  });
}

function updateQualityControl(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Task SET 
          StartWindow = ${db.escape(
            moment(req.body.checkin_time).format("YYYY-MM-DD HH:mm:ss")
          )}, 
          DueDate = ${db.escape(req.body.start_date)}
                  WHERE TaskType = 2 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = ${db.escape(
                    req.body.code
                  )} LIMIT 1);
              `,
      err => {
        if (err) reject(console.log("updateQaulityConrol a: " + err));
        console.log("updateQualityControl: Success");
        resolve();
      }
    );
  });
}

function saveNull(req) {
  return new Promise((resolve, reject) => {
    fs.readFile("./data1.json", "utf8", (err, jsonString) => {
      let data = JSON.parse(jsonString);
      data.records.push(req.body);
      const output = JSON.stringify(data);
      fs.writeFile("data1.json", output, err => {
        console.log("saveNull: Success");
      });
    });
  });
}

const server = app.listen(app.get("port"), () => {
  console.log("server is running on port", server.address().port);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



