SELECT L.Id, L.Name, L.WeekdayRate, L.Title, L.numReviews, L.avgReviews
FROM Listing L
INNER JOIN Property P
INNER JOIN ClientAccount C 
WHERE L.Property = P.Id 
AND P.ClientAccount = C.Id 
AND C.Active = 1;

SELECT * 
FROM Listing L
JOIN CancelationPolicy C
WHERE L.Name = "27 Pradero" 
AND C.Id = L.CancelationPolicy