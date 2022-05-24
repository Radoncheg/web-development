CREATE TABLE faculty
(   
    id INT AUTO_INCREMENT NOT NULL,
    faculty_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE student_group
(   
    id INT AUTO_INCREMENT NOT NULL,
    group_name VARCHAR(255) NOT NULL,
    faculty_number INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (faculty_number) REFERENCES faculty(id)
);

CREATE TABLE student
(   id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    group_number INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (group_number) REFERENCES student_group(id)
);
