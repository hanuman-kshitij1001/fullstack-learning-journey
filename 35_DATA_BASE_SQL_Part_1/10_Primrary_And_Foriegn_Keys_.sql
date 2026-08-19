What are Keys?:

Keys are special columns in the table

Primary Key
It is a column (or set of columns) in a table that uniquely identifies each row. (a unique id) 
There is only 1 PK & it should be NOT null.



Foreign Key
A foreign key is a column (or set of columns) in a table that refers to the primary key in
FKs can have duplicate & null values.
There can be multiple FKs.




---------------------- USER TABLE -------------------------                                              
| Id | Name   | Email             | Followers | Following |
|----|--------|-------------------|-----------|-----------|
| 1  | Adam   | adam@yahoo.in     | 123       | 145       |
| 2  | Bob    | bob123@gmail.com  | 200       | 200       |
| 3  | Casey  | casey@email.com   | 300       | 306       |
| 4  | Donald | donald@gmail.com  | 200       | 105       |
-----------------------------------------------------------

-------- POSTS TABLE ------------ 
| Id | Content        | User_id |
|----|----------------|---------|
| 1  | "Hello World"  | 3       |
| 2  | "I am back!"   | 4       |
| 3  | "Bye Bye"      | 1       |
---------------------------------



1- jo Yaha User table me id hai wahi same id hamre Posts table me  User_id Ke form me dikhti hai
2- To agr haam dekhe to usser table ke andhr hamari ID hai wo primaray key hai 
3- Aur Post Table Ke Andhr Id Kya hai Primaray key hai 
4- Post table ke andhr hamri User_id Kya hai Foriegn key hai 