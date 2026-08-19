Constraints:   ye hare Database ke andhr rules hote hai yani haam Database ke andhr kiss traha ke data ko define karne wale hai ye wo sare rules hote hai waise to bahot sare constrain ya rules hote but we can select here soe important constrain ok 
Rules for data in the table

-- Ye HAmare Basic Constrint hote hai ;
1-  NOT NULL        :    columns cannot have a null value

2-  UNIQUE          :    all values in column are different

3-  DEFAULT         :    sets the default value of a column

4-  CHECK           :    it can limit the values allowed in a column



Example 1:

CREATE TABLE  user(
    id INT,
    age INT,
    name VARCHAR(100) NOT NULL,    -- ese Hoga kya Koi Bhi ese Khali nahi Chod sakta Ese Bharna hi padehga 
    email VARCHAR(100) UNIQUE,     -- Esme haam agr same email ek bar se jada baar use kiye to ye hame Error denga koi Hamne UNIQUE set kiya hai theek hai na 
    following INT,
    followers INT,
    CONSTRAINT age_check CHECK age >= 13  -- age_check bass ek variable haam chahe to bina age_check likhe hi direct use kar sakte hai 
);



Example 2:

salary INT DEFAULT 25000
CONSTRAINT age_check CHECK ( age >= 1B AND city="Delhi")



-- Advance Constraint:

1- PRIMARY KEY: makes a column unique & not null but used only for one == Matlb sun hamne jiss bhi column ko bol diya ki ye hamra primary key hai to wo column Automatically unique bhi ho jayega aur not null bhi ho  jayega theek hai na aur haam shirf ek hi column ko ko ya ek hi set of column ko primary key bana sakte hai always one 

    CREATE TABLE temp (
    id int not null,
    PRIMARY KEY (id)
);


2- FOREIGN KEY: prevent actions that would destroy links between tables  ===  

    CREATE TABLE temp (
    cust_id int,
    FOREIGN KEY (cust_id) references customer(id)
);