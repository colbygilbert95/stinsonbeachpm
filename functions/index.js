require('dotenv').config();
const functions = require('firebase-functions');
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
const cors = require("cors");
const stripe = require("stripe")("sk_test_0WDf0azcNEORL3fzFr84q3Ty00CJ90FvWS");
const axios = require("axios");
const ical = require("ical.js");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: true}));
console.log(process.env.SERVER_SQL_HOST)
const db = mysql.createConnection({
  host: process.env.SERVER_SQL_HOST,
  database: process.env.SERVER_SQL_DATABASE,
  user: process.env.SERVER_SQL_USER,
  password: process.env.SERVER_SQL_PASSWORD,
  socketPath: process.env.SERVER_SQL_SOCKET_PATH
});

db.connect(function (err) {
  if (err) throw err;
});


app.get("/getActiveUnits", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  db.query(
    `  SELECT L.Id, L.Name, L.WeekdayRate, L.Title, L.NumReviews, L.AvgReviews, I.URL, P.Latitude, P.Longitude
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
      console.log(result)
      if (err) throw console.log("getActiveUnits: " + err);
      res.send(result);
    }
  );
});

app.get("/getUnit", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getUnit")
  db.query(
    `SELECT * , C.Name AS PolicyName, C.Description AS PolicyDescription, P.Latitude As Latitude, P.Longitude As Longitude 
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
  console.log("/getUnitReviews")
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

app.get("/getUnitAllImgs", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  console.log(req.query);
  console.log("/getAllUnitImgs")
  db.query(
    `SELECT I.ImgOrder, I.Descriptionstat, I.URL, R.Name
    FROM Listing L
    JOIN RoomType R
    JOIN ListingImage I
    WHERE L.Id = I.Listing 
    AND L.Name = ${db.escape(req.query.unitName)}
    AND I.RoomType = R.Id`,
    (err, result) => {
      if (err) throw console.log("getAllUnitImgs: " + err);
      res.send(result);
    }
  );
});

app.get("/getRoomHeaderImgs", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
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
              console.log(calURL.CalendarURL);
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
      const rate = rent / nights
 
    const tax = Math.round((rent + this.props.listing.CleaningFee) * listing[0].RaxRate * 100)/100
    const total = tax + rent + listing[0].CleaningFee
    res.send({rate: rate, nights:nights,tax: tax, rent: rent, total: total})
    }
  );

  l;
});

app.post("/charge", (req, res) => {
  const chargeAmount = req.body.chargeAmount;
  const paymentIntent = stripe.paymentIntents.create({
    amount: chargeAmount,
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  })
  .then((intent) => {
    res.json({ client_secret: intent.client_secret });
  })
})

