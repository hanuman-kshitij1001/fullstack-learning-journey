Table Queries:

Insert into Table

INSERT INTO table_name
(colname 1, colname2)           -- Yaha Pe ye Order bahot matter karta hai agr ye jiss order me hai usi order me hamri valuse enter hongi theek hai na 
VALUES
(col1_v1, col2_v1), 
(col1_v2, col2_v2);

Example:
(101, "adam"),
(102, "Bob" )



Work On Work Bech :

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