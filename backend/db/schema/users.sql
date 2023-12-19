-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(80) NOT NULL, 
    street VARCHAR(80) NOT NULL,
    postal_code VARCHAR(80) NOT NULL,
    city VARCHAR(80) NOT NULL,
    phone VARCHAR(32),
    role VARCHAR(80) NOT NULL
);
