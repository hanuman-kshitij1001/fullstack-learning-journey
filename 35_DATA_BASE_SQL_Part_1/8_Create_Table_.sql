Table Queries: 

1️⃣ Create:  
2️⃣ Insert:
3️⃣ Update:
4️⃣ Alter:
5️⃣ Truncate:
6️⃣ Delete:




1️⃣ Create:  Create Query Ka Kaam Hota ahi Kiss bhi table s=ke Liye uska Schema/Column define karna theek hai na  

Create Table
CREATE TABLE table_name ( 
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint,
    column_name5 datatype constraint,
    column_name5 datatype constraint,
    column_name6 datatype constraint,
);


..............................................DATA-TYPES.................................................

"-------------------------------------------------------------------------------------------------------"
| DATATYPE | DESCRIPTION                                                                 | USAGE        |
|----------|-----------------------------------------------------------------------------|--------------|
| CHAR     | string(0 - 255), can store characters of fixed length                       | CHAR(50)     |
|----------|-----------------------------------------------------------------------------|--------------|
| VARCHAR  | string(0 - 255), can store characters up to given length                    | VARCHAR(50)  |
|----------|-----------------------------------------------------------------------------|--------------|
| BLOB     | string(0 - 65535), can store binary large object                            | BLOB(1000)   |
|----------|-----------------------------------------------------------------------------|--------------|
| INT      | integer (-2,147,483,648 to 2,147,483,647)                                   | INT          |
|----------|-----------------------------------------------------------------------------|--------------|
| TINYINT  | integer (-128 to 127)                                                       | TINYINT      |
|----------|-----------------------------------------------------------------------------|--------------|
| BIGINT   | integer (-9, 223, 372, 036, 854, 775, 808 to 9,223,372,036,854,775,807)     | BIGINT       |
|----------|-----------------------------------------------------------------------------|--------------|
| BIT      | can store x-bit values, x can range from 1 to 64                            | BIT(2)       |
|----------|-----------------------------------------------------------------------------|--------------|
| FLOAT    | decimal number with precision up to 23 digits                               | FLOAT        |
|----------|------------------------------------------------------------------------------|--------------|
| DOUBLE   | decimal number with 24 to 53 digits precision                               | DOUBLE       |
|----------|-----------------------------------------------------------------------------|--------------|
| BOOLEAN  | boolean values 0 or 1                                                       | BOOLEAN      |
|----------|-----------------------------------------------------------------------------|--------------|
| DATE     | date in format YYYY-MM-DD ranging from 1000-01-01 to 9999-12-31             | DATE         |
|----------|-----------------------------------------------------------------------------|--------------|
| YEAR     | year in 4 digits format ranging from 1901 to 2155                           | YEAR         |
"-------------------------------------------------------------------------------------------------------"




Example In WorkBench 



Create database if not exists instagram;
Use instagram;
-- CREATE TABLE IF NOT EXISTS user
CREATE TABLE  user(
    id INT,
    name VARCHAR(100),
    email VARCHAR(100),
    following INT,
    followers INT
);

INSERT INTO user(id , name , email , following , followers) VALUES
(1, 'Aarav Sharma', 'aarav1@gmail.com', 120, 300),
(2, 'Vivaan Patel', 'vivaan2@gmail.com', 80, 150),
(3, 'Aditya Verma', 'aditya3@gmail.com', 200, 500),
(4, 'Vihaan Singh', 'vihaan4@gmail.com', 60, 90),
(5, 'Arjun Mehta', 'arjun5@gmail.com', 140, 260),
(6, 'Sai Kumar', 'sai6@gmail.com', 75, 180),
(7, 'Reyansh Gupta', 'reyansh7@gmail.com', 95, 220),
(8, 'Krishna Iyer', 'krishna8@gmail.com', 110, 330),
(9, 'Ishaan Das', 'ishaan9@gmail.com', 50, 120),
(10, 'Kabir Khan', 'kabir10@gmail.com', 180, 410),
(11, 'Rohan Joshi', 'rohan11@gmail.com', 130, 270),
(12, 'Yash Jain', 'yash12@gmail.com', 70, 160),
(13, 'Manav Bansal', 'manav13@gmail.com', 160, 350),
(14, 'Kunal Agarwal', 'kunal14@gmail.com', 45, 80),
(15, 'Harsh Vardhan', 'harsh15@gmail.com', 210, 600),
(16, 'Dev Malhotra', 'dev16@gmail.com', 98, 210),
(17, 'Rahul Nair', 'rahul17@gmail.com', 77, 140),
(18, 'Siddharth Roy', 'sid18@gmail.com', 155, 290),
(19, 'Aman Tiwari', 'aman19@gmail.com', 125, 260),
(20, 'Ankit Dubey', 'ankit20@gmail.com', 85, 170),
(21, 'Mohit Sinha', 'mohit21@gmail.com', 140, 320),
(22, 'Sumit Yadav', 'sumit22@gmail.com', 100, 210),
(23, 'Nikhil Choudhary', 'nikhil23@gmail.com', 65, 130),
(24, 'Pankaj Mishra', 'pankaj24@gmail.com', 175, 390),
(25, 'Saurabh Pandey', 'saurabh25@gmail.com', 90, 200),
(26, 'Deepak Rawat', 'deepak26@gmail.com', 115, 240),
(27, 'Tarun Kapoor', 'tarun27@gmail.com', 60, 100),
(28, 'Ritesh Thakur', 'ritesh28@gmail.com', 145, 310),
(29, 'Varun Saxena', 'varun29@gmail.com', 190, 420),
(30, 'Gaurav Arora', 'gaurav30@gmail.com', 80, 150),
(31, 'Shivam Bhatt', 'shivam31@gmail.com', 135, 280),
(32, 'Ayush Srivastava', 'ayush32@gmail.com', 95, 210),
(33, 'Prateek Kulkarni', 'prateek33@gmail.com', 105, 260),
(34, 'Neeraj Tripathi', 'neeraj34@gmail.com', 50, 110),
(35, 'Lokesh Parmar', 'lokesh35@gmail.com', 170, 390),
(36, 'Vikas Chauhan', 'vikas36@gmail.com', 88, 175),
(37, 'Alok Reddy', 'alok37@gmail.com', 120, 290),
(38, 'Hemant Solanki', 'hemant38@gmail.com', 66, 140),
(39, 'Ravi Pillai', 'ravi39@gmail.com', 155, 340),
(40, 'Dinesh Naidu', 'dinesh40@gmail.com', 72, 160),
(41, 'Suraj Patil', 'suraj41@gmail.com', 110, 250),
(42, 'Tejas Shinde', 'tejas42@gmail.com', 130, 300),
(43, 'Mahesh Pawar', 'mahesh43@gmail.com', 85, 190),
(44, 'Uday Deshmukh', 'uday44@gmail.com', 95, 205),
(45, 'Chetan More', 'chetan45@gmail.com', 140, 310),
(46, 'Nitin Kadam', 'nitin46@gmail.com', 60, 120),
(47, 'Ajay Shetty', 'ajay47@gmail.com', 165, 360),
(48, 'Kiran Shelar', 'kiran48@gmail.com', 75, 170),
(49, 'Rohit Patankar', 'rohit49@gmail.com', 100, 230),
(50, 'Sameer Sawant', 'sameer50@gmail.com', 180, 400);

SELECT * FROM USER;

 