app.post("/smartbnbWebhook", function (req, res) {
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
                  console.log("Res Status Check")
                  console.log(req.body.status.toUpperCase())
                  if (req.body.status.toUpperCase() == "CANCELLED") {
                    cancelCleaning(req)
                    cancelQualityControl(req)
                  }
                  res.send("Done: Update reservation");
                });
              } else {
                getGuest(req).then(guestId => {
                  getPlatformId(req).then(platformId => {
                    console.log("First insert");
                    insertReservation(req, guestId, listingId, platformId).then(
                      () => {
                        if (req.body.status.toUpperCase() !== "CANCELLED") {
                          insertCleaning(req);
                          insertQaulityControl(req);
                        }
                        res.send("Done: First insert");
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
                      if (req.body.status.toUpperCase() !== "CANCELLED") {
                        insertCleaning(req);
                        insertQaulityControl(req);
                      }
                      res.send("Done: Second insert");
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
    res.send("Null")
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
      WHERE AdId = ${db.escape(adId)}`,
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
    const phone = req.body.guest.phone
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
                    ${db.escape((phone != null ? phone.replace(/\D/g, "") : ""))},
                    ${db.escape(req.body.guest.email)},
                    '',
                    ${db.escape(req.body.guest.location)},
                    ${db.escape(moment().format("YYYY-MM-DD HH:mm:ss"))}
                )`,
      (err, res) => {
        if (err) reject(console.log("insertGuest" + err));
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
        moment.tz(req.body.checkin_time, "America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss")
      )},
            ${db.escape(req.body.end_date)},
            ${db.escape(
        moment.tz(req.body.checkout_time, "America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss")
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
    let adId = req.body.listing.id;
    if (typeof adId === "string") adId = adId.match(/([^.]+$)/)[0];
    db.query(
      `
            SELECT L.Name, L.Id AS ListingId, R.Id AS ReservationId, C.CleaningCrew, R.EndDate, R.CheckoutTime  
            FROM Listing L
            INNER JOIN Reservation R
            INNER JOIN ClientAccount C
            INNER JOIN ListingPlatform LP
            INNER JOIN Property P
            WHERE LP.AdId = ${db.escape(adId)} 
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
                        TaskType, 
                        DueDate, 
                        StartWindow,
                        Paid, 
                        AddedOn) 
                     VALUES (
                        ${db.escape(cleaningData.Name + " - Cleaning")},
                        '',
                        ${db.escape("Pending")},
                        ${db.escape(cleaningData.ListingId)},
                        ${db.escape(cleaningData.ReservationId)},
                        1,
                        ${db.escape(
              moment(cleaningData.EndDate)
                .format("YYYY-MM-DD HH:mm:ss")
            )},
                        ${db.escape(cleaningData.CheckoutTime)},
                        ${db.escape((moment(cleaningData.EndDate).isSameOrBefore(moment("02/29/2020")) ? 1 : 0))},
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

function cancelCleaning(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Task SET 
        Status = ${db.escape(
        "Cancelled"
      )}
        WHERE TaskType = 1 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = ${db.escape(
        req.body.code
      )} LIMIT 1);
            `,
      err => {
        if (err) reject(console.log("cancelCleaning a: " + err));
        console.log("cancelCleaning: Success");
        resolve();
      }
    );
  });
}

function updateCleaning(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Task SET 
        StartWindow = ${db.escape(
        moment.tz(req.body.checkout_time, "America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss")
      )}, 
        DueDate = ${db.escape(req.body.end_date)}
                WHERE TaskType = 1 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = ${db.escape(
        req.body.code
      )} LIMIT 1);
            `,
      err => {
        if (err) reject(console.log("updateCleaning a: " + err));
        console.log("updateCleaning: Success");
        resolve();
      }
    );
  });
}

function insertQaulityControl(req) {
  return new Promise((resolve, reject) => {
    let adId = req.body.listing.id;
    if (typeof adId === "string") adId = adId.match(/([^.]+$)/)[0];
    db.query(
      `
        SELECT L.Name, L.Id AS ListingId, R.Id AS ReservationId, R.EndDate, R.CheckoutTime  
        FROM Listing L
        INNER JOIN Reservation R
        INNER JOIN ClientAccount C
        INNER JOIN ListingPlatform LP
        INNER JOIN Property P
        WHERE LP.AdId = ${db.escape(adId)} 
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
                          ${db.escape("Pending")},
                          ${db.escape(qualityControlData.ListingId)},
                          ${db.escape(qualityControlData.ReservationId)},
                          1,
                          2,
                          ${db.escape(
              moment(qualityControlData.EndDate)
                .format("YYYY-MM-DD HH:mm:ss")
            )},
                          ${db.escape(qualityControlData.CheckoutTime)},
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
        moment.tz(req.body.checkout_time, "America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss")
      )}, 
          DueDate = ${db.escape(req.body.end_date)}
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

function cancelQualityControl(req) {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE Task SET 
          Status = ${db.escape(
        "Cancelled"
      )} 
        WHERE TaskType = 2 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = ${db.escape(
        req.body.code
      )} LIMIT 1);
      `,
      err => {
        if (err) reject(console.log("cancelQaulityConrol a: " + err));
        console.log("cancelQualityControl: Success");
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

exports.app = functions.https.onRequest(app)




