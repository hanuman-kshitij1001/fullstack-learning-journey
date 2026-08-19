
Select Command:
Selects & Show data from the DB

Syntax: ⬇️

SELECT col1, col2 FROM table_name;
Syntax (to show all)
SELECT * FROM table_name;

* means All Theek hai na  



-- Code : work from workbech :

CREATE TABLE user (
    id          INT,
    age         INT,
    name        VARCHAR(30) NOT NULL,
    email       VARCHAR(50) UNIQUE,
    followers   INT DEFAULT 0,
    following   INT,
    CONSTRAINT CHECK (age >= 13) ,
    PRIMARY KEY (id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "ardan", "odam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "candy", "casoy@email.com", 306, 306),
(4, 17, "donald", "dousld@gmail.com", 200, 105);