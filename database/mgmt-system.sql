DROP DATABASE mgmt;
CREATE DATABASE mgmt; 
USE mgmt;

CREATE TABLE `TaxParameters` (
  `Id` INT AUTO_INCREMENT,
  `Married` VARCHAR(1),
  `Higher` TINYINT(1),
  `Threshold` INT,
  `Withholding` INT,
  `Rate` DOUBLE,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Variables` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `Value` VARCHAR(255),
  PRIMARY KEY (`Id`)
);

CREATE TABLE `CastMember` (
  `Id` INT AUTO_INCREMENT,
  `Company` VARCHAR(255),
  `FirstName` VARCHAR(255),
  `LastName` VARCHAR(255),
  `Address` VARCHAR(255),
  `Email` VARCHAR(255),
  `Phone` VARCHAR(255),
  `WhatsApp` VARCHAR(255),
  `Language` VARCHAR(255),
  `Currency` VARCHAR(255),
  `Rate` DOUBLE,
  `Insurance` TINYINT(1),
  `Contracted` TINYINT(1),
  `Married` VARCHAR(1),
  `Dependents` DOUBLE,
  `Deductions` DOUBLE,
  `OtherIncome` DOUBLE,
  `Withholdings` DOUBLE,
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Task` (
  `Id` INT AUTO_INCREMENT,
  `Title` VARCHAR(255),
  `Description` TEXT,
  `Status` VARCHAR(255),
  `Listing` INT,
  `Reservation` INT,
  `CastMember` INT,
  `TaskType` INT,
  `DueDate` DATE,
  `StartTime` DATETIME,
  `EndTime` DATETIME,
  `StartWindow` DATETIME,
  `EndWindow` DATETIME,
  `PlannedDuration` DOUBLE,
  `ActualDuration` DOUBLE,
  `NumHelpers` INT,
  `AttachmentsURL` VARCHAR(2000),
  `PostNotes` TEXT,
  `AddedOn` DATETIME,
  `CreatedBy` INT,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Checklist` (
  `Id` INT AUTO_INCREMENT,
  `Task` INT,
  `Name` VARCHAR(255),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ListingImage` (
  `Id` INT AUTO_INCREMENT,
  `Listing` INT,
  `ImgOrder` INT,
  `RoomType` INT,
  `URL` VARCHAR(2000),
  `Description` VARCHAR(2000),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `CastMemberRole` (
  `Id` INT AUTO_INCREMENT,
  `CastMember` INT,
  `Role` INT,
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Amenity` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `Platform` VARCHAR(255),
  `IconURL` VARCHAR(2000),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `CancellationPolicy` (
  `Id` INT AUTO_INCREMENT,
  `Platform` VARCHAR(255),
  `Name` VARCHAR(255),
  `Description` TEXT,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Listing` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255) UNIQUE,
  `Property` INT,
  `Bedrooms` DOUBLE,
  `Beds` DOUBLE,
  `Baths` DOUBLE,
  `Accommodates` DOUBLE,
  `PropertyType` VARCHAR(255),
  `RoomType` VARCHAR(255),
  `WeekdayRate` DOUBLE,
  `WeekendRate` DOUBLE,
  `CleaningFee` DOUBLE,
  `CleanersPay` DOUBLE,
  `PetFee` DOUBLE,
  `SecurityDeposit` DOUBLE,
  `Wifi` VARCHAR(255),
  `WifiPassword` VARCHAR(255),
  `Checkout` TIME,
  `Checkin` TIME,
  `GuidebookURL` VARCHAR(2000),
  `Title` TEXT,
  `Description` TEXT,
  `Space` TEXT,
  `GuestAccess` TEXT,
  `OtherNotes` TEXT,
  `Location` TEXT,
  `GuestInteraction` TEXT,
  `CancellationPolicy` INT,
  `HouseRules` TEXT,
  `PictureURL` VARCHAR(2000),
  `NumReviews` VARCHAR(255),
  `AvgReviews` VARCHAR(255),
  `AddedOn` DATETIME,
  `AddedBy` VARCHAR(255),
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Property` (
  `Id` INT AUTO_INCREMENT,
  `ClientAccount` INT,
  `Name` VARCHAR(255) UNIQUE,
  `Address` VARCHAR(255),
  `AddedOn` DATETIME,
  `AddedBy` VARCHAR(255),
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ListingAmenity` (
  `Id` INT AUTO_INCREMENT,
  `Listing` INT,
  `Amenity` INT,
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `TaskType` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `RoomType` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ChecklistItem` (
  `Id` INT AUTO_INCREMENT,
  `Checklist` INT,
  `Text` VARCHAR(255),
  `Status` TINYINT(1),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Review` (
  `Id` INT AUTO_INCREMENT,
  `Reservation` INT,
  `Listing` INT,
  `Guest` INT,
  `FirstName` VARCHAR(255),
  `Platform` VARCHAR(255),
  `PublicFeedback` TEXT,
  `PrivateFeedback` TEXT,
  `Overall` INT,
  `Accuracy` INT,
  `Checkin` INT,
  `Cleanliness` INT,
  `Communication` INT,
  `Location` INT,
  `Value` INT,
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`, `Platform`)
);

CREATE TABLE `Client` (
  `Id` INT AUTO_INCREMENT,
  `ClientAccount` INT,
  `PictureURL` VARCHAR(2000),
  `FirstName` VARCHAR(255),
  `LastName` VARCHAR(255),
  `Email` VARCHAR(255),
  `Phone` VARCHAR(255),
  `Address` VARCHAR(255),
  `Comment` TEXT,
  `PrimaryContact` TINYINT(1),
  `Bio` TEXT,
  `SuperHost` TINYINT(1),
  `AddedOn` DATETIME,
  `AddedBy` VARCHAR(255),
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ListingPlatform` (
  `Id` INT AUTO_INCREMENT,
  `Platform` INT,
  `Listing` INT,
  `Username` Varchar(255),
  `AdId` VARCHAR(255),
  `AdURL` VARCHAR(2000),
  `CalendarURL` VARCHAR(2000),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Reservation` (
  `Id` INT AUTO_INCREMENT,
  `Guest` INT,
  `Listing` INT,
  `StartDate` DATE,
  `CheckinTime` DATETIME,
  `EndDate` DATE,
  `CheckoutTime` DATETIME,
  `ResId` VARCHAR(255) UNIQUE,
  `Platform` INT,
  `UserId` VARCHAR(255),
  `ListingTitle` VARCHAR(255),
  `Nights` INT,
  `Status` VARCHAR(255),
  `Guests` INT,
  `Adults` INT,
  `Children` INT,
  `Infants` INT,
  `Currency` VARCHAR(255),
  `PerNightPrice` DOUBLE,
  `BasePrice` DOUBLE,
  `SecurityDeposit` DOUBLE,
  `Subtotal` DOUBLE,
  `Tax` DOUBLE,
  `GuestFee` DOUBLE,
  `CleaningFee` DOUBLE,
  `Total` DOUBLE,
  `HostFee` DOUBLE,
  `Payout` DOUBLE,
  `BadReview` TINYINT(1),
  `Cleaned` TINYINT(1),
  `QualityChecked` TINYINT(1),
  `CreatedAt` DATETIME,
  `UpdatedAt` DATETIME,
  `SentAt` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ClientAccount` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255) UNIQUE,
  `CompanyName` VARCHAR(255),
  `CompanyAddress` VARCHAR(255),
  `Percentage` DOUBLE,
  `Wage` DOUBLE,
  `HoursCharge` VARCHAR(255),
  `TOTNumber` VARCHAR(255),
  `TOTWebPin` VARCHAR(255),
  `BuyInventory` TINYINT,
  `Active` TINYINT(1),
  `Entered` TINYINT(1),
  `ManageAccounting` TINYINT(1),
  `ManageCleaning` TINYINT(1),
  `Comment` TEXT,
  `CleaningCrew` INT,
  `AddedOn` DATETIME,
  `AddedBy` VARCHAR(255),
  PRIMARY KEY (`Id`)
);


CREATE TABLE `Platform` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255) UNIQUE,
  `IconURL` VARCHAR(2000),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Role` (
  `Id` INT AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `Description` TEXT,
  `IconURL` VARCHAR(2000),
  `AddedOn` DATETIME,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `Guest` (
  `Id` INT AUTO_INCREMENT,
  `ChannelId` VARCHAR(255) UNIQUE,
  `FirstName` VARCHAR(255),
  `LastName` VARCHAR(255),
  `PictureURL` VARCHAR(2000),
  `Phone` VARCHAR(255),
  `ChannelEmail` VARCHAR(255),
  `Email` VARCHAR(255),
  `Location` VARCHAR(255),
  `AllowBack` TINYINT(1),
  `Comment` TEXT,
  `AddedOn` DATETIME,
  `CreatedBy` INT,
  PRIMARY KEY (`Id`)
);

ALTER TABLE Task ADD CONSTRAINT fk_listing_task_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
ALTER TABLE Task ADD CONSTRAINT fk_reservation_task_id FOREIGN KEY (`Reservation`) REFERENCES Reservation(Id);
ALTER TABLE Task ADD CONSTRAINT fk_castmember_task_id FOREIGN KEY (`CastMember`) REFERENCES CastMember(Id);
ALTER TABLE Task ADD CONSTRAINT fk_tasktype_task_id FOREIGN KEY (`TaskType`) REFERENCES TaskType(Id);
ALTER TABLE Task ADD CONSTRAINT fk_createdby_task_id FOREIGN KEY (`CreatedBy`) REFERENCES CastMember(Id);
ALTER TABLE Checklist ADD CONSTRAINT fk_task_checklist_id FOREIGN KEY (`Task`) REFERENCES Task(Id);
ALTER TABLE ListingImage ADD CONSTRAINT fk_listing_listingimage_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
ALTER TABLE ListingImage ADD CONSTRAINT fk_roomtype_listingamenity_id FOREIGN KEY (`RoomType`) REFERENCES RoomType(Id);
ALTER TABLE CastMemberRole ADD CONSTRAINT fk_castmember_castmemberrole_id FOREIGN KEY (`CastMember`) REFERENCES CastMember(Id);
ALTER TABLE CastMemberRole ADD CONSTRAINT fk_role_castmemberrole_id FOREIGN KEY (`Role`) REFERENCES Role(Id); 
ALTER TABLE Listing ADD CONSTRAINT fk_property_listing_id FOREIGN KEY (`Property`) REFERENCES Property(Id);
ALTER TABLE Listing ADD CONSTRAINT fk_cancellationpolicy_listing_id FOREIGN KEY (`CancellationPolicy`) REFERENCES CancellationPolicy(Id);
ALTER TABLE Property ADD CONSTRAINT fk_clientaccount_property_id FOREIGN KEY (`ClientAccount`) REFERENCES ClientAccount(Id);
ALTER TABLE ListingAmenity ADD CONSTRAINT fk_listing_listingamenity_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
ALTER TABLE ListingAmenity ADD CONSTRAINT fk_amenity_listingamenity_id FOREIGN KEY (`Amenity`) REFERENCES Amenity(Id);
ALTER TABLE ChecklistItem ADD CONSTRAINT fk_checklist_checklistitem_id FOREIGN KEY (`Checklist`) REFERENCES Checklist(Id);
ALTER TABLE Client ADD CONSTRAINT fk_clientaccount_client_id FOREIGN KEY (`ClientAccount`) REFERENCES ClientAccount(Id);
ALTER TABLE ListingPlatform ADD CONSTRAINT fk_platform_listingplatform_id FOREIGN KEY (`Platform`) REFERENCES Platform(Id);
ALTER TABLE ListingPlatform ADD CONSTRAINT fk_listing_listingplatform_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
ALTER TABLE Reservation ADD CONSTRAINT fk_platform_reservation_id FOREIGN KEY (`Platform`) REFERENCES Platform(Id);
ALTER TABLE Reservation ADD CONSTRAINT fk_listing_reservation_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
ALTER TABLE Reservation ADD CONSTRAINT fk_guest_reservation_id FOREIGN KEY (`Guest`) REFERENCES Guest(Id);
ALTER TABLE ClientAccount ADD CONSTRAINT fk_castmember_clientaccount_id FOREIGN KEY (`CleaningCrew`) REFERENCES CastMember(Id);
ALTER TABLE Guest ADD CONSTRAINT fk_castmember_guest_id FOREIGN KEY (`CreatedBy`) REFERENCES CastMember(Id);

-- ALTER TABLE Review ADD CONSTRAINT fk_reservation_review_id FOREIGN KEY (`Reservation`) REFERENCES Reservation(Id);
-- ALTER TABLE Review ADD CONSTRAINT fk_listing_review_id FOREIGN KEY (`Listing`) REFERENCES Listing(Id);
-- ALTER TABLE Review ADD CONSTRAINT fk_guest_review_id FOREIGN KEY (`Guest`) REFERENCES Guest(Id);