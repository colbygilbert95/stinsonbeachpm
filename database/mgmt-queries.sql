DROP DATABASE mgmt;
CREATE DATABASE mgmt; 
USE mgmt;

--Get Information for inserting Cleaning Task
SELECT L.Name, L.Id AS ListingId, R.Id AS ReservationId, C.CleaningCrew, R.StartDate, R.CheckinTime
FROM Listing L
INNER JOIN Reservation R
INNER JOIN ClientAccount C
INNER JOIN ListingPlatform LP
INNER JOIN Property P
WHERE LP.AdId = 37977660 
AND R.ResId = 'HMZBYA2A5C' 
AND R.Listing = L.Id
AND P.Id = L.Property 
AND P.ClientAccount = C.Id;

UPDATE Task SET StartWindow = '2020-04-23 15:00:00', DueDate = '2020-04-23'
WHERE TaskType = 1 AND Reservation = (SELECT Id FROM Reservation WHERE ResId = 'HMZBYA2A5C' LIMIT 1);

