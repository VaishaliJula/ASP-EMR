CREATE TABLE `PatientRegistration` (
	`MRnum` INT NOT NULL,
	`FirstName` varchar(30) NOT NULL,
	`LastName` varchar(30) NOT NULL,
	`Salutation` varchar(30) NOT NULL,
	`DOB` DATE NOT NULL,
	`Race` varchar(30) NOT NULL,
	`Ethnicity` varchar(30) NOT NULL,
	`Gender` varchar(30) NOT NULL,
	`GenderIdentity` varchar(30) NOT NULL,
	`Occupation` varchar(30) NOT NULL,
	`SexOrientation` varchar(30) NOT NULL,
	`MaritalStatus` varchar(30) NOT NULL,
	`PrefferedLanguage` varchar(30) NOT NULL,
	`CommunicationPreferences` varchar(30) NOT NULL,
	`DisabilityStatus` varchar(30) NOT NULL,
	`FirstVisit` DATETIME NOT NULL,
	`SSN` bigint NOT NULL,
	`Addressline1` varchar(30) NOT NULL,
	`Addressline2` varchar(30),
	`ZipCode` bigint NOT NULL,
	`City` varchar(30) NOT NULL,
	`State` varchar(30) NOT NULL,
	`HomeTelephone` bigint,
	`MobileNo` bigint NOT NULL,
	`Kin_First` varchar(30) NOT NULL,
	`Kin_Last` varchar(30) NOT NULL,
	`Kin_Address` varchar(30) NOT NULL,
	`Kin_Telephone` varchar(30) NOT NULL,
	`Relationship` varchar(30) NOT NULL,
	PRIMARY KEY (`MRnum`)
);

CREATE TABLE `CommonRegistration` (
	`FirstName` varchar NOT NULL,
	`LastName` varchar NOT NULL,
	`DOB` DATE NOT NULL,
	`Addressline1` varchar NOT NULL,
	`Addressline2` varchar,
	`ZipCode` bigint NOT NULL,
	`City` varchar NOT NULL,
	`State` varchar NOT NULL,
	`MobileNo` bigint NOT NULL,
	`Title` varchar NOT NULL,
	`ID` int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `Rolesable` (

);

CREATE TABLE `AppointmentsTable` (
	`MRnum` int NOT NULL,
	`PatientName` int NOT NULL,
	`DateTime` DATETIME NOT NULL,
	`SOAP_Note` varchar NOT NULL,
	`Problem_ChiefComplaint` varchar NOT NULL,
	`LastMedication` varchar NOT NULL,
	`HealthStatus` varchar NOT NULL,
	`Age` varchar NOT NULL,
	`Comments` varchar
);

