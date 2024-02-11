-- users table 
    --id 
    --email
    --password
-- todos table
    --id
    --title
    --description
    --user_id
    --done

--Create table users  
CREATE TABLE users (
    id Serial primary key , 
    email varchar(250) unique not null , 
    password varchar(250) not null
)
--todos table 
CREATE TABLE todos (
    id SERIAL PRIMARY KEY ,
    title TEXT NOT NULL , 
    description TEXT  ,
    user_id INTEGER REFERENCES users(id) ,
    done BOOLEAN DEFAULT FALSE
)