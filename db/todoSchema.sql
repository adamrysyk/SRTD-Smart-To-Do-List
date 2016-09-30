DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS lists CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS migrations CASCADE;
DROP TABLE IF EXISTS migrations_lock CASCADE;




-- CREATE TABLE users (
--     user_id INT PRIMARY KEY,
--     first_name VARCHAR (100),
--     last_name VARCHAR (100),
--     email VARCHAR (100),
--     password VARCHAR (100)
-- );

-- CREATE TABLE lists (
--     list_id INT PRIMARY KEY,
--     user_id INT REFERENCES users(user_id),
--     list_kind VARCHAR(100)
-- );

-- CREATE TABLE items (
--     item_id INT PRIMARY KEY,
--     list_id VARCHAR(100),
--     item VARCHAR(100),
--     entry_date DATE
-- );



-- INSERT INTO users (first_name, last_name, email, password)
--   VALUES ('Abraham', 'Lincoln', 'badass@gmail.com', 'pa55w0rd'),
--          ('Mahatma', 'Gandhi', 'badass@gmail.com', 'pa55w0rd'),
--          ('Paul', 'Rudd', 'badass@gmail.com', 'pa55w0rd');
-- INSERT INTO lists (first_name, last_name, birthdate)
--   VALUES ('Paul', 'Rudd', 'badass@gmail.com', 'pa55w0rd');

-- INSERT INTO items (first_name, last_name, birthdate)
--   VALUES ('Paul', 'Rudd', 'badass@gmail.com', 'pa55w0rd');
