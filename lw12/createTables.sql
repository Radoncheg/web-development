CREATE TABLE faculty
(   
    id INT AUTO_INCREMENT NOT NULL,
    FacName VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE stdGroup
(   
    id INT AUTO_INCREMENT NOT NULL,
    GroupName VARCHAR(50) NOT NULL,
    FacNo INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (FacNo) REFERENCES faculty(id)
);

CREATE TABLE student
(   id INT AUTO_INCREMENT NOT NULL,
    StdFirstName VARCHAR(50) NOT NULL,
    StdLastName VARCHAR(50) NOT NULL,
    StdAge INT NOT NULL,
    GroupNo INT NOT NULL,
    FOREIGN KEY (GroupNo) REFERENCES stdGroup(id),
    PRIMARY KEY (id)
);
